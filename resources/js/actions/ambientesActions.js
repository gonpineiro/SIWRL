import axios from 'axios'
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

const URL = 'http://192.168.0.238:901/api/'

export const traerTodos = () => async (dispatch) => {
    
    dispatch({
        type: RECARGA
    })  

    try {        
        const response = await axios.get(URL + 'ambiente')
        
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
        const response = await axios.get(URL + 'ambiente/' + id)
        const { 0: ambiente } = response.data

        dispatch({
            type: TRAER_UNO,
            payload: ambiente
        })


    } catch (error) {
        console.log(error)
    }
}

export const cambioAmbienteName = (valor) => (dispatch) => {

    dispatch({
        type: CAMBIO_AMBIENTE_NAME,
        payload: valor
    })
};

export const cambioAmbienteCodigo = (valor) => (dispatch) => {

    dispatch({
        type: CAMBIO_AMBIENTE_CODIGO,
        payload: valor
    })
};

export const cambioAmbienteInputs = (valor) => (dispatch) => {

    dispatch({
        type: CAMBIO_AMBIENTE_INPUTS,
        payload: valor
    })
};

export const agregar = (nuevo_ambiente) => async (dispatch) => {

    dispatch({
        type: LOADING
    });

    try {
        await axios.post(URL + 'ambiente', nuevo_ambiente);
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

export const editar = (nuevo_ambiente, id) => async (dispatch) => {

    dispatch({
        type: LOADING
    })
    
    try {
        await axios.put(URL + 'ambiente/' + id, nuevo_ambiente)
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
        const response = await axios.get(URL + 'ambiente/' + id)
        const { 0: ambiente } = response.data

        dispatch({
            type: TRAER_UNO,
            payload: ambiente
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
        await axios.delete(URL + 'ambiente/' + id)

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

