import React from 'react'
import axios from 'axios'
import Loading from '../components/Loading'
import LoadError from '../components/LoadError'

class Post extends React.Component {
  state = {
    post: null,
    loading: true,
    error: false,
  }

  componentDidMount() {
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: `/posts/${this.props.match.params.postId}`
    })
      .then(({ data }) => {
        this.setState({
          post: data,
          loading: false,
        })
      })
      .catch(err => {
        this.setState({
          error: true,
          loading: false,
        })
      })
  }

  render() {
    const { post, loading, error } = this.state

    if(loading) return <Loading />
    if(error) return <LoadError />
    return (
      <main>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </main>
    )
  }
}

export default Post
