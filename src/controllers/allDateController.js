const Event = require('../models/eventModel')
const Grade = require('../models/gradeModel')
const Semester = require('../models/semesterModel')
const Student = require('../models/studentModel')
const Subgrade = require('../models/subgradeModel')
const Subject = require('../models/subjectModel')


const getAllDataByStudentId = async (req, res) => {
    
    const { id } = req.params
    

    try {
        
        const data = await Student.findByPk(id, {
            include:[
                {
                    model:Event
                },
                {
                    model:Semester,
                    include:[
                        {
                            model:Subject,
                            include:[
                                {
                                    model:Grade,
                                    include:[
                                        {
                                            model:Subgrade
                                        }
                                    ]
                                }    
                            ]
                        }
                    ]
                },
            ]
        })

        if(!data) {
            res.status(400).json({ message: 'No hay datos asociados al usuario con el id' })
        }
        
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message:'No se pudieron obtener los datos del usuario' })
    } 
}

module.exports = {
    getAllDataByStudentId
}