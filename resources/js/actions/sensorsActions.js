import axios from 'axios'
import {
    TRAER_TODOS,
    TRAER_TODOS_POR_AMBIENTE,
    TRAER_UNO,
    LOADING,
    ERROR,
    ERROR_FORM,
    CAMBIO_ESTADO_FORM,

    CAMBIO_SENSOR_ID,
    CAMBIO_SENSOR_AMBIENTE_ID,
    CAMBIO_SENSOR_NAME,
    CAMBIO_SENSOR_OUTPUT,
    
    CANCELAR,
    RECARGA,
    GUARDAR
} from '../types/sensorTypes'

const URL = 'http://192.168.0.238:901/api/'

export const traerTodos = () => async (dispatch) => {

    dispatch({
        type: RECARGA
    })

    try {
        const response = await axios.get(URL + 'sensor')

        dispatch({
            type: TRAER_TODOS,
            payload: response.data
        })

    } catch (error) {
        console.log(error)
    }
}

export const traerTodosPorAmbiente = (id) => async (dispatch) => {
    
    dispatch({
        type: LOADING
    })

    try {
        const response = await axios.get(URL + 'ambiente/sensors/' + id)
        console.log(response.data)

        dispatch({
            type: TRAER_TODOS_POR_AMBIENTE,
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
        const response = await axios.get(URL + 'sensor/' + id)

        dispatch({
            type: TRAER_UNO,
            payload: response.data
        })


    } catch (error) {
        console.log(error)
    }
}

export const cambioSensorName = (valor) => (dispatch) => {

    dispatch({
        type: CAMBIO_SENSOR_NAME,
        payload: valor
    })
};

export const agregar = (nuevo_sensor) => async (dispatch) => {
    dispatch({
        type: LOADING
    });
    try {
        await axios.post(URL + 'sensor', nuevo_sensor);
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

export const editar = (nuevo_sensor, id) => async (dispatch) => {
    dispatch({
        type: LOADING
    })

    try {
        await axios.put(URL + 'sensor/' + id, nuevo_sensor)
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
        const response = await axios.get(URL + 'sensor/' + id)

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
        await axios.delete(URL + 'sensor/' + id)

        dispatch({
            type: GUARDAR
        })

    } catch (error) {
        const errors = error.response.data.message
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

