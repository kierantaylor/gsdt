import { withRouter } from 'react-router-dom'
import mockup from '../../../images/mockup-min.png'
import { EXERCISE_ROUTE } from '../../../routing'
import { IRouterProps } from '../../../types/Router/IRouterProps'
import Button from '../../atoms/Button'
import SmoothImage from '../../atoms/SmoothImage'
import styles from './HomePage.module.scss'

const HomePage = (props: IRouterProps) => {
	return (
		<div className={styles.homePage}>
			<section className={styles.topBanner}>
				<div className={styles.content}>
					<div className={styles.row}>
						<div className={styles.column}>
							<div className={styles.text}>
								<h2>
									The only fitness guide you'll{' '}
									<span className={styles.highlight}>
										ever need.
									</span>
								</h2>
								<p>
									Use the Gymshark Fitness app to view
									exercises and create your own custom
									workout. This application was created for a
									Developer role at Gymshark as part of an
									interview process, utlising a endpoint that
									returns exercise data.
								</p>

								<ul>
									<li>
										100+ available exercises to choose from
									</li>
									<li>Create your own custom workout</li>
									<li>Filter by male and female pictures</li>
									<li>Search for what you are looking for</li>
								</ul>

								<Button
									onClick={() =>
										props.history.push(EXERCISE_ROUTE)
									}
								>
									Get started
								</Button>
							</div>
						</div>
						<div className={styles.imageColumn}>
							<SmoothImage
								src={mockup}
								alt="Gymshark Exercise App"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default withRouter(HomePage)
