import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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

const ChangePassword = () => {
	const [oldPassword, setOldPassword] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPasword, setConfirmPassword] = useState("");
	const [match, setMatch] = useState("");

	const navigate = useNavigate();

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
						currentPassword: oldPassword,
						newPassword: password,
					},
					"/user/change-password",
					onSuccess,
					onFaileure
				),
				{
					pending: "saving...",
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
		setTimeout(() => {
			navigate(-1);
		}, 2000);
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
							<h2 style={{ marginBottom: "30px" }}>Change Your password </h2>
						</Row>

						<Row>
							<InputGroup seamless className='mb-3 height-50'>
								<InputGroupAddon type='prepend'>
									<InputGroupText>
										<i className='material-icons'>lock</i>
									</InputGroupText>
								</InputGroupAddon>
								<FormInput
									value={oldPassword}
									onChange={(e) => {
										setOldPassword(e.target.value);
									}}
									placeholder='Current Password'
									type='password'
								/>
							</InputGroup>
							<InputGroup seamless className='mb-3 height-50'>
								<InputGroupAddon type='prepend'>
									<InputGroupText>
										<i className='material-icons'>lock</i>
									</InputGroupText>
								</InputGroupAddon>
								<FormInput
									type='password'
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
									type='password'
									visible
									value={confirmPasword}
									onChange={(e) => {
										setConfirmPassword(e.target.value);
									}}
									placeholder='Confirm New Password'
									invalid={match}
									valid={match === false}
								/>
							</InputGroup>
							<FormFeedback>Passwords didn't match </FormFeedback>
						</Row>

						<Row style={{ margin: "10px auto" }}>
							<button className='login-button' onClick={handleReset}>
								Save Password
							</button>
						</Row>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default ChangePassword;
