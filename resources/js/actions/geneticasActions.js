import axios from 'axios'
import {
    TRAER_TODOS,
    TRAER_UNO,
    LOADING,
    ERROR_FORM,
    CAMBIO_GENETICA_ID,
    CAMBIO_GENETICA_MARCA_ID,
    CAMBIO_GENETICA_NAME,
    CAMBIO_ESTADO_FORM,
    GUARDAR
} from '../types/geneticaTypes'

const URL = 'http://192.168.0.238:901/api/'

export const traerTodos = () => async (dispatch) => {
    
    dispatch({
        type: LOADING
    })

    try {
        const response = await axios.get(URL + 'genetica')

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
        type: CAMBIO_GENETICA_ID,
        payload: ''
    })

    dispatch({
        type: CAMBIO_GENETICA_NAME,
        payload: ''
    })

    dispatch({
        type: CAMBIO_GENETICA_MARCA_ID,
        payload: ''
    })

    dispatch({
        type: CAMBIO_ESTADO_FORM,
        payload: 'editar'
    })


    try {
        const response = await axios.get(URL + 'genetica/' + id)
        dispatch({
            type: TRAER_UNO,
            payload: response.data
        })

        dispatch({
            type: CAMBIO_GENETICA_ID,
            payload: response.data.id
        })

        dispatch({
            type: CAMBIO_GENETICA_NAME,
            payload: response.data.name
        })

        dispatch({
            type: CAMBIO_GENETICA_MARCA_ID,
            payload: response.data.marca_id
        })

    } catch (error) {
        console.log(error)
    }
}

export const cambioGeneticaName = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_GENETICA_NAME,
        payload: valor
    })
};

export const cambioGeneticaMarca = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_GENETICA_MARCA_ID,
        payload: valor
    })
};

export const agregar = (nueva_genetica) => async (dispatch) => {
    dispatch({
        type: LOADING
    });
    
    try {
        await axios.post(URL + 'genetica', nueva_genetica);
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

export const editar = (nueva_genetica, id) => async (dispatch) => {
    dispatch({
        type: LOADING
    })

    try {
        await axios.put(URL + 'genetica/' + id, nueva_genetica)
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
        const response = await axios.get(URL + 'genetica/' + id)

        dispatch({
            type: TRAER_UNO,
            payload: response.data
        })

        dispatch({
            type: CAMBIO_GENETICA_ID,
            payload: response.data.id
        })

        dispatch({
            type: CAMBIO_GENETICA_NAME,
            payload: response.data.name
        })

        dispatch({
            type: CAMBIO_GENETICA_MARCA_ID,
            payload: response.data.marca_id
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
        await axios.delete(URL + 'genetica/' + id)

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

export const ponerFormularioMarca = () => (dispatch) => {
    dispatch({
        type: CAMBIO_ESTADO_FORM,
        payload: 'crear-marca'
    })
}

export const retirarFormularioMarca = () => (dispatch) => {
    
    dispatch({
        type: CAMBIO_ESTADO_FORM,
        recargar_table: true,
        payload: 'crear'
    })

   
    
}
 
