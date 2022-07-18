import React, { Component } from "react";
import "./BannerCard.css";

export default class BannerCard extends Component {
	render() {
		return (
			<div className='col-12 col-md-6 my-4'>
				<div className='card bg-transparent banner_cards'>
					<img src={this.props.banner.image} alt='' className='img-fluid' />
					<div className='card-body bg-transparent'>
						<h2>{this.props.banner.name}</h2>
						<a
							href={this.props.banner.link}
							className='btn btn-primary st_btn_secondary mt-4 '
						>
							{this.props.banner.btnText}
						</a>
					</div>
				</div>
			</div>
		);
	}
}
