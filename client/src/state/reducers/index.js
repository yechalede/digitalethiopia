import {combineReducers} from 'redux'
import departmentReducer from './departmentReducer'

export const reducers=combineReducers({
    departments:departmentReducer
})

