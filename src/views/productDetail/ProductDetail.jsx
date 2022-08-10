import React, { Component, useState, useEffect } from "react";
import "./ProductDetail.css";
import "./Modal.css";
import GuideModal from "../../components/productDetail/modal/GuidModal";
import RecomendationModal from "../../components/productDetail/modal/RecomendationModal";
import { products } from "../../data/data";
import { useParams } from "react-router-dom";
import { apiFetch } from "../../api/ApiCall";
import { IMAGEENDPOINT } from "../../api/Api";
import { useDispatch } from "react-redux";
import { putToCart } from "../../store/cart";
import toast, { Toaster } from "react-hot-toast";
const ProductDetail = () => {
	const params = useParams();
	const [color, setColor] = useState("Black");
	const [item, setItem] = useState({});
	const [main, setMain] = useState("");
	const dispatch = useDispatch();
	useEffect(() => {
		getProducts();
	}, []);

	const getProducts = () => {
		apiFetch(
			"get",
			"/product/",
			(data) => {
				setItem(data.find((d) => d.id === params.product));
				setMain(
					`${IMAGEENDPOINT}${
						data.find((d) => d.id === params.product).thumbnail
					}`
				);
				console.log(
					"ola",
					data.find((d) => d.id === params.product)
				);
			},
			(err) => {
				console.log(err);
			}
		);
	};

	const addToCart = (product) => {
		dispatch(putToCart(product));
		toast.success("Product Added To Cart", {
			position: "top-right",
		});
	};

	return (
		<div id='top'>
			<Toaster />
			<div className='no-gutters main pb-5 text-white sticky'>
				<div className='pt-3 pl-5'>
					{item.productName} > <a href='/shop'>VIEW ALL ITEMS</a>
				</div>
				<br />
				<div className='row no-gutters'>
					<div className='col-1' id='orange_main'>
						{item &&
							item.types &&
							item.types[0].images.map((item) => (
								<img
									src={`${IMAGEENDPOINT}${item.url}`}
									height='100px'
									width='100px'
									alt='main_image'
									className='alt-imgs'
									onClick={() => {
										setMain(`${IMAGEENDPOINT}${item.url}`);
									}}
								/>
							))}
					</div>

					<div className='col-6 img-container' id='orange_list'>
						<img
							src={main}
							height='400px'
							width=''
							className='mx-auto'
							id='orange1'
							alt='main_image'
						/>
					</div>

					<div className='col-5'>
						<div className='pt-1'>{item.catagories} </div>
						<div
							className='pt-1'
							style={{
								fontWeight: "400",
								fontSize: 25,
								fontFamily: "Prata",
								letterSpacing: "0.05em",
							}}
						>
							{item.productName}
						</div>
						<div
							style={{
								fontWeight: "bold",
								fontSize: 18,
								fontFamily: "Montserrat",
							}}
						>
							<b>USD {item.price}</b>
						</div>
						<div className='pt-3'>
							Selected Color :<b> {color}</b>
						</div>
						<div>
							<div className='inline text-center'>
								<div
									onClick={() => {
										setColor("Black");
									}}
								>
									<br />
									Black
								</div>
							</div>
							<div
								className='inline text-center'
								style={{ marginLeft: "20px" }}
							>
								<div
									onClick={() => {
										setColor("White");
									}}
								>
									<br />
									White
								</div>
							</div>
						</div>
						<div className='pt-3'>
							<div className='inline'>
								<div className='dropdown' style={{ borderRadius: 0 }}>
									<a
										className='btn border text-white dropdown-toggle'
										href='#'
										role='button'
										id='dropdownMenuLink'
										data-toggle='dropdown'
										aria-haspopup='true'
										aria-expanded='false'
										style={{ width: 160 }}
									>
										Select a size
									</a>

									<div
										className='dropdown-menu border'
										aria-labelledby='dropdownMenuLink'
										style={{ backgroundColor: "black" }}
									>
										<a className='dropdown-item text-white' href='#'>
											2 - One Left
										</a>
										<a className='dropdown-item text-white' href='#'>
											3 - Sold Out
										</a>
										<a className='dropdown-item text-white' href='#'>
											4 - Sold Out
										</a>
										<a className='dropdown-item text-white' href='#'>
											5 - Sold Out
										</a>
									</div>
								</div>
							</div>
							<div className='inline pl-5 pt-5'>
								<a
									href='#'
									data-toggle='modal'
									data-target='.bd-example-modal-xl'
									className='mt-5 pt-5'
								>
									SIZE RECOMMENDATION
								</a>
								<br />
								<a
									href='#'
									data-toggle='modal'
									data-target='.bd-example-modal-xl1'
								>
									SIZE GUIDE
								</a>
							</div>
						</div>
						<div className='pt-4 my-2'>
							<button
								className='btn text-white border inline'
								style={{ borderRadius: 0 }}
								onClick={() => addToCart(item)}
							>
								ADD TO SHOPPING CART
							</button>
							<i className='fa fa-heart inline border p-3 ml-4'></i>
						</div>
						<div className='pt-4'>
							<button
								className='btn text-white border inline'
								style={{ borderRadius: 0 }}
							>
								AVAILABILITY IN BOTIQUE
							</button>
						</div>
						<div className='pt-4' style={{ fontSize: 18 }}>
							Share on :<i className='fa fa-facebook-f ml-4'></i>
							<i className='fa fa-twitter ml-4'></i>
							<i className='fa fa-envelope ml-4'></i>
						</div>
					</div>
				</div>
			</div>
			{/* <div
				className='pt-3 pl-5'
				style={{ backgroundColor: "#fff", padding: "0px 0" }}
			>
				<div
					style={{
						fontFamily: "Prata",
						letterSpacing: "0.05em",
						fontSize: 20,
						color: "#000",
						marginLeft: "100px",
					}}
				>
					About {item.name}
				</div>
				<div
					style={{
						fontFamily: "Montserrat",
						letterSpacing: "0.2em",
						fontSize: 16,
						color: "#000",
						marginLeft: "100px",
					}}
				>
					Style: 0911A11200C0452323
				</div>
			</div> */}

			{/* <div className='row no-gutters pt-4' style={{ backgroundColor: "#fff" }}>
				<div className='col-lg-5 offset-1'>
					<div className='accordion' id='accordionExample'>
						<div className='card'>
							<div className='card-header' id='headingOne'>
								<h2 className='mb-0'>
									<button
										className='btn btn-link'
										type='button'
										data-toggle='collapse'
										data-target='#collapseOne'
										aria-expanded='true'
										aria-controls='collapseOne'
										style={{ backgroundColor: "white" }}
									>
										<b>
											Shipping & Returns &nbsp;&nbsp;
											<i className='fa fa-angle-down'></i>
										</b>
									</button>
								</h2>
							</div>
							<div
								id='collapseOne'
								className='collapse'
								aria-labelledby='headingOne'
								data-parent='#accordionExample'
							>
								<div className='card-body'>{item.info}</div>
							</div>
						</div>
						<div className='card'>
							<div className='card-header' id='headingTwo'>
								<h2 className='mb-0'>
									<button
										className='btn btn-link collapsed'
										type='button'
										data-toggle='collapse'
										data-target='#collapseTwo'
										aria-expanded='false'
										aria-controls='collapseTwo'
									>
										<b>
											RETURN & REFUND POLICY &nbsp;&nbsp;
											<i className='fa fa-angle-down'></i>
										</b>
									</button>
								</h2>
							</div>
							<div
								id='collapseTwo'
								className='collapse'
								aria-labelledby='headingTwo'
								data-parent='#accordionExample'
							>
								<div className='card-body'>
									{/* <ul>
										<li>
											{" "}
											Longue Saison nylon men’s vest with direct injection down
											quilting
										</li>
										<li> Front with metal zipper closure</li>
										<li> Pocket with reverse coil zipper closure</li>
										<li> Cased elastic armhole</li>
										<li> Felt Moncler logo</li>
										<li> Short length</li>
									</ul> 
									{item.return}
								</div>
							</div>
						</div>
						<div className='card'>
							<div className='card-header' id='headingThree'>
								<h2 className='mb-0'>
									<button
										className='btn btn-link collapsed'
										type='button'
										data-toggle='collapse'
										data-target='#collapseThree'
										aria-expanded='false'
										aria-controls='collapseThree'
									>
										<b>
											SHIPPING INFO &nbsp;&nbsp;
											<i className='fa fa-angle-down'></i>
										</b>
									</button>
								</h2>
							</div>
							<div
								id='collapseThree'
								className='collapse'
								aria-labelledby='headingThree'
								data-parent='#accordionExample'
							>
								<div className='card-body'>{item.shipping}</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className='col-lg-6'
					style={{
						paddingLeft: 100,
						paddingRight: 75,
						paddingTop: 15,
						paddingBottom: 25,
					}}
				>
					<div></div>
					<p className='pt-3'>
						Due to the current situation, the shipment of store.moncler.com
						orders will be delayed. We apologise for the inconvenience.{" "}
					</p>
					<p>
						Return service: you have 20 days from delivery to follow our quick
						and easy return procedure. Alternatively, visit one of our Moncler
						Boutiques within the country of shipping for a return. For further
						information visit the{" "}
						<b>
							<u>Returns and Refunds</u>
						</b>{" "}
						section.
						<br />
						<br />
						Thanks to the "Pick up in Boutique" option you can choose to pick up
						your order in one of the Moncler boutiques. This service is
						complimentary.
					</p>
					<div className='pt-3'>{/* <b>Product Advice</b> </div>
					<p className='pt-3'>
						Our style advisors are available for tips and information about this
						item <b>Mon-Fri, from 9:00am to 6:00pm EST</b>
					</p>
					<div className='pt-2'>
						<p>
							Call Us: <u>+1 888 320 9162</u>
						</p>
					</div>
				</div>
			</div> */}
			{/* <div className='mb-4' style={{ backgroundColor: "#fff" }}>
				<a
					className='btn text-white btn-dark border inline st_btn_secondary'
					style={{ marginLeft: 100, padding: 15 }}
				>
					SHOP NOW
				</a>
			</div> */}
			<hr />
			{/* <RecomendationModal />
			<GuideModal /> */}
		</div>
	);
};

export default ProductDetail;
