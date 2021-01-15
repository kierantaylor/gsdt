import { UPDATE_WORKOUTS } from '../actions/workoutActions'
import { IWorkout } from '../types/Workout'

export interface IWorkoutState {
	workouts: Array<IWorkout>
}

export const initialState: IWorkoutState = {
	workouts: [],
}

const workoutReducer = function (
	state: IWorkoutState = initialState,
	action: any,
) {
	switch (action.type) {
		case UPDATE_WORKOUTS:
			return {
				...state,
				workouts: action.data,
			}
		default:
			return state
	}
}

export default workoutReducer
