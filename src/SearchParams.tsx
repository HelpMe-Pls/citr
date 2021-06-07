import { useState, useEffect, useContext } from "react";

import ThemeContext from "./ThemeContext";
import useBreedList from "./useBreedList";
import Results from "./Results";
import { PetAPIResponse, Animal, Pet } from "./APIResponseTypes"


const ANIMALS: Animal[] = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams: React.FC = () => {
	const [location, updateLocation] = useState("");
	const [animal, updateAnimal] = useState("" as Animal);
	const [breed, updateBreed] = useState("");
	const [pets, setPets] = useState([] as Pet[]);
	const [breeds] = useBreedList(animal); //why React understands [breeds] eventho the hook's return statement is [breedList,status] ?
	const [theme, setTheme] = useContext(ThemeContext);

	useEffect(() => {
		void requestPets();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	async function requestPets() {
		const res = await fetch(
			`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
		);
		const json = (await res.json()) as PetAPIResponse;
		console.log(json);
		setPets(json.pets);
	}

	return (
		<div className="search-params">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					void requestPets();
				}}
			>
				<label htmlFor="location">
					Location
					<input
						id="location"
						value={location.toUpperCase()}
						placeholder="Location"
						onChange={(e) => updateLocation(e.target.value)}
					/>
				</label>
				<label htmlFor="animal">
					Animal
					<select
						id="animal"
						value={animal}
						onChange={(e) => updateAnimal(e.target.value as Animal)}
						onBlur={(e) => updateAnimal(e.target.value as Animal)}
					>
						<option /> {/* Blank option at first render */}
						{ANIMALS.map((animal) => (
							<option value={animal} key={animal}>
								{animal}
							</option>
						))}
					</select>
				</label>
				<label htmlFor="breed">
					Breed
					<select
						id="breed"
						value={breed}
						onChange={(e) => updateBreed(e.target.value)}
						onBlur={(e) => updateBreed(e.target.value)}
					>
						<option /> {/* Blank option at first render */}
						{breeds.map((breed) => (
							<option value={breed} key={breed}>
								{breed}
							</option>
						))}
					</select>
				</label>
				<label htmlFor="theme">
					Theme
					<select
						value={theme}
						onChange={(e) => setTheme(e.target.value)}
						onBlur={(e) => setTheme(e.target.value)}
					>
						<option value="darkblue">Dark Blue</option>
						<option value="peru">Peru</option>
						<option value="chartreuse">Chartreuse</option>
						<option value="mediumorchid">Medium Orchid</option>
					</select>
				</label>
				<button style={{ backgroundColor: theme }}>Submit</button>
				{/* object inside an expression */}
			</form>
			<Results pets={pets} />
		</div>
	);
};

export default SearchParams;
