import React from 'react'

class Form extends React.Component {
  state = {
    email: '',
    password: '',
    terms: false,
  }

  handleChange = (event) => {
    const { value, name, checked, type } = event.target

    this.setState({
      [name]: type === 'checkbox' ? checked : value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('submiting')
    console.log(this.state)
  }

  render() {
    const { email, password, terms } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="example@email.com"
          onChange={this.handleChange}
          value={email}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Pa55w0Rd"
          onChange={this.handleChange}
          value={password}
        />
        <label htmlFor="terms">Terms</label>
        <input
          id="terms"
          type="checkbox"
          name="terms"
          onChange={this.handleChange}
          checked={terms}
        />
        <button type="submit">Enviar</button>
      </form>
    )
  }
}

export default Form
