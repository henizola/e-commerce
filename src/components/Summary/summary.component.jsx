import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrice } from "../../store/cart";
import CartItemDetail from "../Cart-Drawer/CartProductDetail.component copy";
import { Container } from "./checkout.styles";
const Summary = () => {
	const cart = useSelector((state) => state.cart);

	return (
		<Container>
			<Grid container spacing={15}>
				<Grid item xs={5} lg={5}>
					<Box sx={{ width: "100%" }}>
						<Grid
							container
							rowSpacing={{ xs: 2, sm: 5, md: 5 }}
							columnSpacing={{ xs: 2, sm: 5, md: 5 }}
							style={{ display: "flex", flexDirection: "column" }}
						>
							<img
								src='/images/logo/logo-white.png'
								alt='like'
								className='like'
							/>
							<h3 style={{ margin: "0" }}>
								Thank You For Shoping with Cyber Image Cafe
							</h3>
							<p>your orders are on the way!</p>
							<Link className='outline' to='/'>
								Back To Shoping
							</Link>
						</Grid>
					</Box>
				</Grid>
				<Grid item xs={7} lg={7}>
					<Box sx={{ width: "100%" }}>
						<Grid
							container
							rowSpacing={{ xs: 2, sm: 5, md: 5 }}
							columnSpacing={{ xs: 2, sm: 5, md: 5 }}
							className='card'
						>
							{" "}
							<h3
								style={{
									color: "black!important",
									margin: "50px 25px",
									marginTop: "0",
								}}
							>
								Order Summary
							</h3>
							<div className='price'>
								<div className='inside'>
									<h3>Oredr Number</h3>
									<h4>543309134</h4>
									<h3 style={{ marginTop: "0" }}>EST Delivery Date</h3>

									<h4 style={{ marginTop: "0" }}>18 April , 2022</h4>
									<h3 style={{ marginTop: "0" }}>Shipping Details</h3>

									<h4 style={{ marginTop: "0" }}>
										Paul Writer <br /> Africa ANV ST ,ADDIS ABABA
										<br /> ETHIOPIA
									</h4>
								</div>
								<Divider />
								<h4
									style={{
										marginLeft: "37%",
										display: "flex",
										marginRight: "35px",
										justifyContent: "space-between",
									}}
								>
									{" "}
									<span> Total</span> <span>{getTotalPrice(cart)}</span>
								</h4>
							</div>
							{cart.map((prod, index) => (
								<Grid
									item
									xs={12}
									lg={12}
									key={index}
									style={{ height: "150px", width: "70%!important" }}
								>
									<CartItemDetail product={prod} />
								</Grid>
							))}
						</Grid>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Summary;
