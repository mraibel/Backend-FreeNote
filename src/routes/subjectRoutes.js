const { Router } = require("express")
const { getSubjectsBySemesterId, getSubjectById } = require('../controllers/subjectController')


const router = Router()

router.get("/:id", getSubjectsBySemesterId)

router.get('/grade/:id', getSubjectById)

module.exports = router