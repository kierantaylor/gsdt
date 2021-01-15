import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './exerciseActions'
import axios from 'axios'
import * as bodyAreaActions from './bodyAreasActions'

const exerciseData = [
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

const middlewares = [thunk]
const createMockStore = configureMockStore(middlewares)
const store = createMockStore({
	exercise: {
		exercises: [],
	},
})
const mockAddListener = jest.spyOn(axios, 'get')

describe('Exercise Actions', () => {
	beforeEach(() => {
		store.clearActions()
	})

	afterEach(() => {
		mockAddListener.mockClear()
	})

	it('should dispatch the correct actions on a successful request', async () => {
		const expectedActions = [
			actions.EXERCISES_REQUESTED,
			actions.EXERCISES_SUCCESS,
			bodyAreaActions.BODYAREAS_SUCCESS,
		]

		jest.spyOn(axios, 'get').mockImplementationOnce(() =>
			Promise.resolve({
				data: {
					exercises: [],
				},
			}),
		)

		return store.dispatch<any>(actions.fetchExercises()).then(() => {
			const actualActions = store.getActions().map(action => action.type)
			expect(actualActions).toEqual(expectedActions)
		})
	})

	it('should dispatch the correct actions on a failed request', () => {
		const expectedActions = [
			actions.EXERCISES_REQUESTED,
			actions.EXERCISES_FAILED,
		]

		const mockAddListener = jest.spyOn(axios, 'get')
		mockAddListener.mockImplementationOnce(() => Promise.reject())

		return store.dispatch<any>(actions.fetchExercises()).then(() => {
			const actualActions = store.getActions().map(action => action.type)
			expect(actualActions).toEqual(expectedActions)
		})
	})
})

describe('Exercise Action Creators', () => {
	beforeEach(() => {
		store.clearActions()
	})

	test('GET EXERCISES - Correct action dispatched', () => {
		const expectedActions = [
			{
				type: actions.EXERCISES_REQUESTED,
			},
		]

		store.dispatch(actions.actions.get())
		expect(store.getActions()).toEqual(expectedActions)
	})

	test('SUCCESS EXERCISES - Correct action dispatched', () => {
		const expectedActions = [
			{
				type: actions.EXERCISES_SUCCESS,
				data: exerciseData,
			},
		]

		store.dispatch(actions.actions.success(exerciseData))
		expect(store.getActions()).toEqual(expectedActions)
	})

	test('FAILURE EXERCISES - Correct action dispatched', () => {
		const expectedActions = [
			{
				type: actions.EXERCISES_FAILED,
			},
		]

		store.dispatch(actions.actions.failure())
		expect(store.getActions()).toEqual(expectedActions)
	})
})
