import { createStore, combineReducers } from 'redux'
import counterReducer from './counterReducer'
import textReducer from './textReducer'

const rootReducer = combineReducers({
  counterReducer,
  textReducer,
})

// state = {
//   counterReducer: {
//     count: 0
//   },
//   textReducer: {
//     text: '',
//     count: 0
//   }
// }

const store = createStore(rootReducer)

export default store
