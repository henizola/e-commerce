const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { productService } = require("../services");
const fileStructure = catchAsync(async (req, res, next) => {
  console.log(req.body);

  if (req.files) {
    req.files.map((file) => {
      if (file["fieldname"].split("_").length > 1) {
        const splt = file["fieldname"].split("_");
        req.body["images"][splt[1]]["url"] = file["filename"];
      } else {
        req.body[file["fieldname"]] = file["filename"];
      }
      return "";
    });
  }
  // console.log('inside file structure',req.body['types'][0]);
  // console.log(req.body['types'][0]);
  next();
});
const createProduct = catchAsync(async (req, res) => {
  const product = await productService.createProduct(req.body);
  res.send(product.toJSON());
});

const getNestedProduct = catchAsync(async (req, res) => {
  const product = await productService.getNestedProduct();
  res.send(product);
});
const getMyproducts = catchAsync(async (req, res) => {
  const products = await productService.getMyproducts(req.user["_id"]);
  res.send(products);
});
const editProduct = catchAsync(async (req, res) => {
  const product = await productService.editProduct(req.body);
  res.send(product);
});
const deleteMyProduct = catchAsync(async (req, res) => {
  const deletetd = await productService.deleteMyProduct(
    req.query["pid"],
    req.user["_id"]
  );
  console.log();

  if (deletetd.deletedCount != 0) return res.send(deletetd);
  res.status(403).send("failed to delete");
});

const getHomeProducts = catchAsync(async (req, res) => {
  const product = await productService.getHomeProducts();
  res.send(product);
});

module.exports = {
  createProduct,
  fileStructure,
  getNestedProduct,
  getMyproducts,
  editProduct,
  deleteMyProduct,
  getHomeProducts,
};
