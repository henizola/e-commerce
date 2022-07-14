import React, { Component } from "react";
import "./Shop.css";
import Card from "../../components/shop/card/Card";
import CustomSlider from "../../components/Slider/slider.component";
class Shop extends Component {
	constructor() {
		super();
		this.state = {
			items: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
			filter: "",
		};
	}

	render() {
		const onClick = (fill) => {
			this.setState({ filter: fill });
		};

		return (
			<div>
				<div className='container-fluid'>
					<div className='catagories'>
						<CustomSlider onClick={onClick} />
					</div>
					<div className='row'  >
						{this.state.items.map((item) => (
							<div className='col-4'  key={item.id} style={{minWidth:'400px'}}>
								{/* card */}
								<Card filter={this.state.filter} />
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
