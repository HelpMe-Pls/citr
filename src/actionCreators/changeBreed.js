/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export default function changeBreed(breed) {
	return { type: "CHANGE_BREED", payload: breed };
}
