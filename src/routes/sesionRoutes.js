const { Router } = require("express")
const { login, register, requestRegistration } = require('../controllers/sesionController')

const router = Router()

router.post('/login/', login)

router.post('/register/', register)

router.post('/requestRegistation/', requestRegistration)

module.exports = router