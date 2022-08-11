import React, { useState } from "react";
import { Col, Container, Row } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";

import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { apiCall } from "../api/ApiCall";
const DocProfile = () => {
	const user = useSelector((state) => state.user[0]);
	const [tempUser, setTempUser] = useState(user);

	const handleSubmit = () => {
		toast.promise(
			apiCall(
				"put",
				{ ...tempUser },
				`/doctor/${user._id}`,
				onSuccess,
				onFaileure
			),
			{
				pending: "proccessing ...",
			}
		);
	};

	const onSuccess = () => {
		console.log("profile update success");
	};
	const onFaileure = (error) => {
		console.log(error);
		console.log("failed");
	};

	return (
		<Container fluid className='main-content-container px-4'>
			<Row noGutters className='page-header py-4'>
				<PageTitle
					title='User Profile'
					subtitle='Overview'
					md='12'
					className='ml-sm-auto mr-sm-auto'
				/>
			</Row>
			<ToastContainer />
			<Row>
				<Col lg='12'>
					<UserAccountDetails
						user={tempUser}
						setUser={setTempUser}
						handleSubmit={handleSubmit}
					/>
				</Col>
			</Row>
		</Container>
	);
};
export default DocProfile;
