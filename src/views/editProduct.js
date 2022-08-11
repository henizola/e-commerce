import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Col, Container, Row } from "shards-react";
import PageTitle from "../components/common/PageTitle";

import EditProductForm from "../components/ProductForm/EditProductForm";
import {useLocation} from 'react-router-dom'
import { useEffect } from "react";

const EditProduct = () => {
	const [currentStep, setCurrentStep] = useState(0);
	const location = useLocation();
	const [data, setData] = useState({
		...location.state
	});
	const [date, setDate] = useState(new Date());

	
useEffect(()=>{
     setData({...location.state});
    console.log(data);
},[]);

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
					title='Edit Product'
					subtitle='Admin'
					md='12'
					className='ml-sm-auto mr-sm-auto'
				/>
			</Row>

			<Col lg='12'>
				<EditProductForm
					state={data}
					setDate={setDate}
				/>
			</Col>
		</Container>
	);
};

export default EditProduct;
