require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { connect } = require('./db')
const userRouter = require('./routes/user')

const port = process.env.PORT || 8000
const app = express()
connect()

app.use(express.json())
app.use(cors({
  origin: process.env.FRONTEND_URL,
}))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.status(200).json({ message: 'hello world', bar: process.env.FOO })
})

app.use('/users', userRouter)

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
});
