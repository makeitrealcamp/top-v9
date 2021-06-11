const { model, Schema } = require('mongoose')

const bookSchema = new Schema({
  title: String,
  author: String,
}, {
  timestamps: true,
})

const Book = model('Book', bookSchema)

module.exports = Book;
