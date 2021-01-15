import styles from './Button.module.scss'

const Button = (props: any) => {
	return (
		<button {...props} className={styles.button}>
			{props.children}
		</button>
	)
}

export default Button
