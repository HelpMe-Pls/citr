import { useState, useEffect } from "react";
import { Animal, BreedListAPIResponse } from "./APIResponseTypes"

const localCache: {
	[index: string]: string[]
} = {};

type Status = "unloaded" | "loading" | "loaded"

export default function useBreedList(animal: Animal): [string[], Status] {
	const [breedList, setBreedList] = useState([] as string[]);
	const [status, setStatus] = useState("unloaded" as Status);

	useEffect(() => {
		if (!animal) setBreedList([]);
		else if (localCache[animal]) {
			setBreedList(localCache[animal]);
		} else void requestBreedList(); 	// for es-lint to ignore promise

		async function requestBreedList() {
			setBreedList([]); // to make sure it's empty to ready for the incoming content
			setStatus("loading");
			const res = await fetch(
				`http://pets-v2.dev-apis.com/breeds?animal=${animal}`
			);
			const json = (await res.json()) as BreedListAPIResponse;
			localCache[animal] = json.breeds || [];
			setBreedList(localCache[animal]);
			setStatus("loaded");
		}
	}, [animal]);
	return [breedList, status]; //explain why are we returning these ?
}
