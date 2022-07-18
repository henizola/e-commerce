import React, { Component } from "react";
import BannerCard from "../bannerCard/BannerCard";

export default class BannerList extends Component {
	constructor() {
		super();
		this.state = {
			banners: [
				{
					id: 1,
					image: "/images/Blog/blog1.jpeg",
					name: "Go green: sustainability and the future of shopping",
					btnText: "Read It Now",
					link: "/blog#1",
				},
				{
					id: 2,
					image: "/images/Blog/blog2.jpeg",
					name: "How to connect with digital-only customers",
					btnText: "Read It Now",
					link: "/blog#2",
				},
			],
		};
	}

	render() {
		return (
			<div className='banner_section bg-dark-gray py-5'>
				<div className='container'>
					<div className='row'>
						{this.state.banners.map((banner) => (
							<BannerCard key={banner.id} banner={banner} />
						))}
					</div>
				</div>
			</div>
		);
	}
}
