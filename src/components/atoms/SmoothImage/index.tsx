import React, { useState } from 'react'
import LoadingSpinner from '../LoadingSpinner'
import styles from './SmoothImage.module.scss'

interface IProps {
	src: string
	alt: string
	className?: string
}

const SmoothImage = (props: IProps) => {
	const [imageLoaded, setImageLoaded] = useState(false)

	return (
		<React.Fragment>
			<img
				src={props.src}
				alt={props.alt}
				className={`${props.className ? props.className : ' '} ${
					styles.smoothImage
				} ${imageLoaded ? styles.imageVisible : styles.imageHidden}`}
				onLoad={() => setImageLoaded(true)}
			/>
			{!imageLoaded && <LoadingSpinner />}
		</React.Fragment>
	)
}

export default SmoothImage
