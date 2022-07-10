import React, { Component } from "react";
import "./AdvertCard.css";

export default class AdvertCard extends Component {
	render() {
		return (
			<div className='col-12 col-md-6 my-4'>
				<div className='card bg-transparent banner_cards'>
					<img src={this.props.banner.image} alt='' className='img-fluid ad' />
				</div>
			</div>
		);
	}
}
