const Semester = require('../models/semesterModel')

const getSemestersById = async (req, res) => {
    
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

        console.log('a')

        res.status(200).json(semesters)

    } catch(e) {
        res.status(500).json({ message: "No se pudieron obtener los semestres" })
    }
}

module.exports = {
    getSemestersById
}