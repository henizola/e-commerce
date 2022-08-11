const { Product } = require("../models");

const createProduct = async (body) => {
	return Product.create(body);
};
const editProduct = async (body) => {
	return Product.findByIdAndUpdate(body["id"], body);
};
// db.BlogPost.updateMany({},
//     // Go through every comment and then find every reply whose `author` is 'Bar'
//     { $set: { 'comments.$[].replies.$[reply].author': 'Baz' } },
//     { arrayFilters: [{ 'reply.author': 'Bar' }] });
const getNestedProduct = async () => {
	// return  Product.find({'types._id':'62d7fafd6d3d6c29cadc56a2'});
	// return  Product.updateOne({'types._id':'62d807737e67cd18e052fb48'},{$set:{'types.$.color':"yellow"}});
	return Product.updateMany(
		{},
		{ $inc: { "types.$[].unit.$[element].available": -1 } },
		{ arrayFilters: [{ "element._id": "62d84893897a5ae36f83c99e" }] }
	);

	//     return  Product.findOneAndUpdate({_id:'62d803c69d162f1626942331'},{$push:{
	//         types:{
	//             "color": "green",
	//             "images": [
	//                 {
	//                   "name": "front",
	//                   "url": "0_0-2022-07-20T13-31-50.973Z-552005240Screenshot_1657550247.png",

	//                 }
	//               ],
	//               "unit": [
	//                 {
	//                   "size": "large",
	//                   "qty": 4,
	//                   "available": 3,

	//                 },
	//                 {
	//                     "size": "small",
	//                     "qty": 4,
	//                     "available": 3,

	//                   },
	//             ]
	//         }
	//     }
	// },

	//     // { upsert: true }
	//     );
};

const getMyproducts = (SID) => {
	return Product.find({ SID });
};
const deleteMyProduct = (_id, SID) => {
	return Product.deleteOne({ _id, SID });
};

const getHomeProducts = async () => {
	return Product.find();
};
module.exports = {
	createProduct,
	getNestedProduct,
	getMyproducts,
	editProduct,
	deleteMyProduct,
	getHomeProducts,
};
