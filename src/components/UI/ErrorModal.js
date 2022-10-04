import styles from "./ErrorModal.module.css"
import Button from "./Button"
import ReactDOM  from "react-dom"
import React from "react"

const ErrorModalContent = (props) => {

	const {title, content, toggleValid} = props

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

const ErrorModal = ({title, content, toggleValid}) => {

	return(
		<React.Fragment>
			{ReactDOM.createPortal(
			<ErrorModalContent content={content} title={title} toggleValid={(bool) => {toggleValid(bool)}}/>,
			document.getElementById('modal')
			)}
		</React.Fragment>
	)
}
export default ErrorModal