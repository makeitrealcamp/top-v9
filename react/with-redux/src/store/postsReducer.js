import axios from 'axios'

export const POSTS_LOADING = 'POSTS_LOADING'
export const POSTS_SUCCESS = 'POSTS_SUCCESS'
export const POSTS_ERROR = 'POSTS_ERROR'
export const POSTS_FINISHED = 'POSTS_FINISHED'

export function getPosts() {
  return async function(dispatch) {
    try {
      dispatch({ type: POSTS_LOADING })

      const { data } = await axios({
        method: 'GET',
        baseURL: 'https://jsonplaceholder.typicode.com',
        url: '/posts'
      })

      dispatch({ type: POSTS_SUCCESS, payload: data })
    } catch(error) {
      dispatch({ type: POSTS_ERROR, payload: error })
    } finally {
      dispatch({ type: POSTS_FINISHED })
    }
  }
}

const initialState = {
  posts: [],
  loading: false,
  error: false,
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case POSTS_LOADING: {
      return {
        ...state,
        loading: true,
      }
    }
    case POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.payload,
      }
    }
    case POSTS_ERROR: {
      return {
        ...state,
        error: true,
      }
    }
    case POSTS_FINISHED: {
      return {
        ...state,
        loading: false,
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
