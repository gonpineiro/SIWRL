import {
  TRAER_TODOS,
  TRAER_UNO,
  LOADING,
  STEPPER_DETALLE_LOADING,
  CHART_LOADING,
  ERROR,
  ERROR_FORM,
  CAMBIO_ESTADO_FORM,
  CAMBIAR_ESTADO_DETALLE,
  CAMBIAR_STATE_CHART,
  CAMBIAR_FORMAT_CHART,
  TRAER_TODOS_MONITORS,

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

  RECARGA,
  CANCELAR,
  GUARDAR
} from '../types/prototypeTypes'

const INITIAL_STATE = {
  prototypes: [],
  prototype: [],
  monitors: [],
  cantidad_stepper: '',
  loading: false,
  loading_stepper: false,
  loading_chart: false,
  error: '',
  error_form: '',
  recargar_table: false,
  state_form: 'tabla', //MODO GUARDAR 
  state_chart: 'temp',
  format_chart: 'h'
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
        loading_stepper: false,
        error: ''
      }
    case LOADING:
      return { ...state, loading: true }
    case STEPPER_DETALLE_LOADING:
      return { ...state, loading_stepper: action.payload }
    case CHART_LOADING:
      return { ...state, loading_chart: action.payload }
    case ERROR:
      return { ...state, error: action.payload, loading: false }
    case ERROR_FORM:
      return { ...state, error_form: action.payload, loading: false }

    case CAMBIO_PROTOTYPE_ID:
      return {
        ...state,
        prototype: {
          ...state.prototype,
          id: action.payload
        }
      };

    case CAMBIO_PROTOTYPE_NAME:
      return {
        ...state,
        prototype: {
          ...state.prototype,
          name: action.payload
        }
      };

    case CAMBIO_PROTOTYPE_GENETICA_ID:
      return {
        ...state,
        prototype: {
          ...state.prototype,
          genetica_id: action.payload
        }
      };

    case CAMBIO_PROTOTYPE_AMBIENTE_ID:
      return {
        ...state,
        prototype: {
          ...state.prototype,
          ambiente_id: action.payload
        }
      };

    case CAMBIO_PROTOTYPE_SENSOR_ID:
      return {
        ...state,
        prototype: {
          ...state.prototype,
          sensor_id: action.payload
        }
      };

    case CAMBIO_PROTOTYPE_FECHA_ESTADO_A:
      return {
        ...state,
        prototype: {
          ...state.prototype,
          fecha_etapa_a: action.payload
        }
      };

    case CAMBIO_PROTOTYPE_FECHA_ESTADO_B:
      return {
        ...state,
        prototype: {
          ...state.prototype,
          fecha_etapa_b: action.payload
        }
      };

    case CAMBIO_PROTOTYPE_FECHA_ESTADO_C:
      return {
        ...state,
        prototype: {
          ...state.prototype,
          fecha_etapa_c: action.payload
        }
      };

    case CAMBIO_PROTOTYPE_FECHA_ESTADO_D:
      return {
        ...state,
        prototype: {
          ...state.prototype,
          fecha_etapa_d: action.payload
        }
      };

    case CAMBIO_PROTOTYPE_FECHA_ESTADO_E:
      return {
        ...state,
        prototype: {
          ...state.prototype,
          fecha_etapa_e: action.payload
        }
      };

    case CAMBIO_PROTOTYPE_CANTIDAD:
      return {
        ...state,
        cantidad_stepper: '',
        cantidad_stepper: action.payload
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
        cantidad_stepper: '',
        error: '',
        error_form: '',
        prototype: {
          ...state.form,
          id: '',
          name: '',
          estado: '',
          genetica_id: '',
          ambiente_id: '',
          sensor_id: '',
          fecha_etapa_a: '',
          fecha_etapa_b: '',
          fecha_etapa_c: '',
          fecha_etapa_d: '',
          fecha_etapa_e: '',
          fecha_etapa_f: '',
          cantidad: '',
          sensor: ''
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
        cantidad_stepper: '',
        prototype: {
          ...state.form,
          id: '',
          name: '',
          estado: '',
          genetica_id: '',
          ambiente_id: '',
          sensor_id: '',
          fecha_etapa_a: '',
          fecha_etapa_b: '',
          fecha_etapa_c: '',
          fecha_etapa_d: '',
          fecha_etapa_e: '',
          fecha_etapa_f: '',
          cantidad: '',
          sensor: ''
        },
        state_form: 'crear'
      };

    case RECARGA:
      return {
        ...state,
        loading: true,
        recargar_table: false,
      };

    case CAMBIAR_ESTADO_DETALLE:
      return {
        ...state,
        loading: true,
        state_form: 'detalle',
      };

    case TRAER_TODOS_MONITORS:
      return {
        ...state,
        loading_chart: false,
        monitors: action.payload,
      };

    case CAMBIAR_STATE_CHART:
      return {
        ...state,
        state_chart: action.payload
      };

    case CAMBIAR_FORMAT_CHART:
      return {
        ...state,
        format_chart: action.payload
      };

    default: return state
  }
}