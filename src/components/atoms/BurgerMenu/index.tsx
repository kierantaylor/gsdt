import { useDispatch, useSelector } from 'react-redux'
import { selectMobileNavigationOpen } from '../../../selectors/appSelectors'
import styles from './BurgerMenu.module.scss'
import * as actions from '../../../actions/appActions'

const BurgerMenu = () => {
	const isOpen = useSelector(selectMobileNavigationOpen)
	const dispatch = useDispatch()
	const handleToggle = () =>
		dispatch(actions.actions.toggleMobileNav(!isOpen))

	return (
		<div
			className={`${styles.burgerMenuContainer} ${
				isOpen ? styles.change : ''
			}`}
			onClick={() => handleToggle()}
		>
			<div className={styles.bar1}></div>
			<div className={styles.bar2}></div>
			<div className={styles.bar3}></div>
		</div>
	)
}

export default BurgerMenu
