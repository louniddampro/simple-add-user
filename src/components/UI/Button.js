import { useState } from "react"
import styles from "./Button.module.css"

const Button = ({color, backgroundColor, onClick, text }) => {

	return(
		<button
		onClick={onClick}
		className={styles.button}
		style={{
			color: color,
			backgroundColor: backgroundColor
		}}
		>
			{text}
		</button>
	)
}

export default Button