import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Col,
	Container,
	Row,
} from "shards-react";

import { apiCall2, apiFetch } from "../api/ApiCall";

import PageTitle from "../components/common/PageTitle";
import Confirmation from "../components/confirm/confirm.component";

const Products = () => {
	// const doctors = useSelector((state) => state.doctors);
	const [products, setProducts] = useState([]);
	const [open, setOpen] = useState(false);
	const [id, setId] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		getProducts();
	}, []);

	const handleDelete = (pid) => {
		toast.promise(
			apiCall2(
				"get",
				{
					params: {
						pid,
					},
				},
				"/product/delete-my-product",
				onSuccess,
				onFailure
			),
			{
				pending: "deleting....",
			}
		);
	};
	const onFailure = (error) => {
		console.log(error);
		toast.error("failed to delete");
	};

	const onSuccess = (data) => {
		const temp = products.filter((pro) => pro["id"] !== id);
		setProducts([...temp]);
		toast.success("successfully deleted!");
		console.log(data);

		// setTimeout(() => navigate("/admin/overview"), 1000);
	};

	const getProducts = () => {
		apiFetch(
			"get",
			"/product/my-product",
			(data) => {
				console.log(data);
				setProducts([...data]);
			},
			(err) => {
				console.log(err);
			}
		);
	};
	const callBack = (id) => {
		handleDelete(id);
	};

	return (
		<Container fluid className='main-content-container px-4'>
			{/* Page Header */}
			<Row noGutters className='page-header py-4'>
				<PageTitle sm='4' title='Products' className='text-sm-left' />
			</Row>
			<ToastContainer />
			<Confirmation
				open={open}
				callback={callBack}
				close={() => setOpen(false)}
				id={id}
			/>
			<Row>
				<Col>
					<Card small className='mb-4 overflow-hidden'>
						<CardHeader className='bg-dark'>
							<h6 className='m-0 text-white'>All Products</h6>
						</CardHeader>
						<CardBody className='bg-light p-0 pb-3'>
							<table className='table table-light mb-0'>
								<thead className='thead-light'>
									<tr>
										<th scope='col' className='border-0'>
											No
										</th>
										<th scope='col' className='border-0 desktop'>
											Name
										</th>

										<th scope='col' className='border-0 desktop'>
											Colors
										</th>
										<th scope='col' className='border-0 '>
											Price
										</th>
										<th scope='col' className='border-0 '>
											Update
										</th>
										<th scope='col' className='border-0 '>
											Delete
										</th>
									</tr>
								</thead>
								<tbody>
									{products.map((pro, index) => (
										<tr>
											<td key={index}> {index}</td>
											<td> {pro["productName"]}</td>
											<td>
												{" "}
												{pro["Colors"].map((color) => color + ",")}
											</td>
											<td> ${pro["price"]}</td>
											<td>
												{" "}
												<Button
													theme='warning'
													onClick={() => {
														navigate("/admin/edit-products", {
															state: { ...pro },
														});
													}}
												>
													Update
												</Button>
											</td>
											<td>
												{" "}
												<Button
													theme='danger'
													onClick={() => {
														setId(pro["id"]);
														setOpen(true);
													}}
												>
													Delete
												</Button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Products;
