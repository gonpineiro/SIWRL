import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import marcasReducer from './marcasReducer'

export default combineReducers({
    usersReducer,
    marcasReducer
})