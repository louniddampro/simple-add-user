import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {

	//States
	const [usersList, setUsersList] = useState([])

	//Methods
	const handleSubmitUser = (name, age) => {
		setUsersList( prevState => ([...prevState, {name: name, age: age}]))
	}

	const handleRemoveUserFromList = (value) => {
		const index = usersList.findIndex(person => (person.name === value));
		if (index > -1) 
			usersList.splice(index, 1);

		setUsersList(usersList)
	}

  return (
	<div>
		<AddUser onAddUser={handleSubmitUser} />
		<UsersList usersData={usersList} removeUser={handleRemoveUserFromList} />
	</div>
);
}

export default App;
