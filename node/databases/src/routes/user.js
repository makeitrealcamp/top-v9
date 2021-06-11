const router = require('express').Router()
const userController = require('../controllers/user.controller')

// Create
router.route('/').post(userController.create) // /users/
// Read
router.route('/').get(userController.list) // /users/
router.route('/:userId').get(userController.show) // /users/:userId
// Update
router.route('/:userId').put(userController.update) // /users/:userId
// Delete
router.route('/:userId').delete(userController.destroy) // /users/:userId

module.exports = router
