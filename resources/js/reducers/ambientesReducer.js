import {
  TRAER_TODOS,
  TRAER_UNO,
  LOADING,
  ERROR,
  ERROR_FORM,
  CAMBIO_ESTADO_FORM,

  CAMBIO_AMBIENTE_ID,
  CAMBIO_AMBIENTE_CODIGO,
  CAMBIO_AMBIENTE_NAME,
  CAMBIO_AMBIENTE_INPUTS,

  RECARGA,
  CANCELAR,
  GUARDAR
} from '../types/ambienteTypes'

const INITIAL_STATE = {
  ambientes: [],
  ambiente: [],
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
        ambientes: action.payload,
        loading: false,
        recargar_table: false,
        error: ''
      }
    case TRAER_UNO:
      return {
        ...state,
        ambiente: action.payload,
        loading: false,
        error: ''
      }
    case LOADING:
      return { ...state, loading: true }
    case ERROR:
      return { ...state, error: action.payload, loading: false }
    case ERROR_FORM:
      return { ...state, error_form: action.payload, loading: false }

    case CAMBIO_AMBIENTE_ID:
      return {
        ...state,
        ambiente: {
          ...state.ambiente,
          id: action.payload
        }
      };

    case CAMBIO_AMBIENTE_CODIGO:
      return {
        ...state,
        ambiente: {
          ...state.ambiente,
          codigo: action.payload
        }
      };

    case CAMBIO_AMBIENTE_NAME:
      return {
        ...state,
        ambiente: {
          ...state.ambiente,
          name: action.payload
        }
      };

    case CAMBIO_AMBIENTE_INPUTS:
      return {
        ...state,
        ambiente: {
          ...state.ambiente,
          inputs: action.payload
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
        ambiente: {
          id: '',
          name: '',
          codigo: '',
          inputs: '',
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
          ambiente: {
            id: '',
            name: '',
            codigo: '',
            inputs: '',
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