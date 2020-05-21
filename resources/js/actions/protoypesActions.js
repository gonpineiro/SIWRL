import axios from 'axios'
import {
    TRAER_TODOS,
    TRAER_UNO,
    LOADING,
    STEPPER_DETALLE_LOADING,
    CHART_LOADING,
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

    CANCELAR,
    RECARGA,
    GUARDAR
} from '../types/prototypeTypes'

const URL = 'http://192.168.0.146:901/api/'

export const traerTodos = () => async (dispatch) => {

    dispatch({
        type: RECARGA
    })

    try {
        const response = await axios.get(URL + 'prototype')
        dispatch({
            type: TRAER_TODOS,
            payload: response.data
        })

    } catch (error) {
        console.log(error)
    }
}

export const traerUno = (id) => async (dispatch) => {

    dispatch({
        type: LOADING
    })

    dispatch({
        type: CAMBIO_ESTADO_FORM,
        payload: 'editar'
    })


    try {
        const response = await axios.get(URL + 'prototype/' + id)
        const { 0: prototype } = response.data

        dispatch({
            type: TRAER_UNO,
            payload: prototype
        })

    } catch (error) {
        console.log(error)
    }
}

export const cambioPrototypeName = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_PROTOTYPE_NAME,
        payload: valor
    })
};

export const cambioPrototypeGenetica = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_PROTOTYPE_GENETICA_ID,
        payload: valor
    })
};

export const cambioPrototypeAmbiente = (valor) => (dispatch) => {

    dispatch({
        type: CAMBIO_PROTOTYPE_AMBIENTE_ID,
        payload: valor
    })
};

export const cambioPrototypeSensor = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_PROTOTYPE_SENSOR_ID,
        payload: valor
    })
};

export const cambioPrototypeFechaA = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_PROTOTYPE_FECHA_ESTADO_A,
        payload: valor
    })
};

export const cambioPrototypeFechaB = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_PROTOTYPE_FECHA_ESTADO_B,
        payload: valor
    })
};

export const cambioPrototypeFechaC = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_PROTOTYPE_FECHA_ESTADO_C,
        payload: valor
    })
};

export const cambioPrototypeFechaD = (valor) => (dispatch) => {

    dispatch({
        type: CAMBIO_PROTOTYPE_FECHA_ESTADO_D,
        payload: valor
    })
};

export const cambioPrototypeFechaE = (valor) => (dispatch) => {

    dispatch({
        type: CAMBIO_PROTOTYPE_FECHA_ESTADO_E,
        payload: valor
    })
};

export const cambioPrototypeCantidad = (valor) => (dispatch) => {

    dispatch({
        type: CAMBIO_PROTOTYPE_CANTIDAD,
        payload: valor
    })
};

export const agregar = (nuevo_prototype) => async (dispatch) => {

    dispatch({
        type: LOADING
    });

    try {
        await axios.post(URL + 'prototype', nuevo_prototype);
        dispatch({
            type: GUARDAR
        });

    }
    catch (error) {
        const errors = error.response.data.errors
        console.log(error.response)
        dispatch({
            type: ERROR_FORM,
            payload: errors
        });
    }
};

export const editar = (nuevo_prototype, id) => async (dispatch) => {

    dispatch({
        type: LOADING
    })

    try {

        await axios.put(URL + 'prototype/' + id, nuevo_prototype)
        dispatch({
            type: GUARDAR
        })

    } catch (error) {
        const errors = error.response.data.errors
        console.log(error.response)
        dispatch({
            type: ERROR_FORM,
            payload: errors
        });
    }
}

export const traerUnoBorrar = (id) => async (dispatch) => {
    dispatch({
        type: LOADING
    })

    dispatch({
        type: CAMBIO_ESTADO_FORM,
        payload: 'borrar'
    })


    try {
        const response = await axios.get(URL + 'prototype/' + id)
        const { 0: prototype } = response.data

        dispatch({
            type: TRAER_UNO,
            payload: prototype
        })

    } catch (error) {
        console.log(error)
    }
}

export const borrar = (id) => async (dispatch) => {

    dispatch({
        type: LOADING
    })

    try {
        await axios.delete(URL + 'prototype/' + id)

        dispatch({
            type: GUARDAR
        })

    } catch (error) {
        const errors = error.response.data.errors
        dispatch({
            type: ERROR_FORM,
            payload: errors
        });
    }
}

export const cancelar = () => (dispatch) => {
    dispatch({
        type: CANCELAR
    })
}

export const traerTabla = () => (dispatch) => {

    dispatch({
        type: CAMBIO_ESTADO_FORM,
        payload: 'tabla'
    })
}

export const traerFormulario = () => (dispatch) => {

    dispatch({
        type: CAMBIO_ESTADO_FORM,
        payload: 'crear'
    })
}

export const traerDetalle = (id) => async (dispatch) => {

    dispatch({
        type: CAMBIAR_ESTADO_DETALLE
    })

    try {
        const response = await axios.get(URL + 'prototype/' + id)
        const { 0: prototype } = response.data

        dispatch({
            type: TRAER_UNO,
            payload: prototype
        })

    } catch (error) {
        console.log(error)
    }
}

export const traerDetalleInterval = (id) => async (dispatch) => {

    try {
        const response = await axios.get(URL + 'prototype/' + id)
        const { 0: prototype } = response.data

        dispatch({
            type: TRAER_UNO,
            payload: prototype
        })

    } catch (error) {
        console.log(error)
    }
}

export const traerTodosInterval = () => async (dispatch) => {

    try {
        const response = await axios.get(URL + 'prototype')
        dispatch({
            type: TRAER_TODOS,
            payload: response.data
        })

    } catch (error) {
        console.log(error)
    }
}

export const sumarEstadoStepper = (nuevo_prototype, id) => async (dispatch) => {

    dispatch({
        type: STEPPER_DETALLE_LOADING,
        payload: true
    })

    try {

        await axios.put(URL + 'prototype/' + id, nuevo_prototype)
        //EL LOADING LO TERMINA EL CASO 'TRAER_UNO'

    } catch (error) {
        const errors = error.response.data.errors
        console.log(error.response)
        dispatch({
            type: ERROR_FORM,
            payload: errors
        });
    }
}

export const traerTodosMonitors = (id, output, loading) => async (dispatch, getState) => {
    const estado = getState()
    const { prototypesReducer: { format_chart } } = estado

    if (loading) {
        dispatch({
            type: CHART_LOADING,
            payload: true
        })
    }

    try {
        const getStringUrl = (format_chart) => {
            if (format_chart === 'h') return 'monitor/prototype/hora/'
            if (format_chart === 'd') return 'monitor/prototype/dia/'
            if (format_chart === 'm') return 'monitor/prototype/mes/'
        }

        const response = await axios.get(URL + getStringUrl(format_chart) + id)
        const monitors = response.data

        var monitorFinal = {}

        Object.keys(monitors).map((tiempo) => {
            var temp = 0, hume = 0, tierra = 0
            monitors[tiempo].map((monitor) => {
                temp = (temp + monitor.temp)
                hume = (hume + monitor.hume)
                tierra = (tierra + monitor['s' + output])
            })

            monitorFinal[tiempo] = {
                temp: Math.floor(temp / monitors[tiempo].length),
                hume: Math.floor(hume / monitors[tiempo].length),
                tierra: Math.floor(tierra / monitors[tiempo].length),
                time: tiempo
            }
        })

        dispatch({
            type: TRAER_TODOS_MONITORS,
            payload: monitorFinal
        })

    } catch (error) {
        console.log(error)
    }
}

export const cambiarChart = (state_chart) => async (dispatch) => {

    dispatch({
        type: CAMBIAR_STATE_CHART,
        payload: state_chart
    })
}

export const cambiarChartFormat = (format_chart) => async (dispatch) => {

    dispatch({
        type: CAMBIAR_FORMAT_CHART,
        payload: format_chart
    })
}