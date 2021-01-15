import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import BasePage from './components/organisms/BasePage'
import { store } from './store'

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<BasePage />
			</Provider>
		</div>
	)
}

export default App
