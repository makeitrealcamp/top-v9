const User = require('../models/user.model')

module.exports = {
  create(req, res) {
    const { body } = req

    User
      .create(body)
      .then(user => {
        res.status(201).json(user)
      })
      .catch(err => {
        res.status(400).json({ message: 'Algo salió mal' })
      })
  },
  list(req, res) {
    User
      .find()
      .then(users => {
        res.status(200).json(users)
      })
      .catch(err => {
        res.status(400).json({ message: 'Algo salió mal' })
      })
  },
  show(req, res) {
    // /:userId
    const { userId } = req.params

    User
      .findById(userId)
      .then(user => {
        res.status(200).json(user)
      })
      .catch(err => {
        res.status(404).json({ message: 'Algo salió mal' })
      })
  },
  update(req, res) {
    const { params: { userId }, body } = req

    // User
    //   .findById(userId)
    //   .then(user => {
    //     user
    //       .update(body)
    //       .then(newUser => {
    //         user === newUser
    //       })
    //   })

    User
      .findByIdAndUpdate(userId, body, {
        new: true,
      })
      .then(user => {
        res.status(200).json(user)
      })
      .catch(err => {
        res.status(400).json({ message: 'Algo salió mal' })
      })
  },
  destroy(req, res) {
    const { userId } = req.params

    User
      .findByIdAndDelete(userId)
      .then(user => {
        res.status(200).json(user)
      })
      .catch(err => {
        res.status(400).json({ message: 'Algo salió mal' })
      })
  }
}

// new Promise((resolve, reject) => {
  // trate de crear un documento
  // si el documento es creado resuelva la promesa con el documento
//   if(create === 'ok') {
//     resolve(documento)
//   } else {
//     reject(error)
//   }
// })
