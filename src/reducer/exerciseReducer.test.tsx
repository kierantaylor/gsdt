import {
	EXERCISES_REQUESTED,
	EXERCISES_SUCCESS,
} from '../actions/exerciseActions'
import { LoadedState } from '../types/App'
import { IExercise } from '../types/Exercise'
import exerciseReducer, { initialState } from './exerciseReducer'

describe('Exercise Reducer', () => {
	it('returns the initial state', () =>
		expect(exerciseReducer(undefined, {})).toEqual(initialState))

	it('sets loading to true when exercise requested', () => {
		expect(
			exerciseReducer(initialState, { type: EXERCISES_REQUESTED }),
		).toEqual({
			...initialState,
			exercises_loading: LoadedState.LOADING,
		})
	})

	it('sets loading to false and stores data when exercise success', () => {
		let data: Array<IExercise> = [
			{
				id: '5c10de5792437a5c67e74ba2',
				name: 'Pull Up',
				transcript:
					'<ol><li style="text-align: left;">Grab the pull up bar, hands facing forwards. Retract your shoulder blades and tilt your torso back. <b>First Position</b>.</li><li style="text-align: left;">Bringing your lats up to your elbows, pull your torso up until your shoulders reach the height of your hands at <b>Second Position</b>. Ensure you contract your back muscles throughout every rep.</li><li style="text-align: left;">Slow and controlled, fall back into <b>First Position</b>.</li><li style="text-align: left;">Finish your reps.</li></ol><p style="text-align: left;">There\'s no place for egos in the gym. Always lift with a weight that\'s comfortable and controllable. If you experience any pain, put your safety first and stop.</p>',
				female: {
					image:
						'https://cdni.gs.lightning-e.com/media/5c0e516f72fc52b810eb7f57-malewidegrippullupthumbnail.jpg',
				},
				male: {
					image:
						'https://cdni.gs.lightning-e.com/media/5c0e4717ee0147fd16ef6003-malepullupsthumbnail.jpg',
				},
				bodyAreas: ['Back', 'Biceps'],
			},
		]

		expect(
			exerciseReducer(initialState, {
				type: EXERCISES_SUCCESS,
				data: data,
			}),
		).toEqual({
			...initialState,
			exercises_loading: LoadedState.LOADED,
			exercises: data,
		})
	})
})
