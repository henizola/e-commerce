import React from "react";
// Layout Types
import { DefaultLayout } from "./layouts";
import NormalLayout from "./layouts/Normal";
// import DocProfile from "./Views-Backup/Profile";
// Route Views

import Activate from "./views/Activate";
import AdminOverview from "./views/AdminOverview";
import ChangePassword from "./views/ChangePassword";
import CreateAdminProfile from "./views/CreateAdminProfile";
import EditProduct from "./views/editProduct";
import ForgotPassword from "./views/ForgotPassword";
import LogIn from "./views/Login";
import Orders from "./views/Orders";
import Products from "./views/Products";
import RegisterProduct from "./views/RegisterProduct";
import ResetPassword from "./views/ResetPassword";

const routes = [
	{
		path: "/admin",
		exact: true,
		layout: NormalLayout,
		component: () => <LogIn />,
	},
	{
		path: "/user/forgot-password",
		exact: true,
		layout: NormalLayout,
		component: () => <ForgotPassword />,
	},

	{
		path: "/user/reset/:id",
		exact: true,
		layout: NormalLayout,
		component: () => <ResetPassword />,
	},
	{
		path: "/admin/change-password/",
		exact: true,
		layout: NormalLayout,
		component: () => <ChangePassword />,
	},
	{
		path: "/user/activate-account/:id",
		exact: false,
		layout: NormalLayout,
		component: () => <Activate />,
	},
	{
		path: "/admin/overview",
		layout: DefaultLayout,
		component: AdminOverview,
	},
	{
		path: "/admin/register-product",
		layout: DefaultLayout,
		component: RegisterProduct,
	},
	{
		path: "/admin/products",
		layout: DefaultLayout,
		component: Products,
	},

	{
		path: "/admin/edit-products",
		layout: DefaultLayout,
		component: EditProduct,
	},
	{
		path: "/admin/create-admin-profile",
		layout: DefaultLayout,
		component: CreateAdminProfile,
	},

	{
		path: "/admin/orders",
		layout: DefaultLayout,
		component: Orders,
	},

	// {
	// 	path: "/admin/profile",
	// 	layout: DefaultLayout,
	// 	component: DocProfile,
	// },
];
export default routes;
