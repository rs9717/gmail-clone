import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";

function App() {
	return (
		<Router>
			<div className="app">
				<Header />

				<div className="app__body">
					<Sidebar />

					<Switch>
						<Route path="/mail">
							<Mail />
						</Route>
						<Route path="/">
							<EmailList />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
