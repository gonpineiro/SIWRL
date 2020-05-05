import axios from 'axios'
import {
    TRAER_TODOS,
    TRAER_UNO,
    LOADING,
    ERROR_FORM,
    CAMBIO_USUARIO_ID,
    CAMBIO_USUARIO_NAME,
    CAMBIO_USUARIO_EMAIL,
    CAMBIO_USUARIO_PASSWORD,
    CAMBIO_ESTADO_FORM,
    GUARDAR
} from '../types/userTypes'

const URL = 'http://192.168.0.238:901/api/'

export const traerTodos = () => async (dispatch) => {
    dispatch({
        type: LOADING
    })

    try {
        const response = await axios.get(URL + 'user')
        //console.log(response.data)
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
        type: CAMBIO_USUARIO_NAME,
        payload: ''
    })

    dispatch({
        type: CAMBIO_USUARIO_EMAIL,
        payload: ''
    })

    dispatch({
        type: CAMBIO_USUARIO_PASSWORD,
        payload: ''
    })

    dispatch({
        type: CAMBIO_ESTADO_FORM,
        payload: 'editar'
    })


    try {
        const response = await axios.get(URL + 'user/' + id)
        //console.log(response.data.name)
        dispatch({
            type: TRAER_UNO,
            payload: response.data
        })

        dispatch({
            type: CAMBIO_USUARIO_ID,
            payload: response.data.id
        })

        dispatch({
            type: CAMBIO_USUARIO_NAME,
            payload: response.data.name
        })

        dispatch({
            type: CAMBIO_USUARIO_EMAIL,
            payload: response.data.email
        })

    } catch (error) {
        console.log(error)
    }
}

export const cambioUsuarioName = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_USUARIO_NAME,
        payload: valor
    })
};

export const cambioUsuarioEmail = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_USUARIO_EMAIL,
        payload: valor
    })
};

export const cambioUsuarioPassword = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_USUARIO_PASSWORD,
        payload: valor
    })
};

export const agregar = (nuevo_usuario) => async (dispatch) => {
    dispatch({
        type: LOADING
    });
    try {
        await axios.post(URL + 'user', nuevo_usuario);
        dispatch({
            type: GUARDAR
        });
        console.log('Enviado')
    }
    catch (error) {
        const errors = error.response.data.errors
        //console.log(errors);
        dispatch({
            type: ERROR_FORM,
            payload: errors
        });
    }
};

export const editar = (nuevo_usuario, id) => async (dispatch) => {
    dispatch({
        type: LOADING
    })

    try {
        console.log(nuevo_usuario)
        await axios.put(URL + 'user/' + id, nuevo_usuario)

        dispatch({
            type: GUARDAR
        })

    } catch (error) {
        const errors = error.response.data.errors
        //console.log(errors);
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
        const response = await axios.get(URL + 'user/' + id)

        dispatch({
            type: TRAER_UNO,
            payload: response.data
        })

        dispatch({
            type: CAMBIO_USUARIO_ID,
            payload: response.data.id
        })

        dispatch({
            type: CAMBIO_USUARIO_NAME,
            payload: response.data.name
        })

        dispatch({
            type: CAMBIO_USUARIO_EMAIL,
            payload: response.data.email
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
        await axios.delete(URL + 'user/' + id)

        dispatch({
            type: GUARDAR
        })

    } catch (error) {
        const errors = error.response.data.errors
        //console.log(errors);
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
 
