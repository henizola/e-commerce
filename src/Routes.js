import React from "react";
import About from "./views/about/About";

import { Navigate, Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkouot/checkout.component";
import Summary from "./components/Summary/summary.component";
import routes from "./dashboard/routes";
import Blog from "./views/blog/Blog";
import Contact from "./views/contact/Contact";
import Home from "./views/home/Home";
import SignIn from "./views/membership/signin.js/signin";
import Signup from "./views/membership/Signup";
import ProductDetail from "./views/productDetail/ProductDetail";
import Shop from "./views/shop/Shop";

const RoutesContainer = () => {
	return (
		<Routes>
			<Route path='*' element={<Navigate to='/' replace />} />
			{routes.map((route, index) => {
				return (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						element={
							<route.layout>
								<route.component />
							</route.layout>
						}
					/>
				);
			})}

			<Route exact path='/' element={<Home className='black' />} />
			<Route path='/blog' element={<Blog />} />
			<Route path='/blog/:id' element={<Blog />} />
			<Route exact path='/shop' element={<Shop />} />
			<Route exact path='/sign-up' element={<Signup />} />
			<Route exact path='/signin' element={<SignIn />} />
			<Route exact path='/about' element={<About />} />
			<Route exact path='/contact' element={<Contact />} />
			<Route
				exact
				path='/product-detail/:product'
				element={<ProductDetail />}
			/>
			<Route exact path='/checkout' element={<Checkout />} />
			<Route exact path='/summary' element={<Summary />} />
		</Routes>
	);
};
export default RoutesContainer;
