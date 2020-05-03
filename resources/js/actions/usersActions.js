import axios from 'axios'
import { TRAER_TODOS, TRAER_UNO, LOADING} from '../types/userTypes'

const URL = 'https://pokeapi.co/api/v2/pokemon/'

export const traerTodos = () => async (dispatch) => {
    dispatch({
        type: LOADING
    })

    try {
        const response = await axios.get(URL + '?limit=151')
        //console.log(response.data.results)
        dispatch({
            type: TRAER_TODOS,
            payload: response.data.results
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