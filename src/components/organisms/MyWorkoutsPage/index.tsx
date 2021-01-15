import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
	selectAllWorkoutExercises,
	selectGender,
} from '../../../selectors/exerciseSelectors'
import { IExercise } from '../../../types/Exercise'
import * as exerciseActions from '../../../actions/exerciseActions'
import styles from './MyWorkoutsPage.module.scss'
import ExerciseList from '../../molecules/ExerciseList'
import { Gender } from '../../../types/ExerciseList'

const MyWorkoutsPage = () => {
	const workoutExercises: Array<IExercise> = useSelector(
		selectAllWorkoutExercises,
	)

	const selectedGender: Gender = useSelector(selectGender)

	const dispatch = useDispatch()
	const loadExercises = useCallback(() => {
		dispatch(exerciseActions.fetchExercises())
	}, [dispatch])

	useEffect(() => {
		if (!workoutExercises) {
			loadExercises()
		}
	})

	return (
		<div className={styles.myWorkoutsPage}>
			<h1>My Workout</h1>
			{workoutExercises.length === 0 ? (
				<React.Fragment>
					<p>No exercises have been added to your workout</p>
				</React.Fragment>
			) : (
				<ExerciseList
					selectedGender={selectedGender}
					exercises={workoutExercises}
				/>
			)}
		</div>
	)
}

export default withRouter(MyWorkoutsPage)
