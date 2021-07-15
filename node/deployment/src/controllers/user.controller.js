const User = require('../models/user.model')

module.exports = {
  async create(req, res) {
    const { body } = req

    const user = await User.create(body)

    res.status(201).json(user)
  },
  async list(req, res) {
    const users = await User.find()

    res.status(200).json(users)
  }
}
