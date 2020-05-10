import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import marcasReducer from './marcasReducer'
import geneticasReducer from './geneticasReducer'
import prototypesReducer from './prototypesReducer'
import ambientesReducer from './ambientesReducer'
import sensorsReducer from './sensorsReducer'

export default combineReducers({
    usersReducer,
    marcasReducer,
    geneticasReducer,
    prototypesReducer,
    ambientesReducer,
    sensorsReducer
})