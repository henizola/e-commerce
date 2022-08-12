import axios from "axios";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Button, ButtonGroup, Card, CardBody, CardHeader } from "shards-react";
import { ENDPOINT } from "../../api/Api";
import Confirmation from "../confirm/confirm.component";

const DepartmentList = ({ fetch, setFetch, departments }) => {
	const [open, setOpen] = useState(false);
	const [id, setId] = useState("");

	const handleDelete = (id) => {
		const config = {
			headers: {
				Authorization: `${sessionStorage.getItem("token")}`,
			},
		};

		axios
			.delete(`${ENDPOINT}/department/${id}`, config)
			.then((res) => {
				setId("");
				setFetch(!fetch);
			})
			.catch((error) => {
				setId("");
				toast.error(error.message, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			});
	};
	const callBack = (id) => {
		handleDelete(id);
	};

	return (
		<Card small className='blog-comments' style={{ minHeight: "200px" }}>
			<CardHeader className='border-bottom'>
				<h6 className='m-0'>Department List</h6>
			</CardHeader>
			<Confirmation
				open={open}
				callback={callBack}
				close={() => setOpen(false)}
				id={id}
			/>
			<ToastContainer />
			<CardBody className='p-0'>
				{!departments.length && (
					<p style={{ margin: "100px" }}>No Departments Registerd</p>
				)}
				{departments.map((department, idx) => (
					<div key={idx} className='blog-comments__item d-flex p-3'>
						<div className='blog-comments__content'>
							<div className='blog-comments__meta text-mutes'>
								<div className='text-secondary'>
									Department Name : {department.deptName}
									<ButtonGroup
										size='sm'
										style={{ position: "absolute", right: "20px" }}
									>
										<Button
											theme='white'
											id={department._id}
											onClick={() => {
												setOpen(true);
												setId(department._id);
											}}
										>
											<span className='text-danger'>
												<i className='material-icons'>clear</i>
											</span>
											Delete
										</Button>
									</ButtonGroup>
								</div>
							</div>
						</div>
					</div>
				))}
			</CardBody>
		</Card>
	);
};

DepartmentList.propTypes = {
	/**
	 * The component's title.
	 */
	title: PropTypes.string,
	/**
	 * The discussions dataset.
	 */
	discussions: PropTypes.array,
};

export default DepartmentList;
