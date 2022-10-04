import { useState } from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import InputField from "../UI/InputField";
import styles from "./AddUser.module.css";

const AddUser = (props) => {

	//props
	const {onAddUser} = props
	//states
	const [modalContent, setModalContent] = useState("")
	const [user, setUser] = useState({
		name: "",
		age: ""
	})
	const [isValid, setIsvalid] = useState(true)

	//Methods
	const handleSubmitUser = () => {
		if (user.name.trim().length === 0){
			setModalContent("Enter a valid name")
			setIsvalid(false)
			return
		}
		if (typeof user.age === "string" && user.age.trim().length === 0){
			setModalContent("Enter a valid age")
			setIsvalid(false)
			return
		}
		if (user.age < 0 || user.age === 0 || user.age > 90){
			setModalContent("Enter a valid age")
			setIsvalid(false)
			return
		}

		onAddUser(user.name, user.age)

		setUser({
			name: "",
			age: ""
		})
	}

	return(
		<div className={styles.input}>
			
			<InputField
			label="Username"
			type="text"
			value={user.name}
			onChange={(e) => setUser(prevState => {
				return {...prevState, name: e.target.value}
			})} />

			<InputField
			label="Age (Years)"
			type="number"
			value={user.age}
			min="0.00"
			onChange={(e) => setUser(prevState => {
				return {...prevState, age: parseInt(e.target.value)}
			})} />

			<Button onClick={handleSubmitUser} text="Add user" />
			
			{!isValid && <ErrorModal
			title="Error"
			content={modalContent}
			toggleValid={setIsvalid} />}			
		</div>
	)
}

export default AddUser