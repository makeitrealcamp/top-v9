const { createStore } = require('redux')

const initialState = {
  count: 0,
  name: '',
}

function reducer(state, action) {
  console.log('receiving action of type ', action.type)
  console.log('changing state...')
  switch(action.type) {
    case 'increment': {
      // return Object.assign(state, { count: state.count + 1 })
      return {
        ...state,
        count: state.count + 1,
      }
    }
    case 'decrement': {
      return {
        ...state,
        count: state.count - 1,
      }
    }
    case 'change_name': {
      return {
        ...state,
        name: action.payload,
      }
    }
    case 'reset': {
      return {
        ...initialState
      }
    }
    default: {
      // throw new Error('invalid action type')
      return state
    }
  }
}

const store = createStore(reducer, initialState)

store.subscribe(() => {
  console.log('state has changed')
  console.log('New State: ', store.getState())
})

store.subscribe(() => {
  console.log('I am the second subscriber')
})

function handleClickIncrement(e) {
  store.dispatch({ type: 'increment' })
}

function handleClickDecrement(e) {
  store.dispatch({ type: 'decrement' })
}

function handleChange(e) {
  store.dispatch({ type: 'change_name', payload: e.target.value })
}

// user clicks increment button
handleClickIncrement()

// user clicks decrement button
handleClickDecrement()

// user changes name input
handleChange({ target: { value: 'maria' } })

// user clicks reset button
store.dispatch({ type: 'reset' })

// user do something not supported
store.dispatch({ type: 'invalid' })
