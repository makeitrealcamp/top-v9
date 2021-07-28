const router = require('express').Router()
const userController = require('../controllers/user.controller')

router.route('/').post(userController.create)
router.route('/').get(userController.list)
router.route('/:id').get(userController.show)
router.route('/:id').put(userController.update)
router.route('/:id').delete(userController.destroy)

module.exports = router
