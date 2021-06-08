/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export default function changeLocation(location) {
	return { type: "CHANGE_LOCATION", payload: location };
}
