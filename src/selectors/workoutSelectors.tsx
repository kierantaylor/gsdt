import { IExercise } from '../types/Exercise'

export const selectWorkout = (state: any, exerciseId: string) =>
	state.workout.workouts.findIndex((x: any) => x.exerciseId == exerciseId) >
	-1
