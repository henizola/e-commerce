import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { useDispatch } from "react-redux";
import {
	decreaseQuantity,
	increaseQuantity,
	removeFromCart,
} from "../../store/cart";
import { CartProduct } from "./cart.styles";

const CartItem = ({ product, toggleDrawer }) => {
	const dispatch = useDispatch();

	return (
		<CartProduct>
			<Grid container spacing={5}>
				<Grid item xs={4} lg={4} style={{ padding: "0!important" }}>
					<img
						src={product.image}
						alt={product.name}
						className='cartProductImage'
						onClick={() => toggleDrawer("right", true)}
					/>
				</Grid>
				<Grid
					item
					xs={5}
					lg={5}
					style={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					<div>
						<p>{product.name}</p>
						<p>{product.description}</p>
					</div>

					<p>
						${" "}
						{product.price.toLocaleString(undefined, {
							maximumFractionDigits: 2,
						})}
					</p>
				</Grid>
				<Grid item xs={3} lg={3}>
					<button
						className='remove'
						onClick={() => dispatch(removeFromCart(product))}
					>
						x
					</button>
					<div className='quant'>
						<button
							className='remove'
							onClick={() => dispatch(decreaseQuantity(product.id))}
						>
							-
						</button>
						<p>{product.quantity}</p>
						<button
							className='remove'
							onClick={() => dispatch(increaseQuantity(product.id))}
						>
							+
						</button>
					</div>
				</Grid>
			</Grid>
			<Divider style={{ marginTop: "30px", borderColor: "#fff" }} />
		</CartProduct>
	);
};

export default CartItem;
