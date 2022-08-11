const express = require("express");

const userRoute = require("./user.route");
const authRoute = require("./auth.route");
////////////////////////////////////////////////////////////////
 const productRoute =require('./product.route')
  const orderRoute = require('./order.route')
const router = express.Router();
const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/product",
    route: productRoute,
  },
  {
    path: "/order",
    route: orderRoute,
  },

];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
 
module.exports = router;
