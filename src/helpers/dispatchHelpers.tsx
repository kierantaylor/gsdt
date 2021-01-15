import { IExercise } from '../types/Exercise'
import { store } from '../store'
import { Gender } from '../types/ExerciseList'
import { IWorkout } from '../types/Workout'
import { toast } from 'react-toastify'

export const removeWorkout = (exerciseId: string) => {
	let state: Array<IWorkout> = store.getState().workout.workouts
	if (state.length === 0) {
		return
	}

	let includesWorkout = state.findIndex(x => x.exerciseId == exerciseId) > -1
	if (!includesWorkout) {
		return
	}

	let filtered = state.filter(x => x.exerciseId != exerciseId)
	updateWorkouts(filtered)
	toast.success('Exercise has been removed from your workout!')
}

export const addWorkout = (data: IWorkout) => {
	let state: Array<IWorkout> = store.getState().workout.workouts
	if (state.length === 0) {
		updateWorkouts([data])
		toast.success('Exercise has been added to your workout!')
		return
	}

	let includesWorkout =
		state.findIndex(x => x.exerciseId == data.exerciseId) > -1
	if (includesWorkout) {
		toast.warning('Exercise has not been added, as it already exists')
		return
	}

	let newArr = state.concat([data])
	updateWorkouts(newArr)
	toast.success('Exercise has been added to your workout!')
}

export const updateWorkouts = (data: Array<IWorkout>) =>
	store.dispatch({
		type: 'UPDATE_WORKOUTS',
		data,
	})

export const setMobileNav = (data: boolean) =>
	store.dispatch({
		type: 'SET_MOBILE_NAV',
		data,
	})

export const updateExercises = (data: Array<IExercise>) =>
	store.dispatch({
		type: 'UPDATE_EXERCISES',
		data,
	})

export const updateBodyAreas = (data: Array<string>) =>
	store.dispatch({
		type: 'BODYAREAS_SUCCESS',
		data,
	})

export const updateSelectedGender = (data: Gender) =>
	store.dispatch({
		type: 'UPDATE_SELECTED_GENDER',
		data,
	})
