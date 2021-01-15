import styles from './AboutPage.module.scss'

const AboutPage = () => (
	<div className={styles.about}>
		<p>
			<strong>Gymshark Frontend Developer Test</strong>
		</p>
		<p>
			I have taken the endpoint provided and built a platform around it.
		</p>
		<p>Tech used:</p>
		<ul>
			<li>
				React
				<ul>
					<li>Bootstrapped using CRA for quicker developer time.</li>
					<li>
						All components are functional components utilising hooks
						to access data from the Redux store through selectors.
					</li>
					<li>React Router</li>
					<li>
						Atomic design
						<ul>
							<li>
								I have implemented the atomic design methodology
								with a twist. I have essentially just skimmed it
								down a bit and not included the 4<sup>th</sup>{' '}
								and 5<sup>th</sup> layers (Pages and Templates)
								and just used Atoms, Molecules and Organisms.
							</li>
						</ul>
					</li>
					<li>Axios</li>
					<li>Redux</li>
					<li>Redux Thunk Middleware</li>
					<li>
						SaaS pre-processor, including use of variables, mixins
						and media queries, flexbox.
					</li>
					<li>
						I took a mobile first approach to design, but I'm no UX
						designer. It looks good on mobile and desktop, but may
						look a bit funky on tablets!
					</li>
					<li>
						JEST for testing
						<ul>
							<li>
								Parts of the platform tested include the Redux
								level, testing the actions and reducers,
								component rendering and the react router.
							</li>
						</ul>
					</li>
					<li>Hosted as a static site</li>
				</ul>
			</li>
		</ul>
		<p>Functionality implemented:</p>
		<ul>
			<li>
				Landing page
				<ul>
					<li>
						Simple landing page with an action button to go to the
						list page.
					</li>
				</ul>
			</li>
			<li>
				Exercise List page
				<ul>
					<li>
						Grid based list screen which displays each exercise
						item. Including the exercise name, picture (based on
						selected gender) and the body area(s) that the exercise
						targets.
					</li>
					<li>
						Ability to filter the data
						<ul>
							<li>Filter by body areas</li>
							<li>Toggle between genders</li>
							<li>Sort by alphabetical or reverse</li>
							<li>
								Search for an exercise which uses the Name as
								it&rsquo;s search point
							</li>
							<li>
								Sticky filter bar navigation when the filter bar
								goes out of view allowing for a better UX
							</li>
							<li>
								Infinite scroll so that results are loaded at 20
								at a time, with each other exercise items
								loading in dynamically when in view.
							</li>
							<li>
								Images are loaded in using a smooth loader so
								that they only display when the resource is
								fully loaded.
							</li>
						</ul>
					</li>
					<li>
						Exercise Detail Page
						<ul>
							<li>
								This displays the exercise information for the
								provided exercise ID retrieved from react
								router.
							</li>
							<li>
								React router parameter for gender decides which
								version of the image gets shown.
							</li>
							<li>
								Instruction information is sanitized and
								displayed using a popular NPM package.
							</li>
							<li>
								The user can toggle between male/female on this
								page to view the different images of the
								exercise.
							</li>
						</ul>
					</li>
					<li>
						My Workout
						<ul>
							<li>
								This functionality lets the User add exercises
								into a stored list for future reference.
							</li>
							<li>
								The user can add an exercise from the List Page
								using the top right heart icon or on the
								Exercise Detail Page through the &ldquo;Add to
								my workout&rdquo; button.
							</li>
							<li>
								This data is just stored in the Redux Store and
								is lost after a page refresh.
								<ul>
									<li>
										This could be stored in a database for
										persistence against an individual User.
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	</div>
)

export default AboutPage
