const { Product, User } = require('../models')

module.exports = {
  async create(req, res) {
    const { body, params: { userId } } = req

    const product = await Product.create(
      body,
      { include: [User] }
    )

    product.setUser(userId)

    res.status(201).json(product)
  },
  async list(req, res) {
    const { params: { userId } } = req

    const products = await Product.scope({ include: [User] }).findAll({
      where: {
        UserId: userId
      }
    })

    res.status(200).json(products)
  }
}
