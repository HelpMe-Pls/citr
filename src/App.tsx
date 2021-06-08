/* eslint-disable import/namespace */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from 'react-redux'
import store from "./store"
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

// Vanilla React
// const App = () => {
// 	return React.createElement("div", {}, [
// 		React.createElement(
// 			"h1",
// 			{
// 				id: "cặc", // inside of the curly braces are the attr like id, className, style...
// 			},
// 			"Adopt Me"
// 		), // the last param is the content for the element
// 		React.createElement(Pet, {
// 			name: "Luna",
// 			animal: "Dog",
// 			breed: "Havanese",
// 		}),
// 		React.createElement(Pet, { name: "Pepper", animal: "Bird", breed: "Cock" }),
// 		React.createElement(Pet, {
// 			name: "Misen",
// 			animal: "Cat",
// 			breed: "Cặc",
// 		}),
// 	]);
// };

const App = () => {

	return (
		<Provider store={store}>
			<div>
				<Router>
					<header>
						<Link to="/">
							<h1 id="cặc">Adopt Me</h1>
						</Link>
					</header>
					<Switch>
						{/* Switch will render either one of the Route, if there's no Switch, it will render all of the Routes top-down */}
						<Route exact path="/">
							{/* if there's no {exact}, <Details/> will not rendered coz its path pattern matches with the <SearchParams/> first
					so it'll render <SearchParam/> instead */}
							<SearchParams />
						</Route>
						<Route path="/details/:id">
							<Details />
						</Route>
					</Switch>
				</Router>
			</div>
		</Provider>
	);
};

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById("root")
);
