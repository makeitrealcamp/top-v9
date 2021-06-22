import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../store/postsReducer'

function Posts() {
  const dispatch = useDispatch()

  const { loading, error, posts } = useSelector(({ postsReducer }) => {
    return {
      loading: postsReducer.loading,
      error: postsReducer.error,
      posts: postsReducer.posts,
    }
  })

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  if(loading) return <p>Loading...</p>
  if(error) return <p>Oops Something went wrong</p>
  return (
    <main>
      {!!posts && posts.length > 0 && posts.map(post => {
        return (
          <article key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </article>
        )
      })}
    </main>
  )
}

export default Posts
