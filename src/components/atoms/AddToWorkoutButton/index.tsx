import { useDispatch, useSelector } from 'react-redux'
import { removeWorkout } from '../../../helpers/dispatchHelpers'
import { selectWorkout } from '../../../selectors/workoutSelectors'
import { Gender } from '../../../types/ExerciseList'
import HeartIconAdd from '../HeartIconAdd'
import * as actions from '../../../actions/workoutActions'
import styles from './AddToWorkoutButton.module.scss'
import { selectAllWorkouts } from '../../../selectors/exerciseSelectors'
import HeartIconRemove from '../HeartIconRemove'

interface IProps {
	exerciseId: string
	hideText?: boolean
}

const AddToWorkoutButton = (props: IProps) => {
	const isAdded = useSelector(s => selectWorkout(s, props.exerciseId))
	const workouts = useSelector(selectAllWorkouts)
	const dispatch = useDispatch()

	const onAdd = () => {
		if (isAdded) {
			return
		}

		dispatch(
			actions.actions.updateWorkouts(
				workouts.concat([
					{
						exerciseId: props.exerciseId,
						Gender: Gender.Male,
						added: new Date(),
					},
				]),
			),
		)
	}

	const onRemove = () => removeWorkout(props.exerciseId)

	return (
		<div
			className={styles.addWorkoutButton}
			onClick={() => (isAdded ? onRemove() : onAdd())}
		>
			<div className={styles.row}>
				<div
					className={`${styles.column} ${
						props.hideText ? styles.hideOnMobile : ''
					}`}
				>
					{`${
						isAdded ? 'Remove from My Workout' : 'Add to My Workout'
					}`}
				</div>
				<div className={styles.column}>
					{isAdded ? <HeartIconRemove /> : <HeartIconAdd />}
				</div>
			</div>
		</div>
	)
}

export default AddToWorkoutButton
