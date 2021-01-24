// nah untuk disini kita menangani sebuah event pada onChange Pada typeScript
const EventHandler: React.FC = () => {
	const ChangeHandlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		// pada menggunakan event function mengangibatkan sebuah Error karena parameter Any
		// cara solvednya yaitu kita declare terlebih dahulu menggunakan React.ChangeEvent<HTMLInputElement> didalem parameter e
		// correct No ERROR!!!!
		console.log(e);
	};

	const DragStart = (event: React.DragEvent<HTMLDivElement>) => {
		console.log(event);
	};
	// const DragStart = (event) => {
	// 	console.log("Im being dragged");
	// }; // ERROR!!! karena parameter event tidak di declare React.DragEvent<HTMLDivElement>

	return (
		<div>
			<input onChange={ChangeHandlerInput} />
			<input onChange={(e) => console.log(e)} />
			<div draggable onDragStart={DragStart}>
				Drag Me!
			</div>
		</div>
	);
};

export default EventHandler;
