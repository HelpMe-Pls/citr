// const Pet = (props) => {
// 	return React.createElement("div", {}, [
// 		React.createElement("h2", {}, props.name),
// 		React.createElement("h3", {}, props.animal),
// 		React.createElement("h3", {}, props.breed),
// 	]);
// };

const Pet = (props) => {
	// props (or its destructured form) is only declared for intial component, not when you use it (in App)
	return (
		<div>
			<h2>{props.name}</h2>
			<h3>{props.animal}</h3>
			<h3>{props.breed}</h3>
		</div>
	);
};

export default Pet;
