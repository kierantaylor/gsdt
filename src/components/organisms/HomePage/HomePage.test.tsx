import HomePage from '.'
import { cleanup, fireEvent, render } from '@testing-library/react'
import { MemoryRouter as Router, Route } from 'react-router-dom'

afterEach(cleanup)

describe('Home page tests', () => {
	test('Home Page contains get started button', async () => {
		const component = render(
			<Router>
				<HomePage />
			</Router>,
		)

		const buttonText = 'Get started'
		expect(await component.findByText(buttonText)).toBeInTheDocument()
	})

	test('Get Started button on click goes to exercises page', async () => {
		let testHistory: any = {},
			testLocation: any = {}
		const component = render(
			<Router>
				<HomePage />
				<Route
					path="*"
					render={({ history, location }) => {
						testHistory = history
						testLocation = location
						return null
					}}
				/>
			</Router>,
		)

		let button = await component.findByText('Get started')
		fireEvent.click(button)

		expect(testLocation.pathname).toBe('/exercises')
	})
})
