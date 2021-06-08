import React from 'react'
import axios from 'axios'
import './App.css';

// protocolo - ip/dominio:puerto - path
// https://makeitreal.camp/about/

// http://localhost:3000
// http://127.0.0.1:3000


class App extends React.Component {
  state = {
    count: 0,
    loading: true,
    posts: [],
    error: false,
  }

  UNSAFE_componentWillMount() {
    console.log('el componente se está montando')
  }

  componentDidMount() {
    console.log('el componente se montó')

    console.log('iniciando petición http')
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts'
    })
      .then(({ data }) => {
        this.setState({
          posts: data,
          loading: false,
        }, () => console.log(this.state.posts))
      })
      .catch(err => {
        this.setState({
          error: true,
          loading: false,
        })
      })
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('actual', this.state)
    console.log('siguiente', nextState)
    console.log('el componente se debería actualizar')
    // if(nextState.count % 2 === 0) {
    // if(this.state.count !== nextState.count) {
      return true
    // }

    // return false
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log('el componente se va a actualizar')
  }

  componentDidUpdate() {
    console.log('el componente se actualizó')
  }

  // componentWillUnmount() {}

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    }, () => console.log('real count', this.state.count))
    console.log('count', this.state.count)
  }

  render() {
    console.log('renderizado')
    const { loading, posts, error } = this.state

    if(loading) return <p>Loading</p>
    if(error) return <p>Ups! Algo salió mal</p>
    return (
      <div className="App">
        <button type="button" onClick={this.handleClick}>{this.state.count}</button>
        {!!posts && posts.length > 0 && posts.map(({ body, title, id }) => (
          <article key={id}>
            <h1>{title}</h1>
            <p>{body}</p>
          </article>
        ))}
      </div>
    );
  }
}

export default App;
