/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export default function animal(state = "dog", action) {
	switch (action.type) {
		case "CHANGE_ANIMAL":
			return action.payload;
		default:
			return state;
	}
}
