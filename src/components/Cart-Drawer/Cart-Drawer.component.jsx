import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { getTotalPrice } from "../../store/cart";
import { Container, Footer } from "./cart.styles";
import CartItem from "./CartProduct.component";

export default function CartDrawer({ state, toggleDrawer }) {
	// const { cart } = React.useContext(CartContext);
	// const { getTotalPrice } = React.useContext(CartContext);

	const cart = useSelector((state) => state.cart);

	// let navigate = useNavigate();

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : "55vw" }}
			role='presentation'
			style={{ backgroundColor: "black" }}
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<button
				onClick={toggleDrawer("right", false, true)}
				style={{
					float: "right",
					margin: "15px",
					backgroundColor: "transparent",
					width: "100px",
					borderRadius: "50px",
					border: "1px solid gray",
					padding: "5px 25px",
					display: "flex",
					justifyContent: "space-between",
					position: "relative",
				}}
			>
				Close
				<span>
					{" "}
					{cart.length > 0 && <span className='numbers'>{cart.length}</span>}
				</span>
			</button>
			<Container>
				<Divider />
				{cart.length === 0 && (
					<h1 style={{ margin: "100px 40%" }}>Cart Empty</h1>
				)}
				{cart.map((product, index) => (
					<CartItem product={product} toggleDrawer={toggleDrawer} key={index} />
				))}
			</Container>
			<Footer>
				<div className='price'>
					<h4>Total INCL TAX</h4>
					<h4>$ {getTotalPrice(cart)}</h4>
				</div>

				<Divider />
				<div className='controls'>
					<button
						className='outline'
						onClick={toggleDrawer("right", false, true)}
					>
						Continue Shoping
					</button>
					<Link className='checkout' to='/checkout'>
						Proccess To Checkout
					</Link>
				</div>
			</Footer>
		</Box>
	);

	return (
		<div>
			<React.Fragment>
				<Drawer
					anchor={"right"}
					open={state.right}
					onClose={toggleDrawer("right", false)}
					variant='permanent'
					style={{ display: state.right ? "block" : "none" }}
				>
					{list("right")}
				</Drawer>
			</React.Fragment>
		</div>
	);
}
