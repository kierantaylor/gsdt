import { IRouterProps } from '../../../types/Router/IRouterProps'
import { withRouter } from 'react-router-dom'
import styles from './MobileNavigation.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { IRoute, Routes } from '../../../routing'
import { setMobileNav } from '../../../helpers/dispatchHelpers'
import { selectMobileNavigationOpen } from '../../../selectors/appSelectors'
import * as actions from '../../../actions/appActions'

const MobileNavigation = (props: IRouterProps) => {
	const isOpen = useSelector(selectMobileNavigationOpen)
	const dispatch = useDispatch()

	const isActive = (route: IRoute) =>
		props.location.pathname == route.matches ||
		props.location.pathname.indexOf(route.indexOf) > -1

	const onClick = (path: string) => {
		props.history.push(path)
		setMobileNav(false)
		dispatch(actions.actions.toggleMobileNav(false))
	}

	return (
		<div
			className={`${
				isOpen ? styles.mobileMenu : styles.mobileMenuHidden
			}`}
		>
			<div className={styles.items}>
				<ul>
					{Routes.filter(route => route.isTopLevel).map(
						(route, index) => (
							<li
								key={index}
								className={`${
									isActive(route) ? styles.active : ''
								}`}
								onClick={() => onClick(route.path)}
							>
								{route.name}
							</li>
						),
					)}
				</ul>
			</div>
		</div>
	)
}

export default withRouter(MobileNavigation)
