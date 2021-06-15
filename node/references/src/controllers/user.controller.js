const User = require('../models/user.model')

module.exports = {
  // create: async function create(req, res)
  async create(req, res) {
    try {
      const { body } = req

      const user = await User.create(body)
      res.status(201).json(user)
    } catch(error) {
      res.status(400).json({ message: error.message })
    }

    // User
    //   .create(body)
    //   .then(user => {
    //     res.status(201).json(user)
    //   })
    //   .catch(error => {
    //     res.status(400).json({ message: error.message })
    //   })
  },
  async list(req, res) {
    try {
      const users = await User.find().populate('articles')
      res.status(200).json(users)
    } catch(error) {
      res.status(500).json({ message: error.message })
    }

    // User
    //   .find()
    //   .populate('articles')
    //   .then(users => {
    //     res.status(200).json(users)
    //   })
    //   .catch(error => {
    //     res.status(500).json({ message: error.message })
    //   })
  }
}
