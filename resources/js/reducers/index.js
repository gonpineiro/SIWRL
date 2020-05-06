import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import marcasReducer from './marcasReducer'
import geneticasReducer from './geneticasReducer'

export default combineReducers({
    usersReducer,
    marcasReducer,
    geneticasReducer
})