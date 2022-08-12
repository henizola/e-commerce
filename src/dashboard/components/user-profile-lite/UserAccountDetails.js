import PropTypes from "prop-types";
import React from "react";

import {
	Button,
	Card,
	CardHeader,
	Col,
	Form,
	FormInput,
	ListGroup,
	ListGroupItem,
	Row,
} from "shards-react";

const UserAccountDetails = ({ user, title, setUser, handleSubmit }) => {
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
											// value={user.firstName}
											onChange={(e) => {
												setUser({ ...user, firstName: e.target.value });
											}}
										/>
									</Col>
									{/* Last Name */}
									<Col md='6' className='form-group'>
										<label htmlFor='feLastName'>Last Name</label>
										<FormInput
											id='feLastName'
											placeholder='Last Name'
											value={user.lastName}
											onChange={(e) => {
												setUser({ ...user, lastName: e.target.value });
											}}
										/>
									</Col>
								</Row>
								<Row form>
									{/* Email */}
									<Col md='6' className='form-group'>
										<label htmlFor='feEmail'>Email</label>
										<FormInput
											type='email'
											id='feEmail'
											placeholder='Email Address'
											// value={user.email}
											disabled
											autoComplete='email'
										/>
									</Col>
									<Col md='6' className='form-group'>
										<label htmlFor='feUsername'>Username</label>
										<FormInput
											type='text'
											id='feUsername'
											placeholder='UserName'
											// value={user.userName}
											disabled
										/>
									</Col>
									<Col md='6' className='form-group'>
										<label htmlFor='fePhoneNumber'>Phone Number</label>
										<FormInput
											id='fePhoneNumber'
											placeholder='phone'
											// value={user.phoneNumber}
											onChange={(e) => {
												setUser({ ...user, phone: e.target.value });
											}}
										/>
									</Col>
								</Row>
								<Button theme='accent' onClick={handleSubmit}>
									Update Account
								</Button>
							</Form>
						</Col>
					</Row>
				</ListGroupItem>
			</ListGroup>
		</Card>
	);
};

UserAccountDetails.propTypes = {
	/**
	 * The component's title.
	 */
	title: PropTypes.string,
};

UserAccountDetails.defaultProps = {
	title: "Account Details",
};

export default UserAccountDetails;
