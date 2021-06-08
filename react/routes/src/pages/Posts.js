import React from 'react'
import axios from 'axios'
import Loading from '../components/Loading'
import LoadError from '../components/LoadError'
import Post from '../components/Post'

class Posts extends React.Component {
  state = {
    posts: [],
    loading: true,
    error: false,
  }

  componentDidMount() {
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: '/posts'
    })
      .then(({ data }) => {
        this.setState({
          posts: data,
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
    const { posts, loading, error } = this.state;

    if(loading) return <Loading />
    if(error) return <LoadError />
    return (
      <main>
        {!!posts && posts.length > 0 && posts.map(({ id, title, body }) => (
          <Post
            key={id}
            id={id}
            title={title}
            body={body}
          />
        ))}
      </main>
    )
  }
}

export default Posts
