/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export default function changeTheme(theme) {
	return { type: "CHANGE_THEME", payload: theme };
}
