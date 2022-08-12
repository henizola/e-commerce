import axios from "axios";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

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
import { ENDPOINT } from "../../api/ApiCall";

const ProcedureForm = ({ title, handleChange, handleSubmit, state }) => {
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
										<label htmlFor='feProcedureName'>Procedure Name</label>
										<FormInput
											id='feProcedureName'
											placeholder='Procedure Name'
											name='name'
											onChange={handleChange}
										/>
									</Col>
									<Col md='6' className='form-group'>
										<label htmlFor='feProcedureName'>Serial Number</label>
										<FormInput
											id='feProcedureName'
											placeholder='Procedure Name'
											name='name'
											onChange={handleChange}
										/>
									</Col>
									{/* Last Name */}

									{/* Password */}
								</Row>

								<Button theme='accent' onClick={handleSubmit}>
									Save Procedure
								</Button>
							</Form>
						</Col>
					</Row>
				</ListGroupItem>
			</ListGroup>
		</Card>
	);
};

ProcedureForm.propTypes = {
	/**
	 * The component's title.
	 */
	title: PropTypes.string,
};

ProcedureForm.defaultProps = {
	title: "Account Details",
};

export default ProcedureForm;
