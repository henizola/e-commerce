import axios from "axios";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup, Card, CardBody, CardHeader } from "shards-react";
import { ENDPOINT } from "../../api/Api";
import { doctorsAdded } from "../../store/doctors-reducer";
import Confirmation from "../confirm/confirm.component";

const DoctorsList = ({ title, discussions }) => {
	const doctors = useSelector((state) => state.doctors);
	const [open, setOpen] = useState(false);
	const [id, setId] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		getDoctors();
	}, []);

	const handleDelete = (id) => {
		const config = {
			headers: {
				Authorization: `${sessionStorage.getItem("token")}`,
			},
		};

		axios
			.delete(`${ENDPOINT}/doctor/${id}`, config)
			.then((res) => {
				getDoctors();
				setId("");
			})
			.catch((error) => {
				setId("");
				console.log("something went wrong", error);
			});
	};
	const callBack = (id) => {
		handleDelete(id);
	};

	const getDoctors = () => {
		const config = {
			headers: {
				Authorization: `${sessionStorage.getItem("token")}`,
			},
		};

		axios
			.get(`${ENDPOINT}/doctor`, config)
			.then((res) => {
				dispatch(
					doctorsAdded(res.data.filter((user) => user.role !== "admin"))
				);
			})
			.catch((error) => {
				console.log("something went wrong", error);
			});
	};

	return (
		<Card small className='blog-comments'>
			<CardHeader className='border-bottom'>
				<h6 className='m-0'>Doctors List</h6>
			</CardHeader>
			<Confirmation
				open={open}
				callback={callBack}
				close={() => setOpen(false)}
				id={id}
			/>
			<CardBody className='p-0'>
				{!doctors.length && (
					<p style={{ margin: "100px" }}>No Doctors Registerd</p>
				)}
				{doctors.map((doctor, idx) => (
					<div key={idx} className='blog-comments__item d-flex p-3'>
						{/* Avatar */}
						<div className='blog-comments__avatar mr-3'>
							<img src={doctor.picture} alt={doctor.firstName} />
						</div>

						{/* Content */}
						<div className='blog-comments__content'>
							{/* Content :: Title */}

							<div className='blog-comments__meta text-mutes'>
								<div className='text-secondary'>
									Full Name: {doctor.firstName} {doctor.lastName}
									<ButtonGroup
										size='sm'
										style={{ position: "absolute", right: "20px" }}
									>
										<Button
											theme='white'
											id={doctor._id}
											onClick={() => {
												setOpen(true);
												setId(doctor._id);
											}}
										>
											<span className='text-danger'>
												<i className='material-icons'>clear</i>
											</span>
											Delete
										</Button>
										{/* <Button theme="white">
                      <span className="text-light">
                        <i className="material-icons">more_vert</i>
                      </span>
                      Edit
                    </Button> */}
									</ButtonGroup>
								</div>
								<div className='blog-comments__actions'>
									<p>
										Username: {doctor.userName} <br />
										Specialization: {doctor.specialization}
									</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</CardBody>
		</Card>
	);
};

DoctorsList.propTypes = {
	/**
	 * The component's title.
	 */
	title: PropTypes.string,
	/**
	 * The discussions dataset.
	 */
	discussions: PropTypes.array,
};

export default DoctorsList;
