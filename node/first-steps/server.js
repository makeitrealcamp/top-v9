// export default App
// module.exports = App

// import App from './path/to/file'
// const App = require('./path/to/file')

// export const Foo
// exports.Foo = () =>

// import { Foo } from './path/to/Foo'
// const { Foo } = require('./path/to/Foo')

const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

// Endpoint
// Método HTTP + Path
// /posts + POST
// /posts + GET
// /posts + PUT

app.get('/', (request, response) => {
  // console.log(request)
  // console.log(response)
  response.status(300).send('<h1>Hola mundo!</h1>')
})

// JSON - JavaScript Object Notation
// No pueden haber comentarios dentro del JSON
// Las cadenas de texto siempre se deben definir con ""
// Las propiedades del objeto siempre deben ser cadenas de texto

app.get('/about', (req, res) => {
  res.status(200).json({ message: 'hola mundo' })
})

app.get('/posts', (req, res) => {
  res.status(200).json([{ id: 1, title: 'title 1', body: 'body 1' }, { id: 2, title: 'title 2', body: 'body 2' }])
})

// app.post('/')
// app.put('/')
// app.delete('/')

app.listen(8000, () => {
  console.log('App running at http://localhost:8000')
})
