import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

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
		<div>
			<h1 id="cặc">Adopt Me</h1>
			<SearchParams />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
