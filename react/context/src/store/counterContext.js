import { createContext, useState } from 'react'

export const CounterContext = createContext()

// CounterContext.Provider
// CounterContext.Consumer

function CounterProvider({ children }) {
  const [count, setCount] = useState(1)

  function handleIncrement() {
    setCount(prevCount => prevCount + 1)
  }

  function handleDecrement() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <CounterContext.Provider
      value={{
        count,
        handleIncrement,
        handleDecrement,
      }}
    >
      {children}
    </CounterContext.Provider>
  )
}

export default CounterProvider
