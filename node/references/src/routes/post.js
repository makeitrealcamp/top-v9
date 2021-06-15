const router = require('express').Router()
const postController = require('../controllers/post.controller')

router.route('/:userId').post(postController.create)
// router.route('/:userId').get(postController.list) // /users/:userId/posts
router.route('/:postId').get(postController.show)

module.exports = router
