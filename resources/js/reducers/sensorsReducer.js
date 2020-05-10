import {
  TRAER_TODOS,
  TRAER_TODOS_POR_AMBIENTE,
  TRAER_UNO,
  LOADING,
  ERROR_FORM,
  ERROR,

  CAMBIO_SENSOR_ID,
  CAMBIO_SENSOR_AMBIENTE_ID,
  CAMBIO_SENSOR_NAME,
  CAMBIO_SENSOR_OUTPUT,

  CAMBIO_ESTADO_FORM,

  GUARDAR
} from '../types/sensorTypes'

const INITIAL_STATE = {
  sensors: [],
  sensor: [],
  sensors_ambiente: [],
  form: {
    id: '',
    name: '',
    ambiente_id: '',
    output: ''
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
        sensors: action.payload,
        loading: false,
        recargar_table: false,
        error: ''
      }

    case TRAER_TODOS_POR_AMBIENTE:
      return {
        ...state,
        sensors_ambiente: action.payload,
        loading: false,
        recargar_table: false,
        error: ''
      }

    case TRAER_UNO:
      return {
        ...state,
        sensor: action.payload,
        loading: false,
        error: ''
      }
    case LOADING:
      return { ...state, loading: true }
    case ERROR:
      return { ...state, error: action.payload, loading: false }
    case ERROR_FORM:
      return { ...state, error_form: action.payload, loading: false }

    case CAMBIO_SENSOR_ID:
      return {
        ...state,
        form: {
          ...state.form,
          id: action.payload
        }
      };

    case CAMBIO_SENSOR_NAME:
      return {
        ...state,
        form: {
          ...state.form,
          name: action.payload
        }
      };

    case CAMBIO_SENSOR_AMBIENTE_ID:
      return {
        ...state,
        form: {
          ...state.form,
          ambiente_id: action.payload
        }
      };

    case CAMBIO_SENSOR_OUTPUT:
      return {
        ...state,
        form: {
          ...state.form,
          output: action.payload
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
          name: '',
          ambiente_id: '',
          output: ''
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