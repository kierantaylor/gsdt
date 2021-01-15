import { IExercise } from '../types/Exercise'
import { Gender } from '../types/ExerciseList'
import {
	EXERCISES_FAILED,
	EXERCISES_REQUESTED,
	EXERCISES_SUCCESS,
} from '../actions/exerciseActions'
import { LoadedState } from '../types/App'

export interface IExerciseState {
	exercises: Array<IExercise>
	bodyAreas: Array<any>
	selectedGender: Gender
	exercises_loading: LoadedState
}

export const initialState: IExerciseState = {
	exercises: [],
	bodyAreas: [],
	selectedGender: Gender.Male,
	exercises_loading: LoadedState.NOT_STARTED,
}

const exerciseReducer = function (
	state: IExerciseState = initialState,
	action: any,
) {
	switch (action.type) {
		case EXERCISES_REQUESTED:
			return {
				...state,
				exercises_loading: LoadedState.LOADING,
			}

		case EXERCISES_SUCCESS:
			return {
				...state,
				exercises_loading: LoadedState.LOADED,
				exercises: action.data,
			}

		case EXERCISES_FAILED:
			return {
				...state,
				exercises_loading: LoadedState.ERROR,
			}

		case 'BODYAREAS_SUCCESS':
			return {
				...state,
				bodyAreas: action.data,
			}
		case 'UPDATE_SELECTED_GENDER':
			return {
				...state,
				selectedGender: action.data,
			}
		default:
			return state
	}
}

export default exerciseReducer
