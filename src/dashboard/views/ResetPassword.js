import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
	Card,
	FormFeedback,
	FormInput,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Row,
} from "shards-react";
import logo from "../assets/images/logo.png";
import login from "../assets/images/password.png";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { apiCall } from "../api/ApiCall";

const ResetPassword = () => {
	const [password, setPassword] = useState("");
	const [confirmPasword, setConfirmPassword] = useState("");
	const [match, setMatch] = useState("");
	const params = useParams();
	console.log("here is param", params.id);
	useEffect(() => {
		if (password === confirmPasword && password.length > 1) {
			setMatch(false);
		} else if (
			password !== confirmPasword &&
			password.length > 1 &&
			confirmPasword.length > 1
		) {
			setMatch(true);
		}
	}, [password, confirmPasword]);

	const handleReset = () => {
		if (password === confirmPasword) {
			toast.promise(
				apiCall(
					"post",
					{
						password: password,
					},
					"/user/reset-password",
					onSuccess,
					onFaileure,
					params.id
				),
				{
					pending: "Saving .......",
				}
			);
		} else {
			setMatch(true);
		}
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
			<div className='top-nav'>
				<img className='logo' src={logo} alt='logo' />
			</div>
			<div className='two-by-two'>
				<img src={login} className='login-vector' alt='home vector' />
				<div className='form'>
					<Card className='form-card'>
						<Row>
							<h2 style={{ marginBottom: "30px" }}>Reset Your password </h2>
						</Row>

						<Row>
							<InputGroup seamless className='mb-3 height-50'>
								<InputGroupAddon type='prepend'>
									<InputGroupText>
										<i className='material-icons'>lock</i>
									</InputGroupText>
								</InputGroupAddon>
								<FormInput
									value={password}
									onChange={(e) => {
										setPassword(e.target.value);
									}}
									placeholder='New Password'
									invalid={match}
									valid={match === false}
								/>
							</InputGroup>

							<InputGroup seamless className='mb-3 height-50'>
								<InputGroupAddon type='prepend'>
									<InputGroupText>
										<i className='material-icons'>lock</i>
									</InputGroupText>
								</InputGroupAddon>
								<FormInput
									value={confirmPasword}
									onChange={(e) => {
										setConfirmPassword(e.target.value);
									}}
									placeholder='Confirm Password'
									invalid={match}
									valid={match === false}
								/>
							</InputGroup>
							<FormFeedback>Passwords didn't match </FormFeedback>
						</Row>

						<Row style={{ margin: "10px auto" }}>
							<button className='login-button' onClick={handleReset}>
								Save
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

export default ResetPassword;
