import React, { useEffect } from "react";
import Card from "../../components/shop/card/Card";
import CustomSlider from "../../components/Slider/slider.component";
import "./Shop.css";
import { apiFetch } from "../../api/ApiCall";
import { useState } from "react";
import { products } from "../../data/data";

const Shop = () => {
	const [items, setItems] = useState([]);
	const [filter, setFilter] = useState("");

	useEffect(() => {
		getProducts();
	}, []);
	const onClick = (fill) => {
		setFilter(fill);
		fill === "all"
			? setItems(products)
			: setItems(products.filter((prod) => prod.type === fill));
	};

	const getProducts = () => {
		apiFetch(
			"get",
			"/product/",
			(data) => {
				// console.log(data);
				setItems([...data]);
			},
			(err) => {
				console.log(err);
			}
		);
	};
	return (
		<div>
			<div className='container-fluid'>
				<div className='catagories'>
					<CustomSlider onClick={onClick} />
				</div>
				<div className='row'>
					{items.map((item) => (
						<div className='col-4' key={item.id} style={{ minWidth: "400px" }}>
							{/* card */}
							<Card item={item} />
							{/* card */}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Shop;
