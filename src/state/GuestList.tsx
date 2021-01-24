import React, { useState } from "react";

const GuestList: React.FC = () => {
	const [name, setName] = useState("");
	const [guest, setGuest] = useState<string[]>([]);

	const onClickGuest = () => {
		setName("");
		// setGuest([...guest, name]); // sebelum ditambahkan useState<string[]> maka ERROR menjadi var guest: never[];
		setGuest([...guest, name]);
	};

	return (
		<div>
			<h1>Hello Guest</h1>
			<ul>
				{guest.map((guest) => (
					<li key={guest}>{guest}</li>
				))}
			</ul>
			<input
				value={name}
				onChange={(event) => setName(event.target.value)}
			/>
			<button onClick={onClickGuest}>Add Guest</button>
		</div>
	);
};

export default GuestList;
