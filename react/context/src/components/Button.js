import { useContext } from 'react'
import { CounterContext } from "../store/counterContext";

function Button() {
  const { handleIncrement } = useContext(CounterContext)
  // const auth = useContext(AuthContext)
  // const theme = useContext(ThemeContext)

  return (
    // <CounterContext.Consumer>
    //   {(value) => {
    //     return (
    //       <button
    //         type="button"
    //         onClick={value.handleIncrement}
    //       >
    //         Increment
    //       </button>
    //     )
    //   }}
    // </CounterContext.Consumer>
    <button
      type="button"
      onClick={handleIncrement}
    >
      Increment
    </button>
  )
}

export default Button
