import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

// los hooks solo se pueden invocar desde un componente o desde otros hooks
// los hooks siempre se deben invocar en el primer nivel y en el mismo orden
// los hooks siempre se deben nombrar usando la palabra use

function Posts({ count }) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // petición
  useEffect(() => {
    async function getPosts() {
      try {
        const { data } = await axios({
          method: 'GET',
          baseURL: 'https://jsonplaceholder.typicode.com',
          url: '/posts'
        })

        setPosts(data)
        setLoading(false)
      } catch(err) {
        setError(true)
        setLoading(false)
      }
    }

    getPosts()
  }, [count])

  // useEffect(() => {
  // }, [])

  // useEffect(() => {
  // }, [name])

  if(loading) return <p>Loading...</p>
  if(error) return <p>Oops Something went wrong</p>
  return (
    <main>
      {!!posts && posts.length && posts.map(post => (
        <article>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </article>
      ))}
    </main>
  )
}

function Form() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  // const [state, setState] = useState({
  //   name: '',
  //   age: 0,
  // })

  // function handleChange(e) {
  //   const { name, value } = e.target

  //   setState(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }))
  // }

  function handleSubmit(e) {
    e.preventDefault()

    console.log({ name, age })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        onChange={e => setAge(e.target.value)}
        value={age}
      />
      <button>enviar</button>
    </form>
  )
}

function App() {
  const [count, setCount] = useState(0)

  // function handleClick() {
    // const [name, setName] = useState('')
  // }
  // if(count < 3) {
  //   const [name, setName] = useState('')
  // }

  function handleClick() {
    // setCount(1)
    // setCount(count + 1) NOOOO
    setCount(prevCount => prevCount + 1)
    // setName(e.target.value)

    // this.setState({
    //   count: this.state.count + 1
    // }) NOOOO
    // this.setState(prevState => ({
    //   count: prevState.count + 1
    // })) SI
  }

  return (
    <div className="App">
      <button
        type="button"
        onClick={handleClick}
      >
        {count}
      </button>
      <Posts count={count} />
      <Form />
    </div>
  );
}

export default App;
