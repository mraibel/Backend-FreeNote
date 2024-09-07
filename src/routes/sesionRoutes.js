const { Router } = require("express")
const { login } = require('../controllers/sesionController')

const router = Router()

router.post('/login/', login)

module.exports = router