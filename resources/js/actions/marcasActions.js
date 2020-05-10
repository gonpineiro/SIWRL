import axios from 'axios'
import {
    TRAER_TODOS,
    TRAER_UNO,
    LOADING,
    ERROR,
    ERROR_FORM,
    CAMBIO_ESTADO_FORM,

    CAMBIO_MARCA_ID,
    CAMBIO_MARCA_NAME,

    GUARDAR
} from '../types/marcaTypes'

const URL = 'http://192.168.0.238:901/api/'

export const traerTodos = () => async (dispatch) => {

    dispatch({
        type: LOADING
    })

    try {
        const response = await axios.get(URL + 'marca')

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
        type: CAMBIO_MARCA_NAME,
        payload: ''
    })

    dispatch({
        type: CAMBIO_ESTADO_FORM,
        payload: 'editar'
    })


    try {
        const response = await axios.get(URL + 'marca/' + id)

        dispatch({
            type: TRAER_UNO,
            payload: response.data
        })

        dispatch({
            type: CAMBIO_MARCA_ID,
            payload: response.data.id
        })

        dispatch({
            type: CAMBIO_MARCA_NAME,
            payload: response.data.name
        })
        

    } catch (error) {
        console.log(error)
    }
}

export const cambioMarcaName = (valor) => (dispatch) => {

    dispatch({
        type: CAMBIO_MARCA_NAME,
        payload: valor
    })
};

export const agregar = (nueva_marca) => async (dispatch) => {
    dispatch({
        type: LOADING
    });
    try {
        await axios.post(URL + 'marca', nueva_marca);
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

export const editar = (nueva_marca, id) => async (dispatch) => {
    dispatch({
        type: LOADING
    })

    try {
        await axios.put(URL + 'marca/' + id, nueva_marca)
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
        const response = await axios.get(URL + 'marca/' + id)

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
        await axios.delete(URL + 'marca/' + id)

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
        type: GUARDAR
    })
}
 
