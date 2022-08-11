import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, ListGroup, ListGroupItem } from "shards-react";
import CustomFileUpload from "../components-overview/CustomFileUpload";
const UserProfile = ({ userDetails, setAvatar }) => {
	const [avatarPreview, setAvatarPreview] = useState("");
	const handleAvatar = (url) => {
		setAvatarPreview(url);
		// setAvatar(url);
	};

	return (
		<Card small className='mb-4 pt-3'>
			<CardHeader className='border-bottom text-center'>
				<div className='mb-3 mx-auto'>
					<img
						className='rounded-circle'
						src={
							avatarPreview
								? avatarPreview
								: require("../../images/avatars/1.png")
						}
						// alt={userDetails.name}
						width='110'
						height='110'
						style={{ objectFit: "cover" }}
					/>
				</div>
			</CardHeader>
			<ListGroup flush>
				<ListGroupItem className='p-4'>
					<strong className='text-muted d-block mb-2'>
						Choose Avatar Photo
					</strong>
					<CustomFileUpload onChange={handleAvatar} />
				</ListGroupItem>
			</ListGroup>
		</Card>
	);
};

UserProfile.propTypes = {
	/**
	 * The user details object.
	 */
	userDetails: PropTypes.object,
};

UserProfile.defaultProps = {
	userDetails: {
		name: "Dr. Jone Doe",
		avatar: "3.jpg",
		jobTitle: "Cardiologist",
		performanceReportTitle: "Workload",
		performanceReportValue: 74,
		metaTitle: "Description",
		metaValue:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?",
	},
};

export default UserProfile;
