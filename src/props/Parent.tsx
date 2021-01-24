import React from "react";
import { Child, Child2 } from "./Child";

// Nah stelah disini kita panggil yang kita buat di component child yaitu property color typenya "string"
// <Child color="red"/>
const Parent: React.FC = () => {
	return (
		<div>
			<Child color="red" onClick={() => console.log("Text Red")} /> 
			<Child2
				color="blue"
				onClick={() => console.log("Text Blue")}
				children="Aldo"
			></Child2>
		</div>
	);
};

export default Parent;
