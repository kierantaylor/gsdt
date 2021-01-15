import styles from './Footer.module.scss'

const Footer = (props: any) => {
	return (
		<footer className={styles.footer}>
			This application was created apart of an interview for a Developer
			vacancy for Gymshark, created by{' '}
			<a href="https://kieran-taylor.com">Kieran Taylor.</a>
		</footer>
	)
}

export default Footer
