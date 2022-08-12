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

const CategoryForm = ({ title, handleChange, handleSubmit, state }) => {
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
										<label htmlFor='feProductName'>Category Name</label>
										<FormInput
											id='feProductName'
											placeholder='Category Name'
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
										<label htmlFor='feSupplier'>Supplier</label>
										<FormSelect
											id='feSupplier'
											name='supplier'
											onChange={handleChange}
										>
											<option>Supplier 1</option>
											<option>Supplier 2</option>
											<option>Supplier 3</option>
										</FormSelect>
									</Col>
									<Col md='12' className='form-group'>
										<label htmlFor='feTextArea'>Description</label>
										<FormTextarea
											type='textarea'
											id='feTextArea'
											placeholder='Description'
											name='description'
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

CategoryForm.propTypes = {
	/**
	 * The component's title.
	 */
	title: PropTypes.string,
};

CategoryForm.defaultProps = {
	title: "Category Details",
};

export default CategoryForm;
