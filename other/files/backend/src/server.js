require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const formData = require('./utils/formData')

const port = process.env.PORT || 8000
const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.post('/users/profile', formData, (req, res) => {
  const { body } = req

  // {
  //   email: String,
  //   profilePicture: String
  // }

  // await User.create(body)
  res.status(201).json(body)
})

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
});
