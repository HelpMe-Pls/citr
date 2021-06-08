import { Component, MouseEvent, ReactNode } from "react";

interface IProps {
	images: string[];
}
class Carousel extends Component<IProps> {
	state = {
		active: 0,
	};
	static defaultProps = {
		// so that it's callable for abstract class (Carousel.defaultProps)
		images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
	};

	handleIndexClick = (event: MouseEvent<HTMLElement>): void => {
		if (!(event.target instanceof HTMLElement)) {
			return;
		}

		if (event.target.dataset.index) {
			this.setState({
				active: +event.target.dataset.index,
			});
		}
	};

	render(): ReactNode {
		const { active } = this.state;
		const { images } = this.props;
		return (
			<div className="carousel">
				<img src={images[active]} data-testid="hero" alt="animal" />
				<div className="carousel-smaller">
					{images.map((photo, index) => (
						//eslint-disable-next-line
						<img
							key={photo}
							src={photo}
							data-index={index}
							data-testid={`thumbnail${index}`}
							onClick={this.handleIndexClick}
							className={index === active ? "active" : ""}
							alt="animal thumbnail"
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Carousel;
