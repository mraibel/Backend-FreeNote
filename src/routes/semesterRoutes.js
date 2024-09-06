const { Router } = require("express")
const { getSemestersById } = require('../controllers/semesterController')


const router = Router()

router.get("/:id", getSemestersById)

module.exports = router