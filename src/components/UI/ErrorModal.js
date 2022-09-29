import styles from "./ErrorModal.module.css"
import Button from "./Button"

const ErrorModal = ({title, content, toggleValid}) => {

	return(
		<div className={styles.backdrop}>
			<div className={styles.modal}>
				<div className={styles.header}>
					<h2>{title}</h2>
				</div>
				<div className={styles.content}>
					<p>{content}</p>
				</div>
				<div className={styles.actions}>
					<Button
					text="Ok"
					onClick={() => toggleValid(true)}
					/>
				</div>
			</div>
		</div>
	)
}
export default ErrorModal