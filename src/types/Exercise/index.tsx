export interface IExercise {
	id: string
	name: string
	transcript: string
	female: GenderResult
	male: GenderResult
	bodyAreas: Array<string>
}

export interface GenderResult {
	image: string
}
