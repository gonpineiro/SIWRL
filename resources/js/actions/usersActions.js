import axios from 'axios'
import { 
    TRAER_TODOS, 
    TRAER_UNO, 
    LOADING,
    ERROR,
    CAMBIO_USUARIO_NAME,
    CAMBIO_USUARIO_EMAIL,
    CAMBIO_USUARIO_PASSWORD,
    GUARDAR
} from '../types/userTypes'

const URL = 'http://192.168.0.238:901/api/'

export const traerTodos = () => async (dispatch) => {
    dispatch({
        type: LOADING
    })

    try {
        const response = await axios.get(URL + 'user')
        console.log(response.data)
        dispatch({
            type: TRAER_TODOS,
            payload: response.data
        })

    } catch (error) {
        console.log(error)
    }
}

export const traerUno = (key) => async (dispatch, getState) => {
    
    dispatch({
        type: LOADING
    })

    
    try {
        const response = await axios.get(URL + key)
        //console.log(response.data)
        dispatch({
            type: TRAER_UNO,
            payload: response.data
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
	}
	catch (error) {
		console.log(error.message);
		dispatch({
			type: ERROR,
			payload: 'Servicio no disponible en este momento.'
		});
	}
};