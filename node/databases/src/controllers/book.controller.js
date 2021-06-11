const Book = require('../models/book.model')

module.exports = {
  create(req, res) {
    const { body } = req

    Book
      .create(body)
      .then(book => {
        res.status(201).json(book)
      })
      .catch(err => {
        res.status(400).json({ message: 'Algo salió mal' })
      })
  }
}
