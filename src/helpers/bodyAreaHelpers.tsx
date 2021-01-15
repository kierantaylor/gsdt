import { IExercise } from '../types/Exercise'

export const getBodyAreas = (exercises: Array<IExercise>): Array<any> => {
	let result: Array<any> = [{ value: 'all', label: 'All' }]
	exercises.map((e, index) =>
		e.bodyAreas.map((bodyArea, index) => {
			let res = { value: bodyArea, label: bodyArea }
			if (result.findIndex(x => x.value === bodyArea) < 0) {
				result.push(res)
			}
		}),
	)

	return result
}
