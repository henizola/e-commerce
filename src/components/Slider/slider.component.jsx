import React from "react";
import Slider from "react-slick";
import { Container, Rounded } from "./slider.styles";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
export default function CustomSlider({ onClick }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		autoplay: true,
		slidesToShow: 7,
		slidesToScroll: 1,
		initialSlide: 0,
		arrows: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<Container>
			<Slider {...settings} className='card__container--inner'>
				<Rounded onClick={() => onClick("all")}>
					<p>All</p>
				</Rounded>
				<Rounded onClick={() => onClick("shoes")}>
					<p>Shoes</p>
				</Rounded>
				<Rounded onClick={() => onClick("cloth")}>
					{" "}
					<p>Clothes </p>
				</Rounded>
				<Rounded onClick={() => onClick("watch")}>
					{" "}
					<p>Watches</p>
				</Rounded>
				<Rounded onClick={() => onClick("book")}>
					{" "}
					<p>Books</p>
				</Rounded>
				<Rounded onClick={() => onClick("glass")}>
					{" "}
					<p>Glasses</p>
				</Rounded>
				<Rounded onClick={() => onClick("pot")}>
					{" "}
					<p>Pots </p>
				</Rounded>
				<Rounded onClick={() => onClick("all")}>
					<p>All</p>
				</Rounded>
				<Rounded onClick={() => onClick("shoes")}>
					<p>Shoes</p>
				</Rounded>
				<Rounded onClick={() => onClick("cloth")}>
					{" "}
					<p>Clothes </p>
				</Rounded>
				<Rounded onClick={() => onClick("watch")}>
					{" "}
					<p>Watches</p>
				</Rounded>
				<Rounded onClick={() => onClick("book")}>
					{" "}
					<p>Books</p>
				</Rounded>
				<Rounded onClick={() => onClick("glass")}>
					{" "}
					<p>Glasses</p>
				</Rounded>
				<Rounded onClick={() => onClick("pot")}>
					{" "}
					<p>Pots </p>
				</Rounded>
			</Slider>
		</Container>
	);
}
