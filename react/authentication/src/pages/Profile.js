import axios from 'axios'
import React from 'react'

class Profile extends React.Component {
  state = {
    email: '',
    loading: true,
    error: '',
  }

  async componentDidMount() {
    try {
      const token = localStorage.getItem('token')

      const { data } = await axios({
        method: 'GET',
        baseURL: 'http://localhost:8000',
        url: '/users/profile',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      this.setState({
        email: data.email,
        loading: false
      })
    } catch(error) {
      localStorage.removeItem('token')
      this.props.history.push('/login')
    }
  }

  render() {
    const { email, loading, error } = this.state

    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>
    return <h1>Hola {email}</h1>
  }
}

export default Profile
