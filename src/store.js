/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(
	reducer,
	typeof window === "object" &&
		typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== undefined
		? window.__REDUX_DEVTOOLS_EXTENSION__()
		: (f) => f
);

export default store;
