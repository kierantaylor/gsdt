import { IExercise } from '../../../types/Exercise'
import { Gender } from '../../../types/ExerciseList'
import { IWorkout } from '../../../types/Workout'
import ExerciseItem from '../../atoms/ExerciseItem'
import InfiniteScroll from 'react-infinite-scroll-component'
import styles from './ExerciseList.module.scss'
import { useEffect, useState } from 'react'

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
