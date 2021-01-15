export const TOGGLE_MOBILE_NAV = 'TOGGLE_MOBILE_NAV'

export const actions = {
	toggleMobileNav: toggleMobileNav,
}

function toggleMobileNav(data: any): any {
	return {
		type: TOGGLE_MOBILE_NAV,
		data,
	}
}
