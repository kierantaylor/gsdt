import React, { useCallback, useEffect, useState } from 'react'
import { IExercise } from '../../../types/Exercise'
import Select, { ValueType } from 'react-select'
import styles from './ExercisePage.module.scss'
import { Gender } from '../../../types/ExerciseList'
import { useDispatch, useSelector } from 'react-redux'
import { updateSelectedGender } from '../../../helpers/dispatchHelpers'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LoadingSpinner from '../../atoms/LoadingSpinner'
import { IWorkout } from '../../../types/Workout'
import ExerciseList from '../../molecules/ExerciseList'
import InfiniteScroll from 'react-infinite-scroller'
import { sortByOrder, sortOptions } from './config/sorting'
import { genderOptions } from './config/gender'
import {
	selectAllBodyAreas,
	selectAllExercises,
	selectAllWorkouts,
	selectExercisesLoading,
	selectGender,
} from '../../../selectors/exerciseSelectors'
import * as exerciseActions from '../../../actions/exerciseActions'
import { LoadedState } from '../../../types/App'

const ExercisePage = () => {
	const [bodyArea, setbodyArea] = useState<ValueType<any, any>>({
		value: 'all',
		label: 'All',
	})
	const [sort, setSort] = useState<ValueType<any, any>>(sortOptions[0])
	const [sticky_filters, setStickyFilters] = useState<boolean>(false)
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [page, setPage] = useState(1)

	const exercisesLoaded: LoadedState = useSelector(selectExercisesLoading)
	const exerciseList: Array<IExercise> = useSelector(selectAllExercises)
	const selectedGenderFromSelector: Gender = useSelector(selectGender)
	const bodyAreasFromSelector: any = useSelector(selectAllBodyAreas)

	let searchInputRef: HTMLInputElement | null = null

	const onChangeSearch = () => {
		let search = searchInputRef?.value
		if (!search) {
			return
		}

		setSearchTerm(search)
	}

	const onChangeBodyArea = (prop: any) => {
		setPage(1)
		setbodyArea(prop)
		window.scrollTo(0, 0)
	}

	const onChangeGender = (v: ValueType<any, any>): any => {
		setPage(1)
		updateSelectedGender(
			Gender[
				(v.value.charAt(0).toUpperCase() +
					v.value.slice(1)) as keyof typeof Gender
			],
		)
	}

	const onChangeSort = (v: ValueType<any, any>): any => {
		setPage(1)
		setSort(v)
		window.scrollTo(0, 0)
	}

	const handleScroll = () => {
		const offset = window.scrollY
		if (offset > 400) {
			setStickyFilters(true)
		} else {
			setStickyFilters(false)
		}
	}

	const dispatch = useDispatch()
	const loadExercises = useCallback(() => {
		dispatch(exerciseActions.fetchExercises())
	}, [dispatch])

	useEffect(() => {
		if (exerciseList.length === 0) {
			loadExercises()
		}
		window.addEventListener('scroll', handleScroll)
	}, [dispatch, exerciseList.length, loadExercises])

	const FilterBar = () => {
		return (
			<div className={`${styles.topBar}`}>
				<div className={styles.column}>
					<div className={`${styles.innerRow} ${styles.left}`}>
						<div className={styles.labelColumn}>
							<span className={styles.title}>FILTERS:</span>
						</div>
						<div className={styles.innerColumn}>
							<div className={styles.option}>
								<Select
									onChange={onChangeBodyArea}
									value={bodyArea}
									placeholder="Body area..."
									options={bodyAreasFromSelector}
								/>
							</div>
						</div>
						<div className={styles.innerColumn}>
							<div className={styles.option}>
								<Select
									onChange={onChangeGender}
									value={{
										value:
											Gender[selectedGenderFromSelector],
										label:
											Gender[selectedGenderFromSelector],
									}}
									placeholder="Gender..."
									options={genderOptions}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.column}>
					<div className={`${styles.innerRow} ${styles.right}`}>
						<div className={styles.labelColumn}>SORT:</div>
						<div className={styles.innerColumn}>
							<div className={styles.option}>
								<Select
									onChange={onChangeSort}
									placeholder="Sort by..."
									options={sortOptions}
									value={sort}
								/>
							</div>
						</div>
						<div className={styles.innerColumn}>
							<div className={styles.searchInput}>
								<input
									ref={input => {
										searchInputRef = input
									}}
									value={searchTerm}
									onChange={e =>
										setSearchTerm(e.currentTarget.value)
									}
									className={styles.input}
									type="text"
									placeholder="Search for an exercise..."
									onKeyPress={e =>
										e.key === 'Enter' && onChangeSearch()
									}
								/>
								<input
									type="submit"
									value="Search"
									className={styles.submit}
									onClick={() => onChangeSearch()}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	const BottomBar = () => {
		return (
			<div className={styles.bottomBar}>
				Showing {paginationList.length} of {sortedExercises.length}{' '}
				{selectedGenderFromSelector?.toString()} results{' '}
				{bodyArea.value !== 'all' ? `for ${bodyArea.label}` : ``}{' '}
				{searchTerm && `for '${searchTerm}'`}
			</div>
		)
	}

	const sortedExercises = exerciseList
		.sort(sortByOrder(sort))
		.filter(x => {
			if (bodyArea.value !== 'all')
				return x.bodyAreas.includes(bodyArea.value)
			return true
		})
		.filter(x => {
			if (searchTerm)
				return (
					x.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
				)

			return true
		})

	const paginationList = sortedExercises.slice(0, page * 20)

	const TotalsBar = () => (
		<div
			className={`${styles.totalsMobileFilters} ${
				sticky_filters ? styles.visible : ''
			}`}
		>
			Showing {paginationList.length} of {sortedExercises.length}{' '}
			{selectedGenderFromSelector?.toString()} results{' '}
			{bodyArea.value !== 'all' ? `for ${bodyArea.label}` : ``}
			{searchTerm && `for '${searchTerm}'`}
		</div>
	)

	const BackToFiltersBar = () => (
		<div
			onClick={() => window.scroll(0, 0)}
			className={`${styles.mobileBackToFilters} ${
				sticky_filters ? styles.visible : ''
			}`}
		>
			Back to filters
		</div>
	)

	if (exercisesLoaded === LoadedState.LOADING) {
		return <LoadingSpinner />
	}

	return (
		<div className={styles.exercisePage}>
			<React.Fragment>
				<BackToFiltersBar />
				<TotalsBar />

				<div
					className={`${styles.filtersBar} ${
						sticky_filters ? styles.sticky : ''
					}`}
				>
					<FilterBar />
					<BottomBar />
				</div>

				<div
					className={`${styles.exerciseList} ${
						sticky_filters ? styles.stickyList : ''
					}`}
				>
					{sortedExercises && sortedExercises.length > 0 ? (
						<InfiniteScroll
							pageStart={0}
							loadMore={() => setPage(page + 1)}
							hasMore={
								paginationList.length !== sortedExercises.length
							}
						>
							<ExerciseList
								exercises={paginationList}
								selectedGender={selectedGenderFromSelector}
							/>
						</InfiniteScroll>
					) : (
						<div>
							<h2>
								No exercises have been added to your workout
							</h2>
						</div>
					)}
				</div>
			</React.Fragment>
		</div>
	)
}

export default ExercisePage
