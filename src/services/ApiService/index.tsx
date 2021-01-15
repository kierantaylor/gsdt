import 'axios'
import axios from 'axios'

const handleResponse = (resp: any) => {
	if (resp.status != 200) {
		if (resp.status === 401) {
			throw new Error('You are not authorised')
		}

		throw new Error(`${resp.status}: ${resp.statusText}`)
	}
}

export const get = (path: string): any => axios.get(path)
