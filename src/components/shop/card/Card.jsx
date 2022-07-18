import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Card extends Component {
	state = {
		mainImage: "orange1.jpg",
		colorChoice: "orange",
	};
	render() {
		return (
			<Link
				to={`/product-detail/${this.props.item.id}`}
				style={{ textDecoration: "none" }}
			>
				<div className='d-flex justify-content-center align-items-center flex-column'>
					<img
						src={this.props.item.thumbnail}
						alt=''
						className='shopImageMain'
					/>
					<h2 className='product_name_shop'>{this.props.item.name}</h2>
					<h4 className='product_name2_shop'>{this.props.item.type}</h4>
					<div>
						<div className='inline text-center text-light'>
							<div
								onClick={() => {
									this.setState({ mainImage: "green1.jpg" });
								}}
							>
								<img
									src={this.props.item.images[0].img}
									height='100px'
									width='100px'
									alt='colors'
									className='alt-imgs'
								/>
								<br />
								{this.props.item.images[0].name}
							</div>
						</div>
						<div className='inline text-center text-light'>
							<div
								onClick={() => {
									this.setState({ mainImage: "orange1.jpg" });
								}}
							>
								<img
									src={this.props.item.images[1].img}
									height='100px'
									width='100px'
									alt='colors'
									className='alt-imgs'
								/>
								<br />
								{this.props.item.images[1].name}
							</div>
						</div>
					</div>
					<ul className='shopul'>
						<li className='not'>1</li>
						<li className='not'>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
						<li className='not'>6</li>
					</ul>
					<h3 className='shop_price'>EUR {this.props.item.price}</h3>
				</div>
			</Link>
		);
	}
}
