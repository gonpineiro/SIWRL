import {
  TRAER_TODOS,
  TRAER_UNO,
  LOADING,
  ERROR,
  CAMBIO_USUARIO_NAME,
  CAMBIO_USUARIO_EMAIL,
  CAMBIO_USUARIO_PASSWORD,
  GUARDAR
} from '../types/userTypes'

const INITIAL_STATE = {
  users: [],
  user: [],
  name: '',
  email: '',
  password: '',
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

    case CAMBIO_USUARIO_NAME:
      return {
        ...state,
        name: action.payload
      };

    case CAMBIO_USUARIO_EMAIL:
      return {
        ...state,
        email: action.payload
      };

    case CAMBIO_USUARIO_PASSWORD:
      return {
        ...state,
        password: action.payload
      };

    case GUARDAR:
      return {
        ...state,
        loading: false,
        error: '',
        name: '',
        email: '',
        password: ''
      };

    default: return state
  }
}