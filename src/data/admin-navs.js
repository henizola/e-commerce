const func = () => {
	return [
		{
			title: "Dashboard",
			to: "/admin/overview",
			htmlBefore: '<i class="material-icons">bar_chart</i>',
			htmlAfter: "",
		},
		{
			title: "Add Product",
			htmlBefore: '<i class="material-icons">add_card</i>',
			to: "/admin/register-product",
		},
		{
			title: "My Products",
			htmlBefore: '<i class="material-icons">inventory</i>',
			to: "/admin/products",
		},
		{
			title: "Orders",
			htmlBefore: '<i class="material-icons">add</i>',
			to: "/admin/orders",
		},
	];
};

export default func;
