interface ChildProps {
	color: string;
	onClick: () => void;
}

// Ini yang seperti biasanya props mengimplementasikan dari interface
// export const Child = (props: ChildProps) => {
// 	return <h1>{props.color}</h1>;
// };
//========================

// Dan disini menggunakan destructur object props digatni nama property yg ada didalem interface
export const Child = ({ color, onClick }: ChildProps) => {
	return (
		<div>
			<h1>{color}</h1>
			<button onClick={onClick}>Click me</button>
		</div>
	);
};
// sisi buruknya kalo begini typescript tidak mngerti untuk mendfnisikan React-component
// Noted tidak bisa menggunakan children porperty
// ======

// Nah untuk menggunakan function component kita harus mendeclare dlu yaitu React.Fc sebagai functional component
// this way
export const Child2: React.FC<ChildProps> = ({ color, onClick, children }) => {
	return (
		<div>
			<h1>{color}</h1>
			{children}
			<button onClick={onClick}>Clicked</button>
		</div>
	);
};
// noted untuk children property tidak usah menambahkan di interface karena sudah bawaan dari react.fc
