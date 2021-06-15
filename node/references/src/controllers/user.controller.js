const User = require('../models/user.model')

module.exports = {
  create(req, res) {
    const { body } = req

    User
      .create(body)
      .then(user => {
        res.status(201).json(user)
      })
      .catch(error => {
        res.status(400).json({ message: error.message })
      })
  },
  list(req, res) {
    User
      .find()
      .populate('articles')
      .then(users => {
        res.status(200).json(users)
      })
      .catch(error => {
        res.status(500).json({ message: error.message })
      })
  }
}
