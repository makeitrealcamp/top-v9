const router = require('express').Router()
const bookController = require('../controllers/book.controller')

router.route('/').post(bookController.create)

module.exports = router
