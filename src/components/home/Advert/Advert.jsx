import React, { Component } from "react";
import AdvertCard from "../advert-card/AdvertCard";
import BannerCard from "../bannerCard/BannerCard";

export default class Advert extends Component {
	constructor() {
		super();
		this.state = {
			banners: [
				{
					id: 1,
					image: "/images/ad1.jpeg",
					name: "WHAT THE PAPERS SAID",
					btnText: "Read It Now",
				},
				{
					id: 2,
					image: "/images/ad2.jpeg",
					name: "GENIUS IS BORN CRAZY",
					btnText: "Discover the campaign",
				},
			],
		};
	}

	render() {
		return (
			<div className='banner_section bg-dark-gray py-5'>
				<div className=''>
					<div className='row'>
						{this.state.banners.map((banner) => (
							<AdvertCard key={banner.id} banner={banner} />
						))}
					</div>
				</div>
			</div>
		);
	}
}
