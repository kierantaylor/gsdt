import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './workoutActions'
import axios from 'axios'
import { IWorkout } from '../types/Workout'
import { Gender } from '../types/ExerciseList'

const middlewares = [thunk]
const createMockStore = configureMockStore(middlewares)
const store = createMockStore()

const data: Array<IWorkout> = [
	{
		exerciseId: '0',
		added: new Date(),
		Gender: Gender.Male,
	},
]

describe('Workout actions', () => {
	beforeEach(() => {
		store.clearActions()
	})

	test('GET EXERCISES - Correct action dispatched', () => {
		const expectedActions = [
			{
				type: actions.UPDATE_WORKOUTS,
				data,
			},
		]

		store.dispatch(actions.actions.updateWorkouts(data))
		expect(store.getActions()).toEqual(expectedActions)
	})
})
