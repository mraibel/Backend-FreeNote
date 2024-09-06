const Subject = require('../models/subjectModel')

const getSubjectsBySemesterId = async (req, res) => {
    
    const { id } = req.params

    try {
        
        const semesters = await Subject.findAll({
            where:{
                id_semester: id
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
    getSubjectsBySemesterId
}