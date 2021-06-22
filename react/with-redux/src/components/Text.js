import { useSelector } from 'react-redux'

function Text() {
  const { text, count } = useSelector(({ textReducer }) => {
    return {
      text: textReducer.text,
      count: textReducer.count,
    }
  })

  return (
    <article>
      <p>{text}</p>
      <p>{count}/255</p>
    </article>
  )
}

export default Text
