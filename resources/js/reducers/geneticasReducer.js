import {
  TRAER_TODOS,
  TRAER_UNO,
  LOADING,
  ERROR,
  ERROR_FORM,
  CAMBIO_GENETICA_ID,
  CAMBIO_GENETICA_MARCA_ID,
  CAMBIO_GENETICA_NAME,
  CAMBIO_ESTADO_FORM,
  CAMBIO_GENETICA_THC,
  GUARDAR
} from '../types/geneticaTypes'

const INITIAL_STATE = {
  geneticas: [],
  genetica: [],
  id: '',
  name: '',
  thc: 21,
  id_marca: '',
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
        geneticas: action.payload,
        loading: false,
        recargar_table: false,
        error: ''
      }
    case TRAER_UNO:
      return {
        ...state,
        genetica: action.payload,
        loading: false,
        error: ''
      }
    case LOADING:
      return { ...state, loading: true }
    case ERROR:
      return { ...state, error: action.payload, loading: false }
    case ERROR_FORM:
      return { ...state, error_form: action.payload, loading: false }

    case CAMBIO_GENETICA_ID:
      return {
        ...state,
        id: action.payload
      };

    case CAMBIO_GENETICA_NAME:
      return {
        ...state,
        name: action.payload
      };

    case CAMBIO_GENETICA_MARCA_ID:
      return {
        ...state,
        id_marca: action.payload
      };

    case CAMBIO_GENETICA_THC:
      return {
        ...state,
        thc: action.payload
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
        id_marca: '',
        recargar_table: true,
        state_form: 'crear'
      };

    default: return state
  }
}