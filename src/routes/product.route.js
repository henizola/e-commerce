const express = require("express");

const { productValidation } = require("../validations");
const { productController } = require("../controllers");
const validate = require("../middlewares/validate");
const auth = require("../middlewares/auth");
const upload = require("../middlewares/imageupload");
const router = express.Router();

router
  .route("/")
  .post(
    upload("images", "image/").any(),
    productController.fileStructure,
    auth(["Admin"], ["body", "SID"]),
    validate(productValidation.createProduct),
    productController.createProduct
  )
  .get(productController.getHomeProducts);

router.route("/my-product").get(auth([], []), productController.getMyproducts);
router.route("");
router
  .route("/update")
  .post(
    upload("images", "image/").any(),
    productController.fileStructure,
    auth([], ["body", "SID"]),
    validate(productValidation.productUpdate),
    productController.editProduct
  );
router
  .route("/delete-my-product")
  .get(
    validate(productValidation.ProductID),
    auth(["Admin"], []),
    productController.deleteMyProduct
  );

module.exports = router; //
