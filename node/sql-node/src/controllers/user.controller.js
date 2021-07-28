const { User } = require('../models')

module.exports = {
  async create(req, res) {
    try {
      const { body } = req

      const user = await User.create(body)

      res.status(201).json(user)
    } catch(err) {
      res.status(400).json({ message: err.message })
    }
  },
  async list(req, res) {
    const users = await User.findAll()

    res.status(200).json(users)
  },
  async show(req, res) {
    const { id } = req.params
    const user = await User.findByPk(id)

    res.status(200).json(user)
  },
  async update(req, res) {
    const { body, params: { id } } = req

    let user = await User.findByPk(id)
    user = await user.update(body)
    // const user = await User.update(body, {
    //   where: {
    //     id
    //   }
    // })

    res.status(200).json(user)
  },
  async destroy(req, res) {
    const { id } = req.params

    // const user = await User.findByPk(id)
    // await user.destroy()
    const user = await User.destroy({
      where: {
        id
      }
    })

    res.status(200).json(user)
  }
}
