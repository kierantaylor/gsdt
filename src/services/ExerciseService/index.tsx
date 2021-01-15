import { get } from '../ApiService'
import { BASE_API_URL } from '../../config/domains'

export const getExercises = (): Promise<any> => {
	return get(`${BASE_API_URL}/customexercises/`)
}
