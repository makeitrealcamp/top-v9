import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: '/users/'
    })
      .then(({ data }) => setUsers(data))
      .catch(_ => setError(true))
      .finally(() => setLoading(false))
  }, [])

  if(loading) return <p>Loading...</p>
  if(error) return <p>Something went wrong!</p>
  return (
    <div className="App">
      {!!users && users.length > 0 && users.map(user => (
        <article key={user._id}>
          <h2>{user.name}</h2>
        </article>
      ))}
    </div>
  );
}

export default App;
