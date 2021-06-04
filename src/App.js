import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

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
	const themeHook = useState("darkblue"); // why useState here ? maybe to update the theme if user changes to another theme ? or maybe that's just how useContext works ?
	// the {themeHook} got stored in Context so that after the user chose the desired theme, they switch back and forth between HomePage and DetailsPage, the button's color stays
	// other states like {animal}, {breed} isn't stored so when the user chose an {animal}, and go to one of the <Details/>, then go back to HomePage, it's cleared
	return (
		<ThemeContext.Provider value={themeHook}>
			{/* value={["darkblue"]} */}
			{/* theme affects EVERY components */}
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
		</ThemeContext.Provider>
	);
};

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById("root")
);
