import { LOCAL_STORAGE_MY_WORKOUTS_NAME } from '../config/constants'

export const AddToMyWorkout = (id: string) => {
	let ls = localStorage.getItem(LOCAL_STORAGE_MY_WORKOUTS_NAME)
	if (!ls) {
		let obj: Array<string> = [id]
		localStorage.setItem(LOCAL_STORAGE_MY_WORKOUTS_NAME, obj.toString())
		return
	}

	let obj: Array<string> = JSON.parse(ls)
	if (obj.findIndex(x => x == id) > -1) {
		return
	}

	obj.push(id)
	localStorage.setItem(LOCAL_STORAGE_MY_WORKOUTS_NAME, obj.toString())
}

export const RemoveFromMyWorkout = (id: string) => {}
