const Post = require('../models/post.model')
const User = require('../models/user.model')

module.exports = {
  create(req, res) {
    const { body, params: { userId } } = req

    User
      .findById(userId)
      .then(user => {
        if(user) {
          Post
            .create({
              ...body,
              author: userId
            })
            .then(post => {
              user.articles.push(post._id)

              user
                .save({ validateBeforeSave: false })
                .then(() => {
                  res.status(201).json(post)
                })
                .catch(error => {
                  res.status(400).json({ message: error.message })
                })
            })
            .catch(error => {
              res.status(400).json({ message: error.message })
            })
        } else {
          throw new Error('El usuario no existe')
        }
      })
      .catch(error => {
        res.status(400).json({ message: error.message })
      })
  },
  list(req, res) {
    const { userId } = req.params

    Post
      .find({ author: userId })
      .select('title content -_id')
      .then(posts => {
        res.status(200).json(posts)
      })
      .catch(error => {
        res.status(404).json({ message: error.message })
      })
  },
  show(req, res) {
    const { postId } = req.params

    Post
      .findById(postId)
      .populate('author', 'name')
      .then(post => {
        res.status(200).json(post)
      })
      .catch(error => {
        res.status(404).json({ message: error.message })
      })
  }
}
