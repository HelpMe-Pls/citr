/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export default function theme(state = "darkblue", action) {
	switch (action.type) {
		case "CHANGE_THEME":
			return action.payload;
		default:
			return state;
	}
}
