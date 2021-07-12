const User = require('../models/user.model')
const { welcome, recover } = require('../utils/mailer')

module.exports = {
  async create(req, res) {
    const { body } = req

    const user = await User.create(body)
    await welcome(user)

    res.status(201).json({ message: 'revisa tu correo y sigue los pasos' })
  },
  // async recoverPassword(req, res) {
  //   const { body } = req

  //   const user = await User.findOne({ email: body.email })

  //   user.recoverToken = '328dlsjaf9483ja'

  //   user.save()

  //   recover(user)

  //   res.status(200).json({ message: 'revisa tu correo y sigue los pasos' })
  // },
  // async changePassword(req, res) {
  //   if(req.body.recoverToken === user.recoverToken)
  // }
}
