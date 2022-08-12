import axios from "axios";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
	Button,
	Card,
	CardHeader,
	Col,
	Form,
	FormInput,
	FormSelect,
	ListGroup,
	ListGroupItem,
	Row,
} from "shards-react";
import { ENDPOINT } from "../../api/Api";

const UserAccountForm = ({
	title,
	handleChange,
	handleSubmit,
	state,
	setDate,
	phone,
}) => {
	const [departments, setDepartments] = useState([]);
	useEffect(() => {
		const config = {
			headers: {
				Authorization: `${sessionStorage.getItem("token")}`,
			},
		};

		axios
			.get(`${ENDPOINT}/department/`, config)
			.then((res) => {
				setDepartments(res.data.departments);
				handleChange({
					target: { name: "department", value: res.data.departments[0]._id },
				});
			})
			.catch((error) => {
				console.log("something went wrong", error);
			});
	}, []);
	return (
		<Card small className='mb-4'>
			<CardHeader className='border-bottom'>
				<h6 className='m-0'>{title}</h6>
			</CardHeader>
			<ListGroup flush>
				<ListGroupItem className='p-3'>
					<Row>
						<Col>
							<Form>
								<Row form>
									{/* First Name */}
									<Col md='6' className='form-group'>
										<label htmlFor='feFirstName'>First Name</label>
										<FormInput
											id='feFirstName'
											placeholder='First Name'
											name='firstName'
											onChange={handleChange}
										/>
									</Col>
									{/* Last Name */}
									<Col md='6' className='form-group'>
										<label htmlFor='feLastName'>Last Name</label>
										<FormInput
											id='feLastName'
											placeholder='Last Name'
											name='lastName'
											onChange={handleChange}
										/>
									</Col>

									{/* Email */}
									<Col md='6' className='form-group'>
										<label htmlFor='feEmail'>Email</label>
										<FormInput
											type='email'
											id='feEmail'
											placeholder='Email Address'
											name='email'
											onChange={handleChange}
											autoComplete=''
										/>
									</Col>

									<Col md='6' className='form-group'>
										<label htmlFor='fePhone'>Phone Number</label>
										<PhoneInput
											className='form-control '
											placeholder='Enter phone number'
											value={phone}
											onChange={setDate}
										/>
									</Col>

									<Col md='6' className='form-group'>
										<label htmlFor='feGender'>Role</label>
										<FormSelect
											id='feGender'
											name='gender'
											onChange={handleChange}
										>
											<option value='male'>Admin</option>
											<option value='female'>User</option>
										</FormSelect>
									</Col>

									{/* Password */}
									<Col md='6' className='form-group'>
										<label htmlFor='fePassword'>Password</label>
										<FormInput
											type='password'
											id='fePassword'
											placeholder='Password'
											name='password'
											onChange={handleChange}
										/>
									</Col>
								</Row>

								<Button
									theme='accent'
									disabled={state.loading}
									onClick={handleSubmit}
								>
									Create Account
								</Button>
							</Form>
						</Col>
					</Row>
				</ListGroupItem>
			</ListGroup>
		</Card>
	);
};

UserAccountForm.propTypes = {
	/**
	 * The component's title.
	 */
	title: PropTypes.string,
};

UserAccountForm.defaultProps = {
	title: "Account Details",
};

export default UserAccountForm;
