import { Sort } from '../../../../types/ExerciseList'
import { IExercise } from '../../../../types/Exercise'

export const sortOptions = [
	{ value: Sort.AZ, label: 'Alphabetical (A-Z)' },
	{ value: Sort.ZA, label: 'Alphabetical (Z-A)' },
]

export const sortByOrder = (sort: any) => (a: IExercise, b: IExercise) => {
	if (sort.value == Sort.AZ) {
		if (a.name < b.name) {
			return -1
		}

		if (a.name > b.name) {
			return 1
		}
	}

	if (sort.value == Sort.ZA) {
		if (a.name < b.name) {
			return 1
		}

		if (a.name > b.name) {
			return -1
		}
	}

	return 0
}
