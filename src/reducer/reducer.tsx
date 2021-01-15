import { combineReducers } from 'redux'
import { default as exercise } from '../reducer/exerciseReducer'
import { default as app } from '../reducer/appReducer'
import { default as workout } from '../reducer/workoutReducer'

export default combineReducers({ app, exercise, workout })
