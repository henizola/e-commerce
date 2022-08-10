import { Divider, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import { IoChevronBack } from "react-icons/io5";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrice } from "../../store/cart";
import Input from "../../views/membership/components/textfield/input";
import InputGroup from "../../views/membership/components/textfield/input-group";
import CartItem from "../Cart-Drawer/CartProduct.component";
import BpCheckbox from "../custom-checkbox/custom-checkbox.component";
import { Container } from "./checkout.styles";
import { Form } from "./checkout.styles";

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
							<h2>Contact and Shipping Address</h2>
							<Form className='form-cont'>
								<InputGroup>
									<label htmlFor='firstName'>First Name</label>
									<Input
										type='text'
										placeholder='First Name'
										id='firstName'
										onChange={(e) => {
											// setFirstName(e.target.value);
										}}
									/>
									{/* <ErrorDisplay> {error["firstName"]}</ErrorDisplay> */}
								</InputGroup>
								<InputGroup>
									<label htmlFor='lastName'>Last Name</label>
									<Input
										type='text'
										placeholder='Last Name'
										id='lastName'
										onChange={(e) => {
											// setLastName(e.target.value);
										}}
									/>
									{/* <ErrorDisplay> {error["lastName"]}</ErrorDisplay> */}
								</InputGroup>
								<InputGroup>
									<label htmlFor='telPhone'>TelePhone</label>
									<Input
										type='tel'
										placeholder='Phone'
										id='telPhone'
										onChange={(e) => {
											// setPhone(e.target.value);
										}}
									/>
									{/* <ErrorDisplay> {error["phone"]}</ErrorDisplay> */}
								</InputGroup>
								<InputGroup>
									<label htmlFor='email'>Email Address</label>
									<Input
										type='email'
										placeholder='Email'
										id='email'
										onChange={(e) => {
											// setEmail(e.target.value);
										}}
									/>
									{/* <ErrorDisplay> {error["email"]}</ErrorDisplay> */}
								</InputGroup>
								<InputGroup>
									<label htmlFor='password'>Address 1</label>
									<Input
										type='text'
										placeholder='Address 1'
										id='password'
										onChange={(e) => {
											// setPassword(e.target.value);
										}}
									/>
									{/* <ErrorDisplay> {error["password"]}</ErrorDisplay> */}
								</InputGroup>
								<InputGroup>
									<label htmlFor='password'>Address 2</label>
									<Input
										type='text'
										placeholder='Address 2'
										id='password'
										onChange={(e) => {
											// setPassword(e.target.value);
										}}
									/>
									{/* <ErrorDisplay> {error["password"]}</ErrorDisplay> */}
								</InputGroup>
							</Form>
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
								to='/shop'
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
