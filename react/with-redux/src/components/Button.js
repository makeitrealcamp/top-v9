import { connect, useDispatch } from 'react-redux'
import { INCREMENT, increment } from '../store/counterReducer'

// function Button({ handleIncrement }) {
function Button() {
  const dispatch = useDispatch()

  function handleClick() {
    // dispatch({ type: INCREMENT })
    dispatch(increment())
  }

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      Increment
    </button>
  )
}

export default Button

// function mapDispatchToProps(dispatch) {
//   return {
//     handleIncrement: () => dispatch({ type: 'increment' })
//   }
// }

// export default connect(null, mapDispatchToProps)(Button)
