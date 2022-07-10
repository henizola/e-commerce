import React from "react";
import { Switch } from "react-router-dom";
import RouteWithLayout from './components/routeWithLayout/RouteWithLayout';
import MainView from './layout/main/MainView'; //With navbar and footer
// import MinimalView from './layout/minimal/MinimalView'; //Without Navbar and Footer

// imported Screens
import Home from "./views/home/Home";
import Shop from "./views/shop/Shop";
import ProductDetail from "./views/productDetail/ProductDetail";


const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout exact path="/" component={Home} layout={MainView} />
      <RouteWithLayout exact path="/shop" component={Shop} layout={MainView} />
      <RouteWithLayout exact path="/product-detail/:product" component={ProductDetail} layout={MainView} />
    </Switch>
  );
};
export default Routes;
