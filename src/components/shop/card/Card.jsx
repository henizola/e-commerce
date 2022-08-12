import React from "react";
import { Link } from "react-router-dom";
import { IMAGEENDPOINT } from "../../../api/Api";
const Card = ({ item }) => {
	console.log("this is itme", item);
	return (
		<Link to={`/product-detail/${item.id}`} style={{ textDecoration: "none" }}>
			<div className='d-flex justify-content-center align-items-center flex-column'>
				<img
					src={`${IMAGEENDPOINT}${item.thumbnail}`}
					alt=''
					className='shopImageMain'
				/>

				<h2 className='product_name_shop'>{item.productName}</h2>
				{/* <h4 className='product_name2_shop'>{item.catagories}</h4> */}
				<div>
					<div className='inline text-center text-light'>
						<div>
							{/* <img
								src={`${IMAGEENDPOINT}${item.types[0].images[0].url}`}
								height='100px'
								width='100px'
								alt='colors'
								className='alt-imgs'
							/> */}
							<br />
							{/* {item.types[0].images[0].name} */}
						</div>
					</div>
					{item.images.slice(0, 3).map((item) => (
						<div className='inline text-center text-light'>
							<div>
								<img
									src={`${IMAGEENDPOINT}${item.url}`}
									height='100px'
									width='100px'
									alt='colors'
									className='alt-imgs'
								/>
								<br />
								{item.name}
							</div>
						</div>
					))}
				</div>
				<ul className='shopul'>
					Sizes:
					{item.sizes.map((siz) => (
						<li
						// className={`${siz.qty > 0 ? "" : "not"}`}
						>
							{siz}
						</li>
					))}
				</ul>
				<h3 className='shop_price'>EUR {item.price} €</h3>
			</div>
		</Link>
	);
};

export default Card;
