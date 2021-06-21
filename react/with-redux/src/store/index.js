import { createStore } from 'redux'

export const INCREMENT = 'INCREMENT_COUNT'

// action creators
export function increment() {
  return {
    type: INCREMENT
  }
}

const initialState = {
  count: 0,
}

function reducer(state, action) {
  switch(action.type) {
    case INCREMENT: {
      return {
        ...state,
        count: state.count + 1
      }
    }
    default: {
      return state
    }
  }

  // if(action.type === INCREMENT) {
  //   return {
  //     ...state,
  //     count: state.count + 1
  //   }
  // }

  // if(action.type === DECREMENT)
}

const store = createStore(reducer, initialState)

export default store
