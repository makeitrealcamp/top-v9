import React from 'react'
import axios from 'axios'
import Form from '../components/Form'

class Register extends React.Component {
  state = {
    loading: false,
    error: ''
  }

  register = async userData => {
    try {
      this.setState({ loading: true })

      const { data } = await axios({
        method: 'POST',
        baseURL: 'http://localhost:8000',
        url: '/users/signup',
        data: userData
      })

      this.setState({ loading: false })

      localStorage.setItem('token', data.token)
      this.props.history.push('/')
    } catch (error) {
      this.setState({
        error: error.response.data.message,
        loading: false
      })
    }
  }

  render() {
    return (
      <section>
        <Form
          buttonText="Register"
          handleSubmit={this.register}
          disabled={this.state.loading}
        />
        {this.state.error ? <p>{this.state.error}</p> : null}
      </section>
    )
  }
}

export default Register
