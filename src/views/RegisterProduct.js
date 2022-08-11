import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Col, Container, Row } from "shards-react";
import PageTitle from "../components/common/PageTitle";

import ProductForm from "../components/ProductForm/ProductForm";

const RegisterProduct = () => {
	const [currentStep, setCurrentStep] = useState(0);
	const [data, setData] = useState({
		productName: "",
		thumbnail: "",
		price: 0,
		types: [],
	});
	const [date, setDate] = useState(new Date());
	const onNext = () => {
		setCurrentStep(currentStep + 1);
	};

	const handleChange = (e) => {
		console.log(e.target.value);
	};
	const handleImage=(e) => {
		console.log(e.target.files[0]);
	};
	const handleSubmit = () => {
		
	};

	return (
		<Container fluid className='main-content-container px-4 pb-4'>
			<ToastContainer />
			<Row noGutters className='page-header py-4'>
				<PageTitle
					title='Register Product'
					subtitle='Admin'
					md='12'
					className='ml-sm-auto mr-sm-auto'
				/>
			</Row>

			<Col lg='12'>
				<ProductForm
					state={data}
					setDate={setDate}
					 
					

				/>
			</Col>
		</Container>
	);
};

export default RegisterProduct;
