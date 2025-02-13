const UserController = require('../controllers/userController')

const router = require('express').Router()


router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/verifyEmail', UserController.verifyEmail)


module.exports = router