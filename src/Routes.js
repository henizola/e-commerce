import React from "react";
import { Switch } from "react-router-dom";
import RouteWithLayout from "./components/routeWithLayout/RouteWithLayout";
import MainView from "./layout/main/MainView"; //With navbar and footer
import About from "./views/about/About";
// import MinimalView from './layout/minimal/MinimalView'; //Without Navbar and Footer

// imported Screens
import Blog from "./views/blog/Blog";
import Contact from "./views/contact/Contact";
import Home from "./views/home/Home";
import Signup from "./views/membership/Signup";
import ProductDetail from "./views/productDetail/ProductDetail";
import Shop from "./views/shop/Shop";
import SignIn from "./views/membership/signin.js/signin";
import Checkout from "./components/Checkouot/checkout.component";
const Routes = () => {
	return (
		<Switch>
			<RouteWithLayout exact path='/' component={Home} layout={MainView} />
			<RouteWithLayout path='/blog' component={Blog} layout={MainView} />
			<RouteWithLayout path='/blog/:id' component={Blog} layout={MainView} />
			<RouteWithLayout exact path='/shop' component={Shop} layout={MainView} />
			<RouteWithLayout
				exact
				path='/sign-up'
				component={Signup}
				layout={MainView}
			/>
			<RouteWithLayout
				exact
				path='/signin'
				component={SignIn}
				layout={MainView}
			/>
			<RouteWithLayout
				exact
				path='/about'
				component={About}
				layout={MainView}
			/>
			<RouteWithLayout
				exact
				path='/contact'
				component={Contact}
				layout={MainView}
			/>
			<RouteWithLayout
				exact
				path='/product-detail/:product'
				component={ProductDetail}
				layout={MainView}
			/>
			<RouteWithLayout
				exact
				path='/checkout'
				component={Checkout}
				layout={MainView}
			/>
		</Switch>
	);
};
export default Routes;
