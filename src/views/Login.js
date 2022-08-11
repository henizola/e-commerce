import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
	Card,
	FormInput,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Row,
} from "shards-react";
import login from "../assets/images/login.png";
import logo from "../assets/images/logo.png";
import { userSignedIn, userSignedOut } from "../store/user-reducer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";
import { apiCall } from "../api/ApiCall";
import axios from "axios";
import { ENDPOINT } from "../api/Api";

const LogIn = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		toast.promise(
			apiCall(
				"post",
				{ password: password, email: email },
				"/auth/login",
				onSuccess,
				onFailure
			),
			{
				pending: "Authenticating....",
			}
		);
	};

	const onFailure = (error) => {
		console.log(error);
	};

	const onSuccess = (data) => {
		toast.success("Logged in successfully !");
		console.log(data);
		dispatch(userSignedIn(data.user));
		console.log(data.user);
		sessionStorage.setItem("token", data.tokens['access']['token']);
		setTimeout(() => navigate("/admin/overview"), 1000);
	};

	// const onSuccess = (data) => {
	// 	navigate("/admin/overview");

	// 	// axios
	// 	// 	.post(`${ENDPOINT}/user/refresh-token`, {
	// 	// 		refresh_token: data.refresh_token,
	// 	// 	})
	// 	// 	.then((res) => {
	// 	// 		sessionStorage.setItem("token", res.data.access_token);
	// 	// 		setTimeout(() => {
	// 	// 			if (res.data.user.role === "admin") {
	// 	// 				dispatch(userSignedIn(res.data.user));
	// 	// 				navigate("/admin/overview");
	// 	// 			} else {
	// 	// 				dispatch(userSignedIn(res.data.user));
	// 	// 				navigate("/doc/overview");
	// 	// 			}
	// 	// 		}, 500);
	// 	// 	})
	// 	// 	.catch((error) => {
	// 	// 		console.log("something went wrong", error);
	// 	// 	});
	// };

	return (
		<div>
			<ToastContainer />

			<div className='two-by-two'>
				<img src={login} className='login-vector' alt='home vector' />
				<form className='form' onSubmit={handleLogin} method='post'>
					<Card className='form-card'>
						<Row>
							<h2 style={{ marginBottom: "30px" }}>Login</h2>
						</Row>
						<Row style={{ marginBottom: "20px" }}>
							<InputGroup seamless className='mb-3 height-50'>
								<InputGroupAddon type='prepend'>
									<InputGroupText>
										<i className='material-icons'>mail</i>
									</InputGroupText>
								</InputGroupAddon>
								<FormInput
									value={email}
									name='email'
									requierd={true}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
									placeholder='Email'
								/>
							</InputGroup>
						</Row>
						<Row style={{ marginBottom: "20px" }}>
							<InputGroup seamless className='mb-3 height-50'>
								<InputGroupAddon type='prepend'>
									<InputGroupText>
										<i className='material-icons'>password</i>
									</InputGroupText>
								</InputGroupAddon>
								<FormInput
									value={password}
									name='password'
									requierd
									onChange={(e) => {
										setPassword(e.target.value);
									}}
									type='password'
									placeholder='Password'
								/>
							</InputGroup>
						</Row>
						<Row
							style={{
								display: "flex!important",
								width: "100%",
								justifyContent: "space-between",
							}}
						>
							<span></span>
							<Link to='/user/forgot-password' style={{ float: "right" }}>
								Forgot Password?
							</Link>
						</Row>
						<Row style={{ margin: "10px auto" }}>
							<button className='login-button' type='submit'>
								Login
							</button>
						</Row>
					</Card>
				</form>
			</div>
		</div>
	);
};

export default LogIn;
