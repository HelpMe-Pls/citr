/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import useBreedList from "./useBreedList";
import Results from "./Results"
import { PetAPIResponse, Animal, Pet } from "./APIResponseTypes"

import changeAnimal from "./actionCreators/changeAnimal"
import changeBreed from "./actionCreators/changeBreed"
import changeLocation from "./actionCreators/changeLocation"
import changeTheme from "./actionCreators/changeTheme"



const ANIMALS: Animal[] = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams: React.FC = () => {
	const animal = useSelector((state: { animal: any; }) => state.animal)
	const location = useSelector((state: { location: any; }) => state.location)
	const theme = useSelector((state: { theme: any; }) => state.theme)
	const breed = useSelector((state: { breed: any; }) => state.breed)
	const [pets, setPets] = useState([] as Pet[]);
	const [breeds] = useBreedList(animal); //why React understands [breeds] eventho the hook's return statement is [breedList,status] ?
	const dispatch = useDispatch()

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

	function handleAnimalChange(e: any) {
		dispatch(changeAnimal(e.target.value))
		dispatch(changeBreed(""))
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
						onChange={(e) => dispatch(changeLocation(e.target.value))}
					/>
				</label>
				<label htmlFor="animal">
					Animal
						<select
						id="animal"
						value={animal}
						onChange={handleAnimalChange}
						onBlur={handleAnimalChange}
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
						onChange={(e) => dispatch(changeBreed(e.target.value))}
						onBlur={(e) => dispatch(changeBreed(e.target.value))}
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
						onChange={(e) => dispatch(changeTheme(e.target.value))}
						onBlur={(e) => dispatch(changeTheme(e.target.value))}
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
}


export default SearchParams;
