import { UPDATE_WORKOUTS } from '../actions/workoutActions'
import { Gender } from '../types/ExerciseList'
import { IWorkout } from '../types/Workout'
import workoutReducer from './workoutReducer'
import { initialState } from './workoutReducer'

describe('Workout Reducer', () => {
	it('returns the initial state', () =>
		expect(workoutReducer(undefined, {})).toEqual(initialState))

	it('updating the workouts updates them in the store', () => {
		let data: Array<IWorkout> = [
			{
				exerciseId: 'test-id',
				added: new Date(),
				Gender: Gender.Male,
			},
		]

		expect(
			workoutReducer(initialState, { type: UPDATE_WORKOUTS, data }),
		).toEqual({
			...initialState,
			workouts: data,
		})
	})
})
