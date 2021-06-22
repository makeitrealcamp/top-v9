// action
export const CHANGE_TEXT = 'CHANGE_TEXT'
// export const GET_LENGTH = 'INCREMENT_COUNT'

// action creator
export function changeText(data) {
  return {
    type: CHANGE_TEXT,
    payload: data,
  }
}

const initialState = {
  text: '',
  count: 0,
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_TEXT: {
      return {
        ...state,
        text: action.payload,
        count: action.payload.length,
      }
    }
    // case GET_LENGTH: {
    //   return {
    //     ...state,
    //     count: state.count + 1
    //   }
    // }
    default: {
      return state
    }
  }
}

export default reducer
