import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	Card,
	FormInput,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Row,
} from "shards-react";
import test from "../assets/images/undraw.png";
import logo from "../assets/images/logo.png";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { apiCall } from "../api/ApiCall";

const ForgotPassword = () => {
	const [email, setEmail] = useState("");

	const handleReset = () => {
		toast.promise(
			apiCall(
				"post",
				{ email: email },
				"/user/forgot-password",
				onSuccess,
				onFaileure
			),
			{
				pending: "Proccessing ...",
			}
		);
	};

	const onFaileure = (error) => {
		console.log(error);
	};

	const onSuccess = (data) => {
		console.log(data);
	};

	return (
		<div>
			<ToastContainer />

			<div className='two-by-two'>
				<img src={test} className='login-vector' alt='home vector' />
				<div className='form'>
					<Card className='form-card'>
						<Row>
							<h2 style={{ marginBottom: "30px" }}>Forgot Your password ?</h2>
						</Row>
						<Row>
							<p style={{ marginBottom: "30px" }}>Find Your account</p>
						</Row>
						<Row>
							<InputGroup seamless className='mb-3 height-50'>
								<InputGroupAddon type='prepend'>
									<InputGroupText>
										<i className='material-icons'>mail</i>
									</InputGroupText>
								</InputGroupAddon>
								<FormInput
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
									placeholder='Email'
								/>
							</InputGroup>
						</Row>

						<Row style={{ margin: "10px auto" }}>
							<button className='login-button' onClick={handleReset}>
								Reset My Password
							</button>
						</Row>
						<Row
							style={{
								display: "flex!important",
								width: "100%",
								justifyContent: "space-between",
							}}
						>
							<span></span>
							<Link style={{ float: "right" }} to='/'>
								Login
							</Link>
						</Row>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
