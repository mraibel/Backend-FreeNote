const Semester = require('../models/semesterModel')
const Subject = require('../models/subjectModel')

const getSemesterById = async (req, res) => {
    const { id } = req.params

    try {
        
        const semester = await Semester.findByPk(id, {
            include:[{model:Subject}]
        })

        if(!semester) {
            res.status(400).json({ message: 'No se encontró el semestre' })
        } 
        
        res.status(200).json(semester)
    } catch (e) {
        res.status(500).json({ message: "No se pudo obtener el semestre" })
    }
}

const getSemestersStudentById = async (req, res) => {
    
    const { id } = req.params

    try {
        
        const semesters = await Semester.findAll({
            where:{
                id_student: id
            }
        })
    
        if(semesters < 0 ) {
            res.status(400).json({ message: "El estudiante no tiene semestres asociados" })
        }

        res.status(200).json(semesters)

    } catch(e) {
        res.status(500).json({ message: "No se pudieron obtener los semestres" })
    }
}

module.exports = {
    getSemestersStudentById,
    getSemesterById
}