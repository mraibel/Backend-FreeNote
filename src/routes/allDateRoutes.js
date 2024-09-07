const { Router } = require("express")
const { getAllDataByStudentId } = require('../controllers/allDateController')


const router = Router()

router.get('/:id', getAllDataByStudentId)

module.exports = router
