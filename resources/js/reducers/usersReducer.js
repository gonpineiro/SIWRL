import { TRAER_TODOS,TRAER_UNO, LOADING, ERROR } from '../types/userTypes'

const INITIAL_STATE = {
  users: [],
  user: [],
  loading: false,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODOS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: ''
      }
    case TRAER_UNO:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: ''
      }
    case LOADING:
      return { ...state, loading: true }
    case ERROR:
      return { ...state, error: action.payload, loading: false }

    default: return state
  }
}