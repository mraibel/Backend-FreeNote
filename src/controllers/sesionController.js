const Student = require('../models/studentModel')

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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

module.exports = {
    login
}