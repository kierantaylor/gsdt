import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Routes } from '../../../routing'
import Navigation from '../../atoms/Navigation'
import Footer from '../../molecules/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MobileNavigation from '../../atoms/MobileNavigation'
import ErrorBoundary from '../../atoms/ErrorBoundary'
import { LastLocationProvider } from 'react-router-last-location'
import styles from './BasePage.module.scss'

const BasePage = (props: any) => (
	<div>
		<ErrorBoundary>
			<Router>
				<LastLocationProvider>
					<ToastContainer />
					<Navigation />
					<MobileNavigation />
					<div className={styles.basePage}>
						<Switch>
							{Routes.map((route, index) => (
								<Route
									key={index}
									exact={route.exact}
									path={route.path}
									component={route.component}
								/>
							))}
						</Switch>
					</div>
					<Footer />
				</LastLocationProvider>
			</Router>
		</ErrorBoundary>
	</div>
)

const mapStateToProps = (state: any) => {
	return {
		sticky_nav: state.app.sticky_nav,
	}
}

export default connect(mapStateToProps)(BasePage)
