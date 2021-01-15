import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './appActions'

const middlewares = [thunk]
const createMockStore = configureMockStore(middlewares)
const store = createMockStore({})

describe('App actions', () => {
	beforeEach(() => {
		store.clearActions()
	})

	test('TOGGLE MOBILE NAV - Correct action dispatched', () => {
		const expectedActions = [
			{
				type: actions.TOGGLE_MOBILE_NAV,
				data: true,
			},
		]

		store.dispatch(actions.actions.toggleMobileNav(true))
		expect(store.getActions()).toEqual(expectedActions)
	})
})
