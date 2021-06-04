import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
	const elRef = useRef(null); // a container for {state} that you want it to survive through render cycles and is unique to this Modal
	if (!elRef.current) {
		elRef.current = document.createElement("div"); // useRef to not create a new <div> on every render
	}

	useEffect(() => {
		modalRoot.appendChild(elRef.current);
		return () => modalRoot.removeChild(elRef.current); // cleanup the effect, preventing memory leaks
	}, []);

	return createPortal(<div>{children}</div>, elRef.current); // {children} is for this component to be put inside of a <div id="modal"> in <App/>
};

export default Modal;
