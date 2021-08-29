import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import CardList from "./CardList";

function App() {
	return (
		<div className="App">
			<Nav />
			<CardList hogs={hogs} />
		</div>
	);
}

export default App;
