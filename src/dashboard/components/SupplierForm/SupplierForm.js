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
	FormTextarea,
	ListGroup,
	ListGroupItem,
	Row,
} from "shards-react";
import { ENDPOINT } from "../../api/Api";

const SupplierForm = ({ title, handleChange, handleSubmit, state }) => {
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
										<label htmlFor='feProductName'>Supplier Name</label>
										<FormInput
											id='feProductName'
											placeholder='Supplier Name'
											name='name'
											onChange={handleChange}
										/>
									</Col>
									<Col md='6' className='form-group'>
										<label htmlFor='feAddress'>Email</label>
										<FormInput
											id='feEmail'
											placeholder='Email'
											name='email'
											onChange={handleChange}
										/>
									</Col>
									{/* Last Name */}
									<Col md='6' className='form-group'>
										<label htmlFor='fePurcahePrice'>Phone Number</label>
										<PhoneInput
											className='form-control'
											id='fePurchasePrice'
											placeholder='Country'
											name='phone'
											onChange={handleChange}
										/>
									</Col>
									<Col md='6' className='form-group'>
										<label htmlFor='fePurcahePrice'>Country</label>
										<FormInput
											id='fePurchasePrice'
											placeholder='Country'
											name='country'
											onChange={handleChange}
										/>
									</Col>

									{/* Password */}
								</Row>

								<Button theme='accent' onClick={handleSubmit}>
									Save Supplier
								</Button>
							</Form>
						</Col>
					</Row>
				</ListGroupItem>
			</ListGroup>
		</Card>
	);
};

SupplierForm.propTypes = {
	/**
	 * The component's title.
	 */
	title: PropTypes.string,
};

SupplierForm.defaultProps = {
	title: "Supplier Details",
};

export default SupplierForm;
