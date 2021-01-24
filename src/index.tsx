import ReactDOM from "react-dom";
// import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/userSearch";
import EventsComponent from "./events/eventComponent";

const App: React.FC = () => {
	return (
		<div>
			{/* <h1>Hi There</h1>
			<Parent /> */}
			<GuestList />
			<br />
			<UserSearch />
			<br />
			<EventsComponent />
			<br />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
