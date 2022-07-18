import React, { Component } from "react";
import "./Shop.css";
import Card from "../../components/shop/card/Card";
import CustomSlider from "../../components/Slider/slider.component";

import { products } from "../../data/data";

class Shop extends Component {
	constructor() {
		super();
		this.state = {
			items: products,
			filter: "",
		};
	}

	render() {
		const onClick = (fill) => {
			this.setState({ filter: fill });

			fill === "all"
				? this.setState({ items: products })
				: this.setState({
						items: products.filter((prod) => prod.type === fill),
				  });
		};

		return (
			<div>
				<div className='container-fluid'>
					<div className='catagories'>
						<CustomSlider onClick={onClick} />
					</div>
					<div className='row'>
						{this.state.items.map((item) => (
							<div
								className='col-4'
								key={item.id}
								style={{ minWidth: "400px" }}
							>
								{/* card */}
								<Card item={item} />
								{/* card */}
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default Shop;
