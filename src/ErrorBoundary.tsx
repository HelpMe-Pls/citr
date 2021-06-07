import { Component, ErrorInfo, ReactNode } from "react";
import { Link, Redirect } from "react-router-dom";


class ErrorBoundary extends Component {
	state = { hasError: false, redirect: false };
	static getDerivedStateFromError(): { hasError: boolean, redirect: boolean } {
		return { hasError: true, redirect: false };
	}
	componentDidCatch(error: Error, info: ErrorInfo): void {
		console.error("ErrorBoundary caught an error", error, info);
		setTimeout(() => this.setState({ redirect: true }), 3000);
	}

	render(): ReactNode {
		if (this.state.redirect) {
			return <Redirect to="/" />;
		} else if (this.state.hasError) {
			return (
				<h2>
					This listing has an error :P <Link to="/">Click here </Link> to go
					back to HomePage or wait 3s
				</h2>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;

{
	/* <ErrorBoundary>
	whatever in here is the {children} from render's return, to show this up if there's no error  
</ErrorBoundary>; */
}
