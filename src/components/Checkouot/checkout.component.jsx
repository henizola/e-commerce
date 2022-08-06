import { Divider, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import { IoChevronBack } from "react-icons/io5";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../../store/cart";
import CartItem from "../Cart-Drawer/CartProduct.component";
import BpCheckbox from "../custom-checkbox/custom-checkbox.component";
import { Container } from "./checkout.styles";
import React from "react";
import { Link } from "react-router-dom";
const Checkout = () => {
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
							className='card contact'
						>
							<h5 style={{ paddingTop: "20px" }}>Contact Information</h5>
							<TextField
								label='Email or Phone Number'
								id='outlined-size-small'
								defaultValue=''
								size='small'
							/>
							<div style={{ paddingTop: "20px" }}>
								<h5>Shipping Address</h5>
								<div className='tow-by-two'>
									<TextField
										label='First Name'
										id='outlined-size-small'
										defaultValue=''
										size='small'
									/>
									<TextField
										label='Last Name'
										id='outlined-size-small'
										defaultValue=''
										size='small'
									/>
								</div>
							</div>
							<TextField
								label='Address Line !'
								id='outlined-size-small'
								defaultValue=''
								size='small'
								style={{ marginTop: "15px" }}
							/>{" "}
							<TextField
								label='Address Line 2'
								id='outlined-size-small'
								defaultValue=''
								size='small'
								style={{ marginTop: "15px" }}
							/>{" "}
							<TextField
								label='City / Town'
								id='outlined-size-small'
								defaultValue=''
								size='small'
								style={{ marginTop: "15px" }}
							/>
							<div className='tow-by-two' style={{ marginTop: "15px" }}>
								<TextField
									label='Country'
									id='outlined-size-small'
									defaultValue=''
									size='small'
								/>
								<TextField
									label='POSTAL/ZIP'
									id='outlined-size-small'
									defaultValue=''
									size='small'
								/>
							</div>
						</Grid>{" "}
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "40px 1fr",
								marginLeft: "-40px",
								paddingTop: "20px",
							}}
						>
							<BpCheckbox /> <p>save this information for next time</p>
						</div>
						<div
							className='price'
							style={{
								marginTop: "10px",
								display: "flex",
								marginLeft: "0",
								paddingLeft: "0",
								justifyContent: "space-between",
								maxWidth: "330px",
							}}
						>
							<Link
								style={{
									marginLeft: "-20px",
									cursor: "pointer",
								}}
								className='checkout'
								to='/'
							>
								{/* <IoChevronBack /> */}
								RETURN TO CART{" "}
							</Link>
							<Link className='checkout' to='/summary'>
								Compolete Order
							</Link>
						</div>
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
							{cart.map((prod, index) => (
								<Grid
									item
									xs={12}
									lg={12}
									key={index}
									style={{ height: "150px", width: "70%!important" }}
								>
									<CartItem product={prod} />
								</Grid>
							))}
							<div className='price'>
								<div className='inside'>
									<h3>Price</h3>
									<h4>$ {getTotalPrice(cart)}</h4>
									<h3 style={{ marginTop: "0" }}>Shipping</h3>
									<h4 style={{ marginTop: "0" }}>$ {50}</h4>
								</div>

								<Divider />
								<div className='inside'>
									<h3 style={{ marginTop: "15px" }}>Total</h3>
									<h4 style={{ marginTop: "15px" }}>$ {getTotalPrice(cart)}</h4>
								</div>
							</div>
						</Grid>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Checkout;
