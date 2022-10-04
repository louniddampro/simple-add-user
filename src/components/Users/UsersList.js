import styles from "./UsersList.module.css"
import Button from "../UI/Button"
import { useState } from "react"
const UsersList = (props) => {
	const {usersData, removeUser} = props

	const [test, setTest] = useState(true)

	return(
		<div className={styles.users}>
			<ul>
				{
					usersData.map((item, index) => (<li key={index}>{`${item.name} (${item.age} years)`} <Button onClick={() => {{removeUser(item.name); setTest(!test)}}} text="Delete" /></li>))
				}
			</ul>
		</div>
	)
}

export default UsersList