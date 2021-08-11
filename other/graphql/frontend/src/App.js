import { useState, useEffect } from 'react'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from '@apollo/react-hooks'
import './App.css';

const GET_USERS = gql`
  {
    getUsers {
      id
      name
      age
    }
  }
`

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $age: Int!) {
    createUser(name: $name, age: $age) {
      id
      name
      age
    }
  }
`

const GET_USER = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      age
    }
  }
`


function App() {
  const { data, error, loading } = useQuery(GET_USERS)
  const details = useQuery(GET_USER, { variables: { id: "1" } })
  const [ createUser, response ] = useMutation(CREATE_USER)
  const [ name, setName ] = useState('')
  const [ age, setAge ] = useState(0)

  useEffect(() => {
    console.log(response)
  }, [response])

  useEffect(() => {
    console.log(details)
  }, [details])

  function handleSubmit(e) {
    e.preventDefault()

    createUser({ variables: { name, age: +age } })
  }

  if(loading) return <p>Loading...</p>
  if(error) return <p>Somenthing went wrong</p>
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          onChange={e => setAge(e.target.value)}
          value={age}
        />
        <button>Create user</button>
      </form>
      {
        !!data &&
        !!data.getUsers &&
        Array.isArray(data.getUsers) &&
        data.getUsers.map(({ id, name, age }) => (
          <article key={id}>
            <h1>{name}</h1>
            <p>{age}</p>
          </article>
        )
      )}
    </div>
  );
}

export default App;
