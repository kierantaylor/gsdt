import { Dispatch } from 'redux'
import { getBodyAreas } from '../helpers/bodyAreaHelpers'

export const BODYAREAS_SUCCESS = 'BODYAREAS_SUCCESS'

export const actions = {
	get: processBodyAreas,
}

function success(data: any): any {
	return {
		type: BODYAREAS_SUCCESS,
		data,
	}
}

function processBodyAreas(dispatch: Dispatch, getState: any) {
	var state = getState()
	let values = getBodyAreas(state.exercise.exercises)
	dispatch(success(values))
}
