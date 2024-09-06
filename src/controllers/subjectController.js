const Subject = require('../models/subjectModel')
const Grade = require('../models/gradeModel')
const Subgrade = require('../models/subgradeModel')

const getSubjectsBySemesterId = async (req, res) => {

    const { id } = req.params

    try {

        const semesters = await Subject.findAll({
            where: {
                id_semester: id
            }
        })

        if (semesters < 0) {
            res.status(400).json({ message: "El estudiante no tiene semestres asociados" })
        }

        res.status(200).json(semesters)

    } catch (e) {
        res.status(500).json({ message: "No se pudieron obtener los semestres" })
    }
}

const getSubjectById = async (req, res) => {

    const { id } = req.params

    try {

        const subject = await Subject.findByPk(id, {
            include:[
                {
                    model:Grade,
                    include:[{model:Subgrade}]
                },
            ]
        })

        if(!subject){
            res.status(400).json({ message: 'No existe asignatura con este id' })
        }

        res.status(200).json(subject)

    } catch (e) {
        res.status(500).json({ message: 'No se pudo obtener la asignatura' })
    }
}

module.exports = {
    getSubjectsBySemesterId,
    getSubjectById
}