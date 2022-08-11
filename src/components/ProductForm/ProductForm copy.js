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
		price: 0,
		catagories: [],
		types: [],
	});
	const [options, setOptions] = useState([
		{ label: "Jacket", value: "jacket" },
	]);
	const [singleSize, setSingleSize] = useState({
		size: "",
		qty: 0,
	});
	const [unit, setUnit] = useState([]);
	const [images, setImages] = useState([]);
	const [types, setTypes] = useState({
		color: "",
		images: [],
		unit: [],
	});
	const handleChange = (e) => {
		const { name, value } = e.target;

		let temp = { ...data };
		temp[name] = value;
		setData(temp);
	};
	const handleImage = (e) => {
		console.log(e.target.name);
		console.log(e.target.files[0]);
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
		let newTYpe = [];
		for (let index = 0; index < data["types"].length; index++) {
			let element = { ...data["types"][index] };
			formData.append(`types[${index}][color]`, element["color"]);
			// newTYpe[index]={color:element['color'],unit:[...element['unit']],images:[]}
			for (let j = 0; j < element["images"].length; j++) {
				let tempImage = { ...element["images"][j] };

				// console.log(`${index}_${j}`,Object.keys(tempImage)[0]);
				formData.append(
					`${index}_${j}`,
					element["images"][j][Object.keys(tempImage)[0]]
				);

				formData.append(
					`types[${index}][images][${j}][name]`,
					Object.keys(tempImage)[0]
				);
			}
			for (let j = 0; j < element["unit"].length; j++) {
				formData.append(
					`types[${index}][unit][${j}][size]`,
					element["unit"][j]["size"]
				);
				formData.append(
					`types[${index}][unit][${j}][available]`,
					element["unit"][j]["qty"]
				);
				formData.append(
					`types[${index}][unit][${j}][qty]`,
					element["unit"][j]["qty"]
				);
			}
			element = {};
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
	const handleCatagoryChange = (value) => {
		let temp = { ...data };
		temp["catagories"] = value.map((el) => el["value"]);
		console.log(temp["catagories"]);
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
											onChange={handleCatagoryChange}
										/>
										{/* <FormSelect
											id='feCategory'
											name='category'
											onChange={handleChange}
										>
											<option>Category 1</option>
											<option>Category 2</option>
											<option>Category 3</option>
											
										</FormSelect> */}
									</Col>
								</Row>
								<h3>Type</h3>

								<Row>
									<Col md='6' className='form-group'>
										<label htmlFor='Color'>Color</label>
										<FormInput
											id='Color'
											placeholder='Color'
											name='black'
											value={types["color"]}
											onChange={(e) => {
												setTypes({ ...types, color: e.target.value });
											}}
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
								<h6>size</h6>
								<Row>
									<Col md='6' className='form-group'>
										<label htmlFor='Color'>Size</label>
										<FormInput
											id='size'
											placeholder='size'
											name='size'
											value={singleSize.size}
											onChange={(e) => {
												setSingleSize({ ...singleSize, size: e.target.value });
											}}
										/>
									</Col>
									<Col md='6' className='form-group'>
										<label htmlFor='qty'>Quantity</label>
										<FormInput
											id='qty'
											placeholder='qty'
											name='qty'
											type='Number'
											min='0'
											value={singleSize.qty}
											onChange={(e) => {
												setSingleSize({ ...singleSize, qty: e.target.value });
											}}
										/>
									</Col>
									<Col md='6' className='form-group'>
										<Button
											outline
											theme='info'
											disabled={state.loading}
											onClick={(e) => {
												e.preventDefault();
												if (singleSize.qty !== 0 && singleSize.size !== "") {
													setUnit([...unit, singleSize]);

													setSingleSize({
														size: "",
														qty: "",
													});
												}
											}}
										>
											Next Size
										</Button>
									</Col>

									<Row style={{ width: "100%" }}></Row>
								</Row>
								<CardBody className='bg-light p-0 pb-3'>
									<table className='table table-light mb-0'>
										<thead className='thead-light'>
											<tr>
												<th scope='col' className='border-0 desktop'>
													Size
												</th>

												<th scope='col' className='border-0 '>
													quantity
												</th>
												<th scope='col' className='border-0 '>
													Delete
												</th>
											</tr>
										</thead>
										<tbody>
											{unit.map((el) => (
												<tr>
													<td> {el.size}</td>

													<td>{el.qty}</td>
													<td>
														 
														<Button
															theme='danger'
															onClick={(e) => {
																e.preventDefault();
																setUnit((prevState) =>
																	prevState.filter(
																		(prevItem) => prevItem !== el
																	)
																);
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
								<Col md='6' className='form-group'>
									<Button
										outline
										theme='primary'
										disabled={state.loading}
										onClick={(e) => {
											e.preventDefault();
											let temp = { ...data };
											temp["types"] = [
												...temp["types"],
												{ ...types, images: [...images], unit: [...unit] },
											];
											console.log(temp);
											// setTypes({...temp});
											setData({ ...temp });

											// if (singleSize.qty != 0 && singleSize.size != "") {
											//   setUnit([...unit, singleSize]);

											//   setSingleSize({
											//     size: "",
											//     qty: "",
											//   });
											// }
										}}
									>
										Next Type
									</Button> 
								</Col>
								<CardBody className='bg-light p-0 pb-3'>
									<table className='table table-light mb-0'>
										<thead className='thead-light'>
											<tr>
												<th scope='col' className='border-0 desktop'>
													color
												</th>
												<th scope='col' className='border-0 desktop'>
													desc
												</th>

												<th scope='col' className='border-0 '>
													Edit
												</th>
												<th scope='col' className='border-0 '>
													Delete
												</th>
											</tr>
										</thead>
										<tbody>
											{data["types"].map((el) => (
												<tr>
													<td> {el["color"]}</td>
													<td>some desc</td>

													<td>
													 
														<Button
															theme='warning'
															onClick={(e) => {
																e.preventDefault();
																setTypes(el);
																setImages(el["images"]);
																setUnit(el["unit"]);
															}}
														>
															Update
														</Button>
													</td>
													<td>
														{" "}
														<Button
															theme='danger'
															onClick={(e) => {
																e.preventDefault();
																let newType = data["types"].filter(
																	(somdata) => somdata !== el
																);
																setData({ ...data, types: [...newType] });
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
