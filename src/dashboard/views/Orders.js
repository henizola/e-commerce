import { ToastContainer } from "react-toastify";
import { Card, CardBody, CardHeader, Col, Container, Row } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import { CustomContainer } from "./styles";

const Orders = () => {
	return (
		<CustomContainer>
			<Container fluid className='main-content-container px-4'>
				{/* Page Header */}
				<Row noGutters className='page-header py-4'>
					<PageTitle sm='4' title='Orders' className='text-sm-left' />
				</Row>
				<ToastContainer />

				<Row>
					<Col>
						<Card small className='mb-4 overflow-hidden'>
							<CardHeader className='bg-dark'>
								<h6 className='m-0 text-white'>All Orders</h6>
							</CardHeader>
							<CardBody className='bg-light p-0 pb-3'>
								<table className='table table-light mb-0'>
									<thead className='thead-light'>
										<tr>
											<th scope='col' className='border-0'>
												Order Number
											</th>
											<th scope='col' className='border-0 desktop'>
												Product Name
											</th>

											<th scope='col' className='border-0 desktop'>
												Quantity
											</th>
											<th scope='col' className='border-0 '>
												Color
											</th>
											<th scope='col' className='border-0 '>
												Size
											</th>
											<th scope='col' className='border-0 '>
												Orderd By
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>0001891272091</td>
											<td> Product 1</td>
											<td>2</td>
											<td> Orange</td>
											<td>M</td>
											<td>User 1</td>
										</tr>
									</tbody>
								</table>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</CustomContainer>
	);
};

export default Orders;
