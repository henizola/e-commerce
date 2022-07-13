import React from "react";
import Slider from "react-slick";
// import LeftArrow from "../../Assets/left-arrow.svg";
// import RightArrow from "../../Assets/right-arrow.svg";
import { Container, Rounded } from "./slider.styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
				<Rounded onClick={() => onClick("v.jpg")}>
					<p>Vest & Urns</p>
				</Rounded>
				<Rounded onClick={() => onClick("shirt.png")}>
					{" "}
					<p>T-shirt</p>
				</Rounded>
				<Rounded onClick={() => onClick("throuser.png")}>
					{" "}
					<p>Trousers</p>
				</Rounded>
				<Rounded onClick={() => onClick("jacket.png")}>
					{" "}
					<p>Jackets</p>
				</Rounded>
				<Rounded onClick={() => onClick("shoes.png")}>
					{" "}
					<p>Shoes</p>
				</Rounded>
				<Rounded onClick={() => onClick("swim.png")}>
					{" "}
					<p>Swimming suits </p>
				</Rounded>
				<Rounded onClick={() => onClick("v.jpg")}>
					<p>Vest & Urns</p>
				</Rounded>
				<Rounded onClick={() => onClick("shirt.png")}>
					{" "}
					<p>T-shirt</p>
				</Rounded>
				<Rounded onClick={() => onClick("throuser.png")}>
					{" "}
					<p>Trousers</p>
				</Rounded>
				<Rounded onClick={() => onClick("jacket.png")}>
					{" "}
					<p>Jackets</p>
				</Rounded>
				<Rounded onClick={() => onClick("shoes.png")}>
					{" "}
					<p>Shoes</p>
				</Rounded>
				<Rounded onClick={() => onClick("swim.png")}>
					{" "}
					<p>Swimming suits </p>
				</Rounded>
			</Slider>
		</Container>
	);
}
