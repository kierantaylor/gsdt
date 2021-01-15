import { DASHBOARD_ROUTE, IRoute, Routes } from '../../../routing'
import { IRouterProps } from '../../../types/Router/IRouterProps'
import { withRouter } from 'react-router-dom'
import styles from './Navigation.module.scss'
import BurgerMenu from '../BurgerMenu'

const Navigation = (props: IRouterProps) => {
	const isActive = (route: IRoute) =>
		props.location.pathname == route.matches ||
		props.location.pathname.indexOf(route.indexOf) > -1

	return (
		<nav className={styles.navigation}>
			<div className={styles.topRow}>
				<div className={styles.brand}>
					<img
						alt="Gymshark Logo"
						onClick={() => props.history.push(DASHBOARD_ROUTE)}
						src={
							'https://cdn.shopify.com/s/files/1/0098/8822/t/214/assets/logo.svg?85833'
						}
					/>
				</div>

				<div className={styles.items}>
					<ul>
						{Routes.filter(route => route.isTopLevel).map(
							(route, index) => (
								<li
									key={index}
									className={`${
										isActive(route) ? styles.active : ''
									}`}
									onClick={() =>
										props.history.push(route.path)
									}
								>
									{route.name}
								</li>
							),
						)}
					</ul>
				</div>

				<div className={styles.view}>
					<a target="_blank" href="https://uk.gymshark.com">
						Go to Gymshark&nbsp;
						<i className="fas fa-external-link-alt"></i>
					</a>
				</div>

				<div className={styles.burgerMenu}>
					<BurgerMenu />
				</div>
			</div>
		</nav>
	)
}

export default withRouter(Navigation)
