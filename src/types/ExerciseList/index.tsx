export enum Gender {
	Male = 'Male',
	Female = 'Female',
}

export enum Sort {
	AZ = 'Alphabetical (A-Z)',
	ZA = 'Alphabetical (Z-A)',
}

export interface IExerciseListOptions {
	gender?: Gender
	search?: string
	bodyArea?: string
}
