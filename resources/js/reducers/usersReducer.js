import {
  TRAER_TODOS,
  TRAER_UNO,
  LOADING,
  ERROR,
  ERROR_FORM,
  CAMBIO_ESTADO_FORM,

  CAMBIO_USUARIO_ID,
  CAMBIO_USUARIO_NAME,
  CAMBIO_USUARIO_EMAIL,
  CAMBIO_USUARIO_PASSWORD,

  RECARGA,
  CANCELAR,
  GUARDAR
} from '../types/userTypes'

const INITIAL_STATE = {
  users: [],
  user: [],
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
        user: {
          ...state.user,
          id: action.payload
        }
      };

    case CAMBIO_USUARIO_NAME:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload
        }
      };

    case CAMBIO_USUARIO_EMAIL:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload
        }
      };

    case CAMBIO_USUARIO_PASSWORD:
      return {
        ...state,
        user: {
          ...state.user,
          password: action.payload
        }
      };

    case CAMBIO_ESTADO_FORM:
      return {
        ...state,
        state_form: action.payload
      };

    case GUARDAR:
      return {
        ...state,
        user: {
          id: '',
          name: '',
          email: '',
          password: ''
        },
        loading: false,
        error: '',
        error_form: '',
        recargar_table: true,
        state_form: 'crear'
      };

      case CANCELAR:
        return {
          ...state,
          loading: false,
          error: '',
          error_form: '',
          user: {
            id: '',
            name: '',
            email: '',
            password: ''
          },
          state_form: 'crear'
        };
  
      case RECARGA:
        return {
          ...state,
          loading: true,
          recargar_table: false,
        };

    default: return state
  }
}