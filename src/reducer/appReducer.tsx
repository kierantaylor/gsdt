import { TOGGLE_MOBILE_NAV } from '../actions/appActions'

export interface IAppState {
	mobile_nav_open: boolean
}

export const initialState: IAppState = {
	mobile_nav_open: false,
}

const appReducer = function (state: IAppState = initialState, action: any) {
	switch (action.type) {
		case TOGGLE_MOBILE_NAV:
			return {
				...state,
				mobile_nav_open: action.data,
			}
		default:
			return state
	}
}

export default appReducer
