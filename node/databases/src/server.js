const express = require('express')
const cors = require('cors')
const connect = require('./db')
const userRouter = require('./routes/user')
const bookRouter = require('./routes/book')

const app = express()
connect()

app.use(express.json())
app.use(cors())

app.use('/users', userRouter)
// post + /users/
app.use('/books', bookRouter)

app.listen(8000, () => {
  console.log('App running at http://localhost:8000')
})
