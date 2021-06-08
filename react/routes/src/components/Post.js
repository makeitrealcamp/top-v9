import { Link } from 'react-router-dom'

function Post({ title, body, id }) {
  return (
    <article>
      <h1>{title}</h1>
      <p>{body}</p>
      <Link to={`/posts/${id}`}>Ver más</Link>
    </article>
  )
}

export default Post
