const express = require('express')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid');

const app = express()

app.use(express.json())
app.use(cors())

// { _id, title, author, rating }
let books = []

// CRUD
// Create
// axios({
//   method: 'POST',
//   baseURL: 'http://localhost:8000',
//   url: '/books',
//   data: {
//     title: 'title 1',
//     author: 'author 1'
//   }
// })
app.post('/books', (req, res) => {
  const { body } = req

  const newBook = {
    _id: uuidv4(),
    title: body.title,
    author: body.author,
    ratings: [],
    overall: 0,
  }

  books = [ ...books, newBook ]

  res.status(201).json({ message: 'El libro fue creado', book: newBook })
})

// Read
// axios({
//   method: 'GET',
//   baseURL: 'http://localhost:8000',
//   url: '/books',
// })
app.get('/books', (req, res) => {
  const { title, author } = req.query

  let result = books
  if(author) {
    result = result.filter(book => book.author === author)
  }

  if(title) {
    result = result.filter(book => book.title === title)
  }

  res.status(200).json({ message: `Se encontraron ${books.length} libros`, books: result })
})

// axios({
//   method: 'GET',
//   baseURL: 'http://localhost:8000',
//   url: '/books/1234-kljasdf-ajdsio23784',
// })
app.get('/books/:bookId', (req, res) => {
  const { bookId } = req.params

  const book = books.filter(book => {
    return book._id === bookId
  })[0]

  res.status(200).json({ message: 'Se encontró el libro', book })
})

// Update
// axios({
//   method: 'PUT',
//   baseURL: 'http://localhost:8000',
//   url: '/books/2314asg-ea9t8-l;dkasj',
//   data: {
//     rating: 5
//   }
// })
app.put('/books/:bookId', (req, res) => {
  const { body, params } = req

  let updatedBook;
  books = books.map(book => {
    if(book._id === params.bookId) {
      const ratings = [ ...book.ratings, body.rating]
      const overall = ratings.reduce((acc, num) => acc + num, 0) / ratings.length

      updatedBook = {
        ...book,
        ratings,
        overall,
      }

      return updatedBook
    }
    return book
  })

  res.status(200).json({ message: 'El libro se actualizó', book: updatedBook })
})

// Delete
// axios({
//   method: 'DELETE',
//   baseURL: 'http://localhost:8000',
//   url: '/books/2314asg-ea9t8-l;dkasj',
// })
app.delete('/books/:bookId', (req, res) => {
  const { bookId } = req.params

  books = books.filter(book => book._id !== bookId)

  res.status(200).json({ message: `Se borro el libro con id ${bookId}` })
})

app.listen(8000, () => {
  console.log('App running at http://localhost:8000')
})
