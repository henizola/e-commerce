import React from "react";
import { connect } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Col, Container, Row } from "shards-react";
import { apiCall } from "../api/ApiCall";
import PageTitle from "../components/common/PageTitle";
import UserAccountForm from "../components/user-profile-lite/UserAccountForm";
import UserProfile from "../components/user-profile-lite/UserProfile";
import { img } from "../utils/defaultImg";

class CreateAdminProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			userName: "",
			phoneNumber: "",
			employmentType: "part-time",
			workingDaysWeekly: [],
			workingDaysSpecial: [],
			email: "",
			picture: img,
			gender: "male",
			specialization: "",
			birthDate: "",
			bio: "",
			password: "",
			loading: false,
			department: "",
			role: "admin",
		};
	}

	render() {
		const setAvatar = (avatar) => {
			this.setState({ picture: avatar });
		};

		let handleSubmit = () => {
			this.setState({ loading: true });
			toast.promise(
				apiCall(
					"post",
					{ ...this.state },
					"/user/register",
					onSuccess,
					onFaileure
				),
				{
					pending: "proccessing ...",
				}
			);
		};

		const onSuccess = () => {
			this.setState({ loading: false });
		};
		const onFaileure = (error) => {
			console.log(error);
			this.setState({ loading: false });
		};

		const handleChange = (event) => {
			this.setState({ [event.target.name]: event.target.value });
		};

		return (
			<Container fluid className='main-content-container px-4'>
				<ToastContainer style={{ paddingTop: "50px" }} />

				<Row noGutters className='page-header py-4'>
					<PageTitle
						title='Create Profile'
						subtitle='Admin'
						md='12'
						className='ml-sm-auto mr-sm-auto'
					/>
				</Row>
				<Row>
					<Col lg='4'>
						<UserProfile userDetails={this.props.user} setAvatar={setAvatar} />
					</Col>
					<Col lg='8'>
						<UserAccountForm
							handleChange={handleChange}
							handleSubmit={handleSubmit}
							state={this.state}
						/>
					</Col>
				</Row>
			</Container>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
	};
}

export default connect(mapStateToProps)(CreateAdminProfile);
