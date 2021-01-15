import { IExercise } from '../types/Exercise'
import { getBodyAreas } from './bodyAreaHelpers'

describe('Body areas helpers', () => {
	test('it should return the correct body parts based on the exercises passed', () => {
		const input: Array<IExercise> = [
			{
				id: '5c10de5792437a5c67e74ba2',
				name: 'Pull Up',
				transcript:
					'<ol><li style="text-align: left;">Grab the pull up bar, hands facing forwards. Retract your shoulder blades and tilt your torso back. <b>First Position</b>.</li><li style="text-align: left;">Bringing your lats up to your elbows, pull your torso up until your shoulders reach the height of your hands at <b>Second Position</b>. Ensure you contract your back muscles throughout every rep.</li><li style="text-align: left;">Slow and controlled, fall back into <b>First Position</b>.</li><li style="text-align: left;">Finish your reps.</li></ol><p style="text-align: left;">There\'s no place for egos in the gym. Always lift with a weight that\'s comfortable and controllable. If you experience any pain, put your safety first and stop.</p>',
				female: {
					image:
						'https://cdni.gs.lightning-e.com/media/5c0e516f72fc52b810eb7f57-malewidegrippullupthumbnail.jpg',
				},
				male: {
					image:
						'https://cdni.gs.lightning-e.com/media/5c0e4717ee0147fd16ef6003-malepullupsthumbnail.jpg',
				},
				bodyAreas: ['Back', 'Biceps'],
			},
		]

		const output = [
			{
				label: 'All',
				value: 'all',
			},
			{
				label: 'Back',
				value: 'Back',
			},
			{
				label: 'Biceps',
				value: 'Biceps',
			},
		]
		expect(getBodyAreas(input)).toEqual(output)
	})

	test('it should return only distinct body areas even when there are dupes across exercises', () => {
		const input: Array<IExercise> = [
			{
				id: '5c10de5792437a5c67e74ba2',
				name: 'Pull Up',
				transcript:
					'<ol><li style="text-align: left;">Grab the pull up bar, hands facing forwards. Retract your shoulder blades and tilt your torso back. <b>First Position</b>.</li><li style="text-align: left;">Bringing your lats up to your elbows, pull your torso up until your shoulders reach the height of your hands at <b>Second Position</b>. Ensure you contract your back muscles throughout every rep.</li><li style="text-align: left;">Slow and controlled, fall back into <b>First Position</b>.</li><li style="text-align: left;">Finish your reps.</li></ol><p style="text-align: left;">There\'s no place for egos in the gym. Always lift with a weight that\'s comfortable and controllable. If you experience any pain, put your safety first and stop.</p>',
				female: {
					image:
						'https://cdni.gs.lightning-e.com/media/5c0e516f72fc52b810eb7f57-malewidegrippullupthumbnail.jpg',
				},
				male: {
					image:
						'https://cdni.gs.lightning-e.com/media/5c0e4717ee0147fd16ef6003-malepullupsthumbnail.jpg',
				},
				bodyAreas: ['Back', 'Biceps'],
			},
			{
				id: '5c10de5792437a5c67e74ba2',
				name: 'Pull Up',
				transcript:
					'<ol><li style="text-align: left;">Grab the pull up bar, hands facing forwards. Retract your shoulder blades and tilt your torso back. <b>First Position</b>.</li><li style="text-align: left;">Bringing your lats up to your elbows, pull your torso up until your shoulders reach the height of your hands at <b>Second Position</b>. Ensure you contract your back muscles throughout every rep.</li><li style="text-align: left;">Slow and controlled, fall back into <b>First Position</b>.</li><li style="text-align: left;">Finish your reps.</li></ol><p style="text-align: left;">There\'s no place for egos in the gym. Always lift with a weight that\'s comfortable and controllable. If you experience any pain, put your safety first and stop.</p>',
				female: {
					image:
						'https://cdni.gs.lightning-e.com/media/5c0e516f72fc52b810eb7f57-malewidegrippullupthumbnail.jpg',
				},
				male: {
					image:
						'https://cdni.gs.lightning-e.com/media/5c0e4717ee0147fd16ef6003-malepullupsthumbnail.jpg',
				},
				bodyAreas: ['Back', 'Biceps'],
			},
		]

		const output = [
			{
				label: 'All',
				value: 'all',
			},
			{
				label: 'Back',
				value: 'Back',
			},
			{
				label: 'Biceps',
				value: 'Biceps',
			},
		]
		expect(getBodyAreas(input)).toEqual(output)
	})

	test('it should return only the All option when there are no body areas in the data', () => {
		const input: Array<IExercise> = [
			{
				id: '5c10de5792437a5c67e74ba2',
				name: 'Pull Up',
				transcript:
					'<ol><li style="text-align: left;">Grab the pull up bar, hands facing forwards. Retract your shoulder blades and tilt your torso back. <b>First Position</b>.</li><li style="text-align: left;">Bringing your lats up to your elbows, pull your torso up until your shoulders reach the height of your hands at <b>Second Position</b>. Ensure you contract your back muscles throughout every rep.</li><li style="text-align: left;">Slow and controlled, fall back into <b>First Position</b>.</li><li style="text-align: left;">Finish your reps.</li></ol><p style="text-align: left;">There\'s no place for egos in the gym. Always lift with a weight that\'s comfortable and controllable. If you experience any pain, put your safety first and stop.</p>',
				female: {
					image:
						'https://cdni.gs.lightning-e.com/media/5c0e516f72fc52b810eb7f57-malewidegrippullupthumbnail.jpg',
				},
				male: {
					image:
						'https://cdni.gs.lightning-e.com/media/5c0e4717ee0147fd16ef6003-malepullupsthumbnail.jpg',
				},
				bodyAreas: [],
			},
		]

		const output = [
			{
				label: 'All',
				value: 'all',
			},
		]
		expect(getBodyAreas(input)).toEqual(output)
	})
})
