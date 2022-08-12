import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Col,
	Container,
	Row,
} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import { CustomContainer } from "./styles";

const Adminstrators = () => {
	return (
		<CustomContainer>
			<SubContainer fluid className='main-content-container px-4'>
				{/* Page Header */}
				<Row noGutters className='page-header py-4'>
					<PageTitle sm='4' title='Adminstrators' className='text-sm-left' />
				</Row>
				{/* <Confirmation
				open={open}
				callback={callBack}
				close={() => setOpen(false)}
				id={id}
			/> */}
				<Row>
					<Col>
						<Card small className='mb-4 overflow-hidden'>
							<CardHeader
								className='bg-dark'
								style={{ display: "flex", justifyContent: "space-between" }}
							>
								<h6 className='m-0 text-white'>All Adminstrators</h6>
								<Button
									theme='success'
									onClick={() => {
										// navigate("/admin/create-admin-profile");
									}}
								>
									<span style={{ marginRight: "10px" }}>
										<i className='material-icons'>add</i>
									</span>
									Add New Adminstrator
								</Button>
							</CardHeader>
							<CardBody className='bg-light p-0 pb-3'>
								<table className='table table-light mb-0'>
									<thead className='thead-light'>
										<tr>
											<th scope='col' className='border-0'>
												Full Name
											</th>

											<th scope='col' className='border-0 desktop'>
												Email
											</th>
											<th scope='col' className='border-0 desktop'>
												Phone Number
											</th>

											<th scope='col' className='border-0 '>
												Delete
											</th>
										</tr>
									</thead>
									<tbody>
										{/* {doctors.map((doctor, idx) => (
										<tr id={idx}>
											<td>
												{doctor.firstName} {doctor.lastName}
											</td>

											<td className='desktop'> {doctor.email}</td>

											<td className='desktop'> {doctor.phoneNumber}</td>

											<td>
												<Button
													theme='danger'
													id={doctor._id}
													onClick={() => {
														setOpen(true);
														setId(doctor._id);
													}}
												>
													<span style={{ marginRight: "10px" }}>
														<i className='material-icons'>clear</i>
													</span>
													Delete
												</Button>
											</td>
										</tr>
									))} */}
									</tbody>
								</table>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</SubContainer>
		</CustomContainer>
	);
};

export default Adminstrators;
