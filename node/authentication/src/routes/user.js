const router = require('express').Router()
const userController = require('../controller/user.controller')
const { auth } = require('../utils/middlewares')

router.route('/signup').post(userController.signup)
router.route('/signin').post(userController.signin)
router.route('/profile').get(auth, userController.show)

module.exports = router
