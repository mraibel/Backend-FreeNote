const Student = require('../models/studentModel')

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const nodemailer = require('nodemailer')

const { generateRandomCode } = require('../utils/utils')

const login = async (req, res) => {

    const { email, password } = req.body
    console.log(req.body)

    try {

        const student = await Student.findOne({

            where: {
                email: email
            }
        })

        if (!student) {
            return res.status(400).json({ message: 'No existe cuenta con este correo' })
        }

        const passwordTrue = bcrypt.compareSync(password, student.password)

        if (!passwordTrue) {
            return res.status(400).json({ message: 'Error en la contraseña' })
        }

        const token = jwt.sign({
            usuario: student
        }, 'secret_key', { expiresIn: 108000 })

        res.status(200).json({ student: student, token: token })
    } catch (e) {
        res.status(500).json({ message: 'Error al iniciar sesion' })
    }
}

const requestRegistration = async (req, res) => {
    try {
        const { email } = req.body
        const studentData = req.body

        const student = await Student.findOne({
            where: {
                email: email
            }
        })

        if (student) {
            return res.status(400).json({ message: 'Ya hay una cuenta con este correo' })
        }

        const code = generateRandomCode(6)

        sendConfirmationEmail(email, code)

        res.status(200).json({ newUser: studentData, code: code })
    } catch (e) {
        res.status(500).json({ message: 'No se puedo generar el código de registro' })
    }
}

const createTransport = () => {
    let transporte = null
    transporte = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'freenote2024@gmail.com',
            pass: 'pzpk thid yolk epne'
        }
    })
    return transporte
}

const sendConfirmationEmail = (to, code) => {
    const transport = createTransport()

    const options = {
        from: 'freenote2024@gmail.com',
        to: to,
        subject: 'Código confirmación cuenta',
        html: `
            <p style="font-size: 24px">${code}</p>
        `
    }

    transport.sendMail(options, (error, info) => {
        if (error) {
            return console.log(error)
        }
        console.log('Correo enviado', info.response)
    })
}

const register = async (req, res) => {

    const { name, lastName, email, password } = req.body

    try {

        const passwordHash = bcrypt.hashSync(password, 10)

        const newStudent = await Student.create({
            name: name,
            lastName: lastName,
            email: email,
            password: passwordHash
        })

        const token = jwt.sign({
            usuario: newStudent
        }, 'secret_key', { expiresIn: 108000 })

        res.status(200).json({ student: newStudent, token: token })
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Error al registrar usuario' })
    }
}

module.exports = {
    login,
    register,
    requestRegistration
}