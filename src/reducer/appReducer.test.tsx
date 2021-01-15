import { TOGGLE_MOBILE_NAV } from '../actions/appActions'
import appReducer from './appReducer'
import { initialState } from './appReducer'

describe('App Reducer', () => {
	it('returns the initial state', () =>
		expect(appReducer(undefined, {})).toEqual(initialState))

	it('toggle mobile navigation true', () => {
		expect(
			appReducer(initialState, { type: TOGGLE_MOBILE_NAV, data: true }),
		).toEqual({
			...initialState,
			mobile_nav_open: true,
		})
	})
})
