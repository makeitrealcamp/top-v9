const express = require('express')
const cors = require('cors')
const connect = require('./db')
const userRouter = require('./routes/user')

const port = 8000
const app = express()
connect()

app.use(express.json())
app.use(cors())

app.use('/users', userRouter)

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
});
