import {
  TRAER_TODOS,
  TRAER_UNO,
  LOADING,
  ERROR,
  ERROR_FORM,
  CAMBIO_ESTADO_FORM,

  CAMBIO_GENETICA_ID,
  CAMBIO_GENETICA_NAME,
  CAMBIO_GENETICA_MARCA_ID,
  CAMBIO_GENETICA_THC,
  CAMBIO_GENETICA_CBD,
  CAMBIO_GENETICA_PROD_INT,
  CAMBIO_GENETICA_PROD_EXT,
  CAMBIO_GENETICA_TIEMPO_FLORA,
  CAMBIO_GENETICA_SABORES,

  RECARGA,
  CANCELAR,
  GUARDAR
} from '../types/geneticaTypes'

const INITIAL_STATE = {
  geneticas: [],
  genetica: [],
  loading: false,
  error: '',
  error_form: '',
  recargar_table: false,
  state_form: 'tabla' //MODO GUARDAR 
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
        genetica: {
          ...state.genetica,
          id: action.payload
        }
      };

    case CAMBIO_GENETICA_NAME:
      return {
        ...state,
        genetica: {
          ...state.genetica,
          name: action.payload
        }
      };

    case CAMBIO_GENETICA_MARCA_ID:
      return {
        ...state,
        genetica: {
          ...state.genetica,
          marca_id: action.payload
        }
      };

    case CAMBIO_GENETICA_THC:
      return {
        ...state,
        genetica: {
          ...state.genetica,
          thc: action.payload
        }
      };

    case CAMBIO_GENETICA_CBD:
      return {
        ...state,
        genetica: {
          ...state.genetica,
          cbd: action.payload
        }
      };

    case CAMBIO_GENETICA_PROD_INT:
      return {
        ...state,
        genetica: {
          ...state.genetica,
          prod_int: action.payload
        }
      };

    case CAMBIO_GENETICA_PROD_EXT:
      return {
        ...state,
        genetica: {
          ...state.genetica,
          prod_ext: action.payload
        }
      };

    case CAMBIO_GENETICA_TIEMPO_FLORA:
      return {
        ...state,
        genetica: {
          ...state.genetica,
          tiempo_flora: action.payload
        }
      };

    case CAMBIO_GENETICA_SABORES:
      return {
        ...state,
        genetica: {
          ...state.genetica,
          sabores: action.payload
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
        loading: false,
        error: '',
        error_form: '',
        genetica: {
          id: '',
          name: '',
          marca_id: '',
          prod_int: '',
          prod_ext: '',
          tiempo_flora: '',
          sabores: '',
        },
        recargar_table: true,
        state_form: 'crear'
      };

    case CANCELAR:
      return {
        ...state,
        loading: false,
        error: '',
        error_form: '',
        genetica: {
          id: '',
          name: '',
          marca_id: '',
          prod_int: '',
          prod_ext: '',
          tiempo_flora: '',
          sabores: '',
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