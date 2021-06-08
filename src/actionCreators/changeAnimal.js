/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export default function changeAnimal(animal) {
	return { type: "CHANGE_ANIMAL", payload: animal };
}
