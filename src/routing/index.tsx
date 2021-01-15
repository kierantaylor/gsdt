import AboutPage from '../components/organisms/AboutPage'
import ExerciseDetailPage from '../components/organisms/ExerciseDetailPage'
import ExercisePage from '../components/organisms/ExercisePage'
import HomePage from '../components/organisms/HomePage'
import MyWorkoutsPage from '../components/organisms/MyWorkoutsPage'

export interface IRoute {
	name: string
	path: string
	isTopLevel: boolean
	exact?: boolean
	component: any
	matches?: Array<string>
	indexOf?: Array<string>
}

export const DASHBOARD_ROUTE = '/'
export const EXERCISE_ROUTE = '/exercises'
export const MY_WORKOUT_ROUTE = '/my-workout'
export const VIEW_EXERCISE_ROUTE = '/exercise'
export const ABOUT_ROUTE = '/about'

export const Routes: Array<IRoute> = [
	{
		name: 'Home',
		path: DASHBOARD_ROUTE,
		isTopLevel: true,
		exact: true,
		component: HomePage,
		matches: ['/'],
	},
	{
		name: 'Exercises',
		path: EXERCISE_ROUTE,
		isTopLevel: true,
		component: ExercisePage,
		matches: ['/exercises'],
		indexOf: ['/exercise'],
	},
	{
		name: 'My Workout',
		path: MY_WORKOUT_ROUTE,
		isTopLevel: true,
		component: MyWorkoutsPage,
		matches: ['/my-workout'],
		indexOf: ['/my-workout'],
	},
	{
		name: 'View Exercise',
		path: `${VIEW_EXERCISE_ROUTE}/:exerciseId/:gender`,
		isTopLevel: false,
		component: ExerciseDetailPage,
		indexOf: ['/exercise/'],
	},
	{
		name: 'About',
		path: ABOUT_ROUTE,
		isTopLevel: true,
		component: AboutPage,
		matches: ['/about'],
		indexOf: ['/about'],
	},
]
