import { IWorkout } from '../types/Workout'

export const UPDATE_WORKOUTS = 'UPDATE_WORKOUTS'

export const actions = {
	updateWorkouts: updateWorkouts,
}

function updateWorkouts(data: Array<IWorkout>): any {
	return {
		type: UPDATE_WORKOUTS,
		data,
	}
}
