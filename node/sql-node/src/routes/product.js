const router = require('express').Router()
const productController = require('../controllers/product.controller')

router.route('/:userId').post(productController.create)
router.route('/:userId').get(productController.list)

module.exports = router
