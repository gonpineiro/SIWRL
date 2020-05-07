import {
  TRAER_TODOS,
  TRAER_UNO,
  LOADING,
  ERROR,
  ERROR_FORM,
  CAMBIO_MARCA_ID,
  CAMBIO_MARCA_NAME,
  CAMBIO_ESTADO_FORM,
  GUARDAR
} from '../types/marcaTypes'

const INITIAL_STATE = {
  marcas: [],
  marca: [],
  form: {
    id: '',
    name: ''
  },
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
        marcas: action.payload,
        loading: false,
        recargar_table: false,
        error: ''
      }
    case TRAER_UNO:
      return {
        ...state,
        marca: action.payload,
        loading: false,
        error: ''
      }
    case LOADING:
      return { ...state, loading: true }
    case ERROR:
      return { ...state, error: action.payload, loading: false }
    case ERROR_FORM:
      return { ...state, error_form: action.payload, loading: false }

    case CAMBIO_MARCA_ID:
      return {
        ...state,
        form: {
          ...state.form,
          id: action.payload 
        }
      };

    case CAMBIO_MARCA_NAME:
      return {
        ...state,
        form: {
          ...state.form,
          name: action.payload 
        }
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
        form: {
          id: '',
          name: ''
        },
        loading: false,
        error: '',
        error_form: '',
        recargar_table: true,
        state_form: 'crear'
      };

    default: return state
  }
}