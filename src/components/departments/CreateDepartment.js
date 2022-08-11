import PropTypes from "prop-types";
import React, { useState } from "react";
import { toast } from "react-toastify";
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
import { apiCall } from "../../api/ApiCall";

const CreateDepartment = ({ fetch, setFetch }) => {
	const [deptName, setDeptName] = useState("");
	const [loading, setLoading] = useState(false);
	const handleSubmit = () => {
		setLoading(false);
		toast.promise(
			apiCall(
				"post",
				{ deptName: deptName },
				"/department",
				onSuccess,
				onFaileure
			),
			{
				pending: "proccessing ...",
			}
		);
	};

	const onSuccess = () => {
		setLoading(false);
		setFetch(!fetch);
		setDeptName("");
	};
	const onFaileure = (error) => {
		console.log(error);
		setLoading(false);
	};

	return (
		<Card small className='mb-4'>
			<CardHeader className='border-bottom'>
				<h6 className='m-0'>Create Department</h6>
			</CardHeader>
			<ListGroup flush>
				<ListGroupItem className='p-3'>
					<Row style={{ padding: "30px 0" }}>
						<Col>
							<Form>
								<Row form>
									<Col md='4' className='form-group'>
										<FormInput
											md='6'
											id='feDepartment'
											placeholder='Department Name'
											name='deptname'
											value={deptName}
											onChange={(e) => setDeptName(e.target.value)}
										/>
									</Col>
									<Col md='4' className='form-group'>
										<Button
											theme='accent'
											disabled={loading}
											onClick={handleSubmit}
										>
											Create Department
										</Button>
									</Col>
								</Row>
							</Form>
						</Col>
					</Row>
				</ListGroupItem>
			</ListGroup>
		</Card>
	);
};

CreateDepartment.propTypes = {
	/**
	 * The component's title.
	 */
	title: PropTypes.string,
};

CreateDepartment.defaultProps = {
	title: "Account Details",
};

export default CreateDepartment;
