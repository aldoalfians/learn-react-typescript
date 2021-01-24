import React, { Component } from "react";

// disini kita bisa membuat interface lagi untuk menerima interface userprops & userstate
interface User {
	name: string;
	age: number;
}

interface UserSearchProps {
	// Way 1
	// users: {
	// 	name: string;
	// 	age: number;
	// }[];
	// Way 2
	users: User[];
}

interface UserSearchState {
	name: string;
	// Way 1
	// user: { name: string; age: number } | undefined;
	// Way 2
	user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
	state: UserSearchState = {
		name: "",
		user: undefined,
	};

	clickedHandler = () => {
		const foundUsers = this.props.users.find((user) => {
			return user.name === this.state.name;
		});
		this.setState({ user: foundUsers });
	};

	render() {
		// state juda dapat di catching dengan destructuring object
		const { name, user } = this.state;
		// FYI sebelum kita catching untuk mengambil statenya harus dengan this.state.name, this.state.user.name
		return (
			<div>
				<h3>User Search</h3>
				<input
					value={name}
					onChange={(e) => this.setState({ name: e.target.value })}
					placeholder="Please entered your name"
				/>
				<button onClick={this.clickedHandler}>Search</button>
				<div>
					{user && user.name}
					<br />
					{user && user.age}
				</div>
			</div>
		);
	}
}

export default UserSearch;
