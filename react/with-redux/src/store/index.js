import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import counterReducer from './counterReducer'
import textReducer from './textReducer'
import postsReducer from './postsReducer'

// Currying
function logger(store) {
  return function (next) {
    return function (action) {
      const prevState = store.getState()
      const result = next(action)
      const nextState = store.getState()

      console.log({
        'Prev state': prevState,
        action,
        'Next state': nextState,
      })

      return result
    }
  }
}

const rootReducer = combineReducers({
  counterReducer,
  textReducer,
  postsReducer,
})

const middlewares = applyMiddleware(thunk, logger)

// state = {
//   counterReducer: {
//     count: 0
//   },
//   textReducer: {
//     text: '',
//     count: 0
//   }
// }

const store = createStore(rootReducer, middlewares)

export default store
