import React, { useCallback, useEffect } from 'react'
import { IExercise } from '../../../types/Exercise'
import { IRouterProps } from '../../../types/Router/IRouterProps'
import SanitizedHTML from 'react-sanitized-html'
import styles from './ExerciseDetailPage.module.scss'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { EXERCISE_ROUTE, VIEW_EXERCISE_ROUTE } from '../../../routing'
import { withRouter } from 'react-router-dom'
import SmoothImage from '../../atoms/SmoothImage'
import LoadingSpinner from '../../atoms/LoadingSpinner'
import AddToWorkoutButton from '../../atoms/AddToWorkoutButton'
import { LoadedState } from '../../../types/App'
import { allowedHTMLAttributes, allowedHTMLTags } from './config/htmlParser'
import * as exerciseActions from '../../../actions/exerciseActions'
import {
	selectExercise,
	selectExercisesLoading,
} from '../../../selectors/exerciseSelectors'
import { useLastLocation } from 'react-router-last-location'

const ExerciseDetailPage = (props: IRouterProps) => {
	const dispatch = useDispatch()
	const loadExercises = useCallback(() => {
		dispatch(exerciseActions.fetchExercises())
	}, [dispatch])

	const exercise: IExercise = useSelector(state =>
		selectExercise(state, props.match.params.exerciseId),
	)

	const loading: LoadedState = useSelector(selectExercisesLoading)
	let previous = useLastLocation()

	const goBack = () => {
		if (previous?.pathname) {
			props.history.push(previous.pathname)
			return
		}

		props.history.push(EXERCISE_ROUTE)
	}

	useEffect(() => {
		window.scroll(0, 0)
		if (!exercise) {
			loadExercises()
		}
	}, [props.match.params, props.history, dispatch, loadExercises, exercise])

	const FilterBar = () => {
		return (
			<div className={styles.filterBar}>
				<ul className={styles.mobile}>
					<li className={styles.option} onClick={() => goBack()}>
						{' '}
						{props.history.pre}
						Go back
					</li>
				</ul>
				<ul className={styles.desktop}>
					<li
						className={styles.title}
						onClick={() => props.history.push(EXERCISE_ROUTE)}
					>
						Exercises
					</li>
					<i className="fas fa-chevron-right"></i>
					<li className={styles.option}>View Exercise</li>
					<i className="fas fa-chevron-right"></i>
					<li className={styles.option}>{exercise?.name}</li>
				</ul>
				<div className={styles.actions}>
					<div className={styles.row}>
						<div className={styles.column}>
							<AddToWorkoutButton
								hideText
								exerciseId={props.match.params.exerciseId}
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}

	if (loading === LoadedState.LOADING) {
		return <LoadingSpinner />
	}

	if (!exercise) {
		return <div>No exercise</div>
	}

	return (
		<div className={styles.exercisePage}>
			<Helmet>
				<title>{exercise.name} | Exercise | Gymshark</title>
			</Helmet>

			<FilterBar />

			<div className={styles.exercise}>
				<div className={styles.row}>
					<div className={styles.column}>
						<SmoothImage
							className={styles.image}
							src={
								props.match.params.gender === 'male'
									? exercise.male.image
									: exercise.female.image
							}
							alt={exercise.name}
						/>
					</div>

					<div className={styles.column}>
						<h2>{exercise.name}</h2>
						<p className={styles.bodyAreas}>
							{exercise.bodyAreas.map((bodyArea, index) => (
								<span key={index} className={styles.bodyArea}>
									{bodyArea}
								</span>
							))}
						</p>

						<div className={styles.instructions}>
							<SanitizedHTML
								allowedAttributes={allowedHTMLAttributes}
								allowedTags={allowedHTMLTags}
								html={exercise.transcript}
							/>
						</div>

						<div className={styles.buttons}>
							<button
								className={styles.addButton}
								onClick={() =>
									props.history.push(
										`${VIEW_EXERCISE_ROUTE}/${
											exercise.id
										}/${
											props.match.params.gender === 'male'
												? 'female'
												: 'male'
										}`,
									)
								}
							>
								{props.match.params.gender === 'male'
									? 'View Female'
									: 'View Male'}
							</button>
							<button className={styles.addButton}>
								<AddToWorkoutButton exerciseId={exercise.id} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default withRouter(ExerciseDetailPage)
