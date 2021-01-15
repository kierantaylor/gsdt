import { IExercise } from '../../../types/Exercise'
import styles from './ExerciseItem.module.scss'
import { withRouter } from 'react-router-dom'
import { IRouterProps } from '../../../types/Router/IRouterProps'
import { VIEW_EXERCISE_ROUTE } from '../../../routing'
import { useEffect } from 'react'
import SmoothImage from '../SmoothImage'
import HeartIconRemove from '../HeartIconRemove'
import HeartIconAdd from '../HeartIconAdd'
import { addWorkout, removeWorkout } from '../../../helpers/dispatchHelpers'
import { Gender } from '../../../types/ExerciseList'
import { useSelector } from 'react-redux'
import { selectWorkout } from '../../../selectors/workoutSelectors'

interface IFiltering {
	isMale?: boolean
	isFemale?: boolean
}

type Props = IExercise & IRouterProps & IFiltering

const ExerciseItem = (props: Props) => {
	const isAdded = useSelector(state => selectWorkout(state, props.id))

	const BodyAreas = () => {
		return props.bodyAreas.map((bodyArea, index) => (
			<span key={index} className={styles.bodyArea}>
				{bodyArea}
			</span>
		))
	}

	const onAdd = () =>
		addWorkout({
			exerciseId: props.id,
			Gender: props.isFemale ? Gender.Female : Gender.Male,
			added: new Date(),
		})
	const onRemove = () => removeWorkout(props.id)

	useEffect(() => {}, [])

	return (
		<div>
			<div
				className={styles.exerciseItem}
				onClick={() =>
					props.history.push(
						`${VIEW_EXERCISE_ROUTE}/${props.id}/${
							props.isFemale ? 'female' : 'male'
						}`,
					)
				}
			>
				<div
					className={styles.heart}
					onClick={e => {
						e.preventDefault()
						e.stopPropagation()
						isAdded ? onRemove() : onAdd()
					}}
				>
					{isAdded ? <HeartIconRemove /> : <HeartIconAdd />}
				</div>
				<div className={styles.imageBox}>
					<SmoothImage
						className={styles.exerciseImage}
						src={
							props.isFemale
								? props.female.image
								: props.male.image
						}
						alt={`Gymshark Exercise - ${props.name}`}
					/>
				</div>
				<div className={styles.text}>
					<div className={styles.title}>{props.name}</div>
					<div className={styles.bodyAreas}>{BodyAreas()}</div>
				</div>
			</div>
		</div>
	)
}

export default withRouter(ExerciseItem)
