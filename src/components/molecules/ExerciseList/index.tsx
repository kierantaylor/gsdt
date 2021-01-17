import { IExercise } from '../../../types/Exercise'
import { Gender } from '../../../types/ExerciseList'
import ExerciseItem from '../../atoms/ExerciseItem'
import styles from './ExerciseList.module.scss'

interface IProps {
	exercises: Array<IExercise>
	selectedGender: Gender
}

const ExerciseList = (props: IProps) => {
	return (
		<div className={styles.list}>
			{props.exercises.map((exercise, index) => {
				return (
					<div className={styles.item} key={index}>
						<ExerciseItem
							isMale={props.selectedGender == Gender.Male}
							isFemale={props.selectedGender == Gender.Female}
							{...exercise}
						/>
					</div>
				)
			})}
		</div>
	)
}

export default ExerciseList
