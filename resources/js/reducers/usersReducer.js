import {
  TRAER_TODOS,
  TRAER_UNO,
  LOADING,
  ERROR,
  ERROR_FORM,
  CAMBIO_USUARIO_ID,
  CAMBIO_USUARIO_NAME,
  CAMBIO_USUARIO_EMAIL,
  CAMBIO_USUARIO_PASSWORD,
  CAMBIO_ESTADO_FORM,
  GUARDAR
} from '../types/userTypes'

const INITIAL_STATE = {
  users: [],
  user: [],
  id: '',
  name: '',
  email: '',
  password: '',
  loading: false,
  error: '',
  error_form: '',
  recargar_table: false,
  state_form: 'crear' //MODO GUARDAR 
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODOS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        recargar_table: false,
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
    case ERROR_FORM:
      return { ...state, error_form: action.payload, loading: false }

    case CAMBIO_USUARIO_ID:
      return {
        ...state,
        id: action.payload
      };

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

    case CAMBIO_ESTADO_FORM:
      return {
        ...state,
        error_form: '',
        state_form: action.payload
      };

    case GUARDAR:
      return {
        ...state,
        loading: false,
        error: '',
        error_form: '',
        id: '',
        name: '',
        recargar_table: true,
        email: '',
        password: '',
        state_form: 'crear'
      };

    default: return state
  }
}