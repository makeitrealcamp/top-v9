import { useSelector, useDispatch } from 'react-redux'
import { changeText } from '../store/textReducer'

function TextArea() {
  const dispatch = useDispatch()

  const { text } = useSelector(({ textReducer }) => {
    return {
      text: textReducer.text
    }
  })

  return (
    <textarea
      onChange={e => dispatch(changeText(e.target.value))}
      value={text}
    />
  )
}

export default TextArea
