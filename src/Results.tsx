import Pet from "./Pet";
import { Pet as PetType } from "./APIResponseTypes"

const Results: React.FC<{ pets: PetType[] }> = ({ pets }) => {
	return (
		<div className="search">
			{!pets.length ? (
				<h2>No pets found :P</h2>
			) : (
				pets.map((pet) => (
					<Pet
						name={pet.name}
						animal={pet.animal}
						breed={pet.breed}
						key={pet.id}
						images={pet.images}
						location={`${pet.city}, ${pet.state}`}
						id={pet.id}
					/>
				))
			)}
		</div>
	);
};

export default Results;
