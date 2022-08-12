import PropTypes from "prop-types";
import React, { useState } from "react";

import "react-phone-number-input/style.css";
import {
	Button,
	Card,
	CardHeader,
	Col,
	Form,
	FormInput,
	FormSelect,
	ListGroup,
	ListGroupItem,
	Row,
	CardBody,
} from "shards-react";
// import {MultiSelect} from "react-multi-select-component";
import Creatable from "react-select/creatable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { apiCall } from "../../api/ApiCall";

const UserAccountForm = ({
	title,

	state,
}) => {
	const [data, setData] = useState({
		productName: "",
		thumbnail: "",
		price:0,
		catagories:[],
        Colors:[],
        sizes:[],
		images:[],
	});
	const [options, setOptions] = useState([
		// { label: "Jacket", value: "jacket" },
	]);
 
 
	const [images, setImages] = useState([]);
 
	const handleChange = (e) => {
		const { name, value } = e.target;

		let temp = { ...data };
		temp[name] = value;
		setData(temp);
	};
	const handleImage = (e) => {
		console.log(e.target.name);
		 
		const index = images.findIndex(
			(el) => Object.keys(el)[0] === e.target.name
		);
		console.log(index);
		let temp = [...images];
		if (index != -1) temp[index] = { [e.target.name]: e.target.files[0] };
		else temp[temp.length] = { [e.target.name]: e.target.files[0] };
		// temp[`${e.target.name}`]=e.target.files[0];
		console.log(temp);
		setImages([...temp]);
	};
	const handleSubmit = () => {
		console.log(data);
		var formData = new FormData();
		formData.append("thumbnail", data["thumbnail"]);

		formData.append("productName", data["productName"]);
		formData.append("price", data["price"]);
		
		for (let catIndex = 0; catIndex < data["catagories"].length; catIndex++) {
			formData.append("catagories", data["catagories"][catIndex]);
			
		}
		for (let catIndex = 0; catIndex < data["Colors"].length; catIndex++) {
			formData.append("Colors", data["Colors"][catIndex]);
			
		}
		for (let catIndex = 0; catIndex < data["sizes"].length; catIndex++) {
			formData.append("sizes", data["sizes"][catIndex]);
			
		}
		for (let j = 0; j < images.length; j++) {
			let tempImage = { ...images[j] };

			 
			formData.append(
				`images_${j}`,
				images[j][Object.keys(tempImage)[0]]
			);

			formData.append(
				`images[${j}][name]`,
				Object.keys(tempImage)[0]
			);
		}

		toast.promise(apiCall("post", formData, "/product", onSuccess, onFailure), {
			pending: "uploading....",
		});
	};
	const onFailure = (error) => {
		console.log(error);
	};

	const onSuccess = (data) => {
		toast.success("product successfully uploaded!");
		console.log(data);

		// setTimeout(() => navigate("/admin/overview"), 1000);
	};
	const handleCatagoryChange = (name,value) => {
		let temp = { ...data };
		console.log(name);
		temp[name] = value.map((el) => el["value"]);
		console.log(temp[name]);
		setData(temp);
	};
	return (
		<Card small className='mb-4'>
			<CardHeader className='border-bottom'>
				<h6 className='m-0'>{title}</h6>
			</CardHeader>
			<ListGroup flush>
				<ListGroupItem className='p-3'>
					<Row>
						<Col>
							<Form>
								<Row form>
									{/* First Name */}
									<Col md='6' className='form-group'>
										<label htmlFor='productName'>Product Name</label>
										<FormInput
											id='productName'
											placeholder='Product Name'
											name='productName'
											onChange={handleChange}
										/>
									</Col>
									<Col md='6' className='form-group'>
										<label htmlFor='thumbnail'>Hero Image</label>
										<FormInput
											type='file'
											id='thumbnail'
											placeholder='thumbnail'
											name='thumbnail'
											onChange={(e) => {
												let temp = { ...data };
												temp[e.target.name] = e.target.files[0];
												setData(temp);
											}}
										/>
									</Col>
									{/* Last Name */}
									<Col md='6' className='form-group'>
										<label htmlFor='price'> Price</label>
										<FormInput
											id='price'
											type='Number'
											min='0'
											placeholder=' Price'
											name='price'
											onChange={handleChange}
										/>
									</Col>

									{/* Email */}
									<Col md='6' className='form-group'>
										<label htmlFor='feCategory'>Category</label>
										<Creatable
											id='catagory'
											name='catagory'
											isMulti
											options={options}
											onChange={(value)=>{handleCatagoryChange('catagories',value)}}
										/>
									
									</Col>
								</Row>
				

								<Row>
								<Col md='6' className='form-group'>
										<label htmlFor='faColors'>Colors</label>
										<Creatable
											id='faColors'
											name='Colors'
											isMulti
											options={options}
											onChange={(value)=>{handleCatagoryChange('Colors',value)}}
										/>
									</Col>
									<Col md='6' className='form-group'>
										<label htmlFor='faSizes'>Sizes</label>
										<Creatable
											id='faSizes'
											name='sizes'
											isMulti
											options={options}
											onChange={(value)=>{handleCatagoryChange('sizes',value)}}
										/>
									</Col>

									<Col md='6' className='form-group'>
										<label htmlFor='front'>Front Image</label>

										<FormInput
											type='file'
											// multiple
											accept='image/*'
											id='front'
											placeholder='Description'
											name='front'
											onChange={handleImage}
										/>
									</Col>
									<Col md='6' className='form-group'>
										<label htmlFor='back'>Back Image</label>
										<FormInput
											type='file'
											// multiple
											accept='image/*'
											id='back'
											placeholder='Description'
											name='back'
											onChange={handleImage}
										/>
									</Col>
									<Col md='6' className='form-group'>
										<label htmlFor='side'>Side Image</label>
										<FormInput
											type='file'
											// multiple
											accept='image/*'
											id='side'
											placeholder='side'
											name='side'
											onChange={handleImage}
										/>
									</Col>
									<Col md='6' className='form-group'>
										<label htmlFor='bottom'>Bottom Image</label>
										<FormInput
											type='file'
											// multiple
											accept='image/*'
											id='bottom'
											placeholder='bottom'
											name='bottom'
											onChange={handleImage}
										/>
									</Col>
								</Row>
							  
							 
								<Button
									theme='accent'
									disabled={state.loading}
									onClick={handleSubmit}
								>
									Save Product
								</Button>
							</Form>
						</Col>
					</Row>
				</ListGroupItem>
			</ListGroup>
		</Card>
	);
};

UserAccountForm.propTypes = {
	/**
	 * The component's title.
	 */
	title: PropTypes.string,
};

UserAccountForm.defaultProps = {
	title: "Account Details",
};

export default UserAccountForm;
