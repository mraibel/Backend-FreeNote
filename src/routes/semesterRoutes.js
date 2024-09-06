const { Router } = require("express")
const { getSemesterById, getSemestersStudentById } = require('../controllers/semesterController')


const router = Router()

router.get('/:id', getSemesterById)

router.get("/student/:id", getSemestersStudentById)

module.exports = router