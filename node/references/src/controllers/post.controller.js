const Post = require('../models/post.model')
const User = require('../models/user.model')

module.exports = {
  async create(req, res) {
    try {
      const { body, params: { userId } } = req

      const user = await User.findById(userId)

      if(!user) {
        throw new Error('El usuario no existe')
      }

      const post = await Post.create({ ...body, author: userId })
      user.articles.push(post._id)

      await user.save({ validateBeforeSave: false })
      res.status(201).json(post)
    } catch(error) {
      res.status(400).json({ message: error.message })
    }

    // User
    //   .findById(userId)
    //   .then(user => {
    //     if(user) {
    //       Post
    //         .create({
    //           ...body,
    //           author: userId
    //         })
    //         .then(post => {
    //           user.articles.push(post._id)

    //           user
    //             .save({ validateBeforeSave: false })
    //             .then(() => {
    //               res.status(201).json(post)
    //             })
    //             .catch(error => {
    //               res.status(400).json({ message: error.message })
    //             })
    //         })
    //         .catch(error => {
    //           res.status(400).json({ message: error.message })
    //         })
    //     } else {
    //       throw new Error('El usuario no existe')
    //     }
    //   })
    //   .catch(error => {
    //     res.status(400).json({ message: error.message })
    //   })
  },
  async list(req, res) {
    try {
      const { userId } = req.params

      const posts = await Post.find({ author: userId }).select('title content -_id')
      res.status(200).json(posts)
    } catch(error) {
      res.status(404).json({ message: error.message })
    }

    // Post
    //   .find({ author: userId })
    //   .select('title content -_id')
    //   .then(posts => {
    //     res.status(200).json(posts)
    //   })
    //   .catch(error => {
    //     res.status(404).json({ message: error.message })
    //   })
  },
  async show(req, res) {
    try {
      const { postId } = req.params

      const post = await Post.findById(postId).populate('author', 'name')
      res.status(200).json(post)
    } catch(error) {
      res.status(404).json({ message: error.message })
    }

    // Post
    //   .findById(postId)
    //   .populate('author', 'name')
    //   .then(post => {
    //     res.status(200).json(post)
    //   })
    //   .catch(error => {
    //     res.status(404).json({ message: error.message })
    //   })
  }
}
