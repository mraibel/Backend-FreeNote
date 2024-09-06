const Student = require('../models/studentModel')
const bcrypt = require('bcrypt');

const insertStudent = async (req, res) =>{

    const { name, lastName, email, password } = req.body

    const passwordHash = await bcrypt.hash(password, 10)

    try{
        const student = Student.build({
            name: name,
            lastName: lastName,
            email: email,
            password: passwordHash
        })
        await student.save()
        res.status(200).json(student)
    } catch (e) {
        res.status(500).json({ e: "Error al ingresar el estudiante" })
        console.error(e)
    }
}

