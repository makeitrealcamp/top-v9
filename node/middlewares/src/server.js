const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { connect } = require('./db')

const port = 8000
const app = express()
connect()

function logger(config){
  return function(req, res, next) {
    console.log('config', config)
    console.log(req.method, req.path)
    next()
  }
}

function auth(req, res, next) {
  const isAuthenticated = true

  if(isAuthenticated) {
    console.log('user is authenticated')
    next()
  }
}

// Content-Type: "application/json"
app.use(express.json())
app.use(cors({
  origin: '*'
}))
// app.use(logger())
// app.use('/about', logger({ about: true }))
app.use(morgan('dev'))

// router.use(logger)
// router.route('/').post(auth, bookController.create)

// app.get('/', logger, (req, res) => {
app.get('/', auth, (req, res) => {
  res.sendStatus(200)
})

app.get('/about', (req, res) => {
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
});
