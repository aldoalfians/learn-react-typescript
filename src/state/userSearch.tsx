import React, { useState } from "react";

const users = [
	{ name: "Aldo", age: 19 },
	{ name: "Cepot", age: 20 },
	{ name: "Cukil", age: 43 },
	{ name: "Tejo", age: 32 },
	{ name: "Gosong", age: 54 },
];

const UserSearch: React.FC = () => {
	const [nameInput, setNameInput] = useState("");
	const [userInput, setUserInput] = useState<
		{ name: string; age: number } | undefined
	>();

	const clickedHandler = () => {
		const foundUsers = users.find((user) => {
			return user.name === nameInput;
		});
		setUserInput(foundUsers);
	};

	return (
		<div>
			<h3>User Search</h3>
			<input
				value={nameInput}
				onChange={(e) => setNameInput(e.target.value)}
				placeholder="Please entered your name"
			/>
			<button onClick={clickedHandler}>Search</button>
			<div>
				{userInput?.name}
				<br />
				{userInput?.age}
			</div>
		</div>
	);
};

export default UserSearch;
