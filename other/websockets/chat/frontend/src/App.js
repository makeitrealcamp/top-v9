import { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'
import './App.css';

function App() {
  const ref = useRef()
  const [sender, setSender] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    ref.current = io('http://localhost:8000')

    ref.current.on('welcome', data => console.log(data))
    ref.current.on('message', data => console.log(data))
    ref.current.on('join', data => console.log(data))
    ref.current.on('leave', data => console.log(data))
    ref.current.on('private', data => console.log(data))
    ref.current.on('farewell', data => console.log(data))
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    // ref.current.emit('message', { sender, message })
    ref.current.emit('private', { sender, message })
  }

  function handleJoin() {
    ref.current.emit('join')
  }

  function handleLeave() {
    ref.current.emit('leave')
  }

  function disconnect() {
    ref.current.removeAllListeners()
    ref.current.close()
  }

  return (
    <div className="App">
      <button
        type="button"
        onClick={handleJoin}
      >
        Join
      </button>
      <button
        type="button"
        onClick={handleLeave}
      >
        Leave
      </button>
      <button
        type="button"
        onClick={disconnect}
      >
        Disconnect
      </button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="sender">Sender</label>
        <input
          type="text"
          name="sender"
          id="sender"
          onChange={e => setSender(e.target.value)}
          value={sender}
        />
        <label htmlFor="message">Message</label>
        <input
          type="text"
          name="message"
          id="message"
          onChange={e => setMessage(e.target.value)}
          value={message}
        />
        <button>Send</button>
      </form>
    </div>
  );
}

export default App;
