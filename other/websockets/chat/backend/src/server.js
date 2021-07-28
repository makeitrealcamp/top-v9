const express = require('express')
const SocketIO = require('socket.io')
const http = require('http')

const port = 8000
const app = express()
const server = http.createServer(app)
const io = SocketIO(server, {
  cors: {
    origin: '*'
  }
})

app.get('/', () => {
  console.log('hola mundo')
})

io.on('connection', socket => {
  console.log('nueva conexión')

  socket.emit('welcome', { message: 'Bienvenido' })
  // io.emit('welcome', { message: 'Bienvenidos' })
  // socket.broadcast.emit('welcome', { message: 'Bienvenido' })

  socket.on('message', data => {
    // Message.create(data)
    io.emit('message', data)
  })

  socket.on('join', () => {
    socket.join('someroom')
    socket.emit('join', { message: 'you have been connected to someroom' })
  })

  socket.on('leave', () => {
    socket.leave('someroom')
    socket.emit('leave', { message: 'you have been disconnected from someroom' })
  })

  socket.on('private', data => {
    io.to('someroom').emit('private', data)
  })

  socket.on('disconnect', () => {
    io.emit('farewell', { message: 'someome has left the room' })
  })
})

server.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
})
