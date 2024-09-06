const { Router } = require("express")
const { getSubjectsBySemesterId } = require('../controllers/subjectController')


const router = Router()

router.get("/:id", getSubjectsBySemesterId)

module.exports = router