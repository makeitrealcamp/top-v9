import React from 'react'
import { CounterContext } from '../store/counterContext'

class Counter extends React.Component {
  static contextType = CounterContext

  render() {
    return (
      // <CounterContext.Consumer>
      //   {(value) => {
      //     return (
      //       <p>{value.count}</p>
      //     )
      //   }}
      // </CounterContext.Consumer>
      <p>{this.context.count}</p>
    )
  }
}

export default Counter
