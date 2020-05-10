import axios from 'axios'
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

const URL = 'http://192.168.0.238:901/api/'

export const traerTodos = () => async (dispatch) => {

    dispatch({
        type: LOADING
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

        dispatch({
            type: TRAER_UNO,
            payload: response.data
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
        type: GUARDAR
    })
}



