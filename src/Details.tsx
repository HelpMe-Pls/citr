import { Component, FunctionComponent } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";
import { PetAPIResponse, Animal } from "./APIResponseTypes"

class Details extends Component<RouteComponentProps<{ id: string }>> {
	state = {
		loading: true,
		showModal: false,
		animal: "" as Animal,
		breed: "",
		city: "",
		state: "",
		description: "",
		name: "",
		images: [] as string[]
	};
	async componentDidMount() {
		const res = await fetch(
			`http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
		);
		const json = (await res.json()) as PetAPIResponse;
		this.setState(
			Object.assign(
				{
					loading: false,
				},
				json.pets[0]
			)
		);
		// if you're not using Object.assign():
		// this. setState(
		//     {
		//         loading: false,
		//         name: json.pets[0].name,
		//         breed: json.pets[0].breed,
		//         animal: json.pets[0].animal,
		//         ...
		//     }
		// )
	}

	toggleModal = () => this.setState({ showModal: !this.state.showModal });
	adopt = () => (window.location.href = "http://bit.ly/pet-adopt");

	render() {
		//throw new Error("cặc"); 	//to see if it works
		if (this.state.loading) {
			return <h2>loading...</h2>;
		}
		const { animal, breed, city, state, description, name, images, showModal } =
			this.state;

		return (
			<div className="details">
				<Carousel images={images} />
				<div>
					<h1>{name}</h1>
					<h2>
						{animal} - {breed} - {city}, {state}
					</h2>
					<ThemeContext.Consumer>
						{(theme) => (
							<button
								style={{ backgroundColor: theme[0] }}
								onClick={this.toggleModal}
							>
								Adopt {name}
							</button>
						)}
					</ThemeContext.Consumer>
					<p>{description}</p>
					{showModal ? (
						<Modal>
							<div>
								<h1>
									Would you like to adopt {name} ?
									<div className="buttons">
										<button onClick={this.adopt}>Yes</button>
										<button onClick={this.toggleModal}>No</button>
									</div>
								</h1>
							</div>
						</Modal>
					) : null}
				</div>
			</div>
		);
	}
}

const DetailsWithRouter = withRouter(Details);

const DetailsErrorBoundary: FunctionComponent = function DetailsErrorBoundary() {
	return (
		<ErrorBoundary>
			<DetailsWithRouter />
		</ErrorBoundary>
	);
}


export default DetailsErrorBoundary;
