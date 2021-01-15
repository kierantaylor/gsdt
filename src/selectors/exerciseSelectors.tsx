import { IExercise } from '../types/Exercise'
import { IWorkout } from '../types/Workout'

export const selectAllExercises = (state: any) => state.exercise.exercises
export const selectExercise = (state: any, exerciseId: string) =>
	state.exercise.exercises.find(
		(exercise: IExercise) => exercise.id == exerciseId,
	)

export const selectAllWorkoutExercises = (state: any) =>
	state.exercise.exercises.filter(function (exercise: IExercise) {
		return state.workout.workouts.find(
			(x: IWorkout) => x.exerciseId == exercise.id,
		)
	})
export const selectExercisesLoading = (state: any) =>
	state.exercise.exercises_loading
export const selectAllBodyAreas = (state: any) => state.exercise.bodyAreas
export const selectGender = (state: any) => state.exercise.selectedGender
export const selectAllWorkouts = (state: any) => state.workout.workouts
