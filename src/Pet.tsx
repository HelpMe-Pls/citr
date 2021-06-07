import { Link } from "react-router-dom";

interface IProps {
	name: string,
	animal: string,
	breed: string,
	images: string[],
	location: string,
	id: number
}

const Pet: React.FC<IProps> = ({ name, animal, breed, images, location, id }) => {
	// props (or its destructured form) is only declared for intial component, not when you use it (in App)
	let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
	if (images.length) {
		hero = images[0];
	}
	return (
		<Link to={`/details/${id}`} className="pet">
			{" "}
			{/* Using Link here is for the sake of SPA, otherwise using <a> tag it'll reload the page */}
			<div className="image-container">
				<img src={hero} alt={name} />
			</div>
			<div className="info">
				<h1>{name}</h1>
				<h2>{`${animal} - ${breed} - ${location}`}</h2>
			</div>
		</Link>
	);
};

export default Pet;
