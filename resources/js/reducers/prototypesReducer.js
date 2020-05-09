import {
  TRAER_TODOS,
  TRAER_UNO,
  LOADING,
  ERROR,
  ERROR_FORM,
  CAMBIO_ESTADO_FORM,

  CAMBIO_PROTOTYPE_ID,
  CAMBIO_PROTOTYPE_NAME,
  CAMBIO_PROTOTYPE_GENETICA_ID,
  CAMBIO_PROTOTYPE_AMBIENTE_ID,
  CAMBIO_PROTOTYPE_SENSOR_ID,
  CAMBIO_PROTOTYPE_FECHA_ESTADO_A,
  CAMBIO_PROTOTYPE_FECHA_ESTADO_B,
  CAMBIO_PROTOTYPE_FECHA_ESTADO_C,
  CAMBIO_PROTOTYPE_FECHA_ESTADO_D,
  CAMBIO_PROTOTYPE_FECHA_ESTADO_E,
  CAMBIO_PROTOTYPE_CANTIDAD,

  GUARDAR
} from '../types/prototypeTypes'

const INITIAL_STATE = {
  prototypes: [],
  prototype: [],
  form: {
    id: '',
    name: '',
    genetica_id: '',
    ambiente_id: '',
    sensor_id: '',
    fecha_estapa_a: '',
    fecha_estapa_b: '',
    fecha_estapa_c: '',
    fecha_estapa_d: '',
    fecha_estapa_e: '',
    cantidad: ''
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
        prototypes: action.payload,
        loading: false,
        recargar_table: false,
        error: ''
      }
    case TRAER_UNO:
      return {
        ...state,
        prototype: action.payload,
        loading: false,
        error: ''
      }
    case LOADING:
      return { ...state, loading: true }
    case ERROR:
      return { ...state, error: action.payload, loading: false }
    case ERROR_FORM:
      return { ...state, error_form: action.payload, loading: false }

    case CAMBIO_PROTOTYPE_ID:
      return {
        ...state,
        form: {
          ...state.form,
          id: action.payload
        }
      };

    case CAMBIO_PROTOTYPE_NAME:
      return {
        ...state,
        form: {
          ...state.form,
          name: action.payload
        }
      };

    case CAMBIO_PROTOTYPE_GENETICA_ID:
      return {
        ...state,
        form: {
          ...state.form,
          genetica_id: action.payload
        }
      };

    case CAMBIO_PROTOTYPE_AMBIENTE_ID:
      return {
        ...state,
        form: {
          ...state.form,
          ambiente_id: action.payload
        }
      };

    case CAMBIO_PROTOTYPE_SENSOR_ID:
      return {
        ...state,
        form: {
          ...state.form,
          sensor_id: action.payload
        }
      };

    case CAMBIO_PROTOTYPE_FECHA_ESTADO_A:
      return {
        ...state,
        form: {
          ...state.form,
          fecha_estapa_a: action.payload
        }
      };

    case CAMBIO_PROTOTYPE_FECHA_ESTADO_B:
      return {
        ...state,
        form: {
          ...state.form,
          fecha_estapa_b: action.payload
        }
      };

    case CAMBIO_PROTOTYPE_FECHA_ESTADO_C:
      return {
        ...state,
        form: {
          ...state.form,
          fecha_estapa_c: action.payload
        }
      };

    case CAMBIO_PROTOTYPE_FECHA_ESTADO_D:
      return {
        ...state,
        form: {
          ...state.form,
          fecha_estapa_d: action.payload
        }
      };

    case CAMBIO_PROTOTYPE_FECHA_ESTADO_E:
      return {
        ...state,
        form: {
          ...state.form,
          fecha_estapa_e: action.payload
        }
      };

    case CAMBIO_PROTOTYPE_CANTIDAD:
      return {
        ...state,
        form: {
          ...state.form,
          cantidad: action.payload
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
        form: {
          ...state.form,
          id: '',
          name: '',
          genetica_id: '',
          ambiente_id: '',
          sensor_id: '',
          fecha_estapa_a: '',
          fecha_estapa_b: '',
          fecha_estapa_c: '',
          fecha_estapa_d: '',
          fecha_estapa_e: '',
          cantidad: ''
        },
        recargar_table: true,
        state_form: 'crear'
      };

    default: return state
  }
}