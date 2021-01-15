import { AnyAction, Dispatch } from 'redux'
import { getExercises } from '../services/ExerciseService'
import { IExercise } from '../types/Exercise'
import * as bodyAreasActions from '../actions/bodyAreasActions'

export const EXERCISES_REQUESTED = 'EXERCISES_REQUEST'
export const EXERCISES_SUCCESS = 'EXERCISES_SUCCESS'
export const EXERCISES_FAILED = 'EXERCISES_FAILED'

export const actions = {
	get: get,
	success: success,
	failure: failure,
}

function get(): AnyAction {
	return {
		type: EXERCISES_REQUESTED,
	}
}

function success(data: Array<IExercise>): AnyAction {
	return {
		type: EXERCISES_SUCCESS,
		data,
	}
}

function failure(): AnyAction {
	return {
		type: EXERCISES_FAILED,
	}
}

export const fetchExercises = () => {
	return async (dispatch: Dispatch, getState: any) => {
		dispatch(get())

		try {
			const response = await getExercises()
			const { exercises } = response.data

			if (!exercises) {
				return dispatch(failure())
			}

			dispatch(success(exercises))
			return bodyAreasActions.actions.get(dispatch, getState)
		} catch (e: any) {
			return dispatch(failure())
		}
	}
}
