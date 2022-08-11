const express = require("express");

const userValidation = require("../validations/user.validate");
const userController = require("../controllers/user.controller");
const validate = require("../middlewares/validate");
const auth = require("../middlewares/auth");
const upload = require("../middlewares/imageupload");
const router = express.Router();

router
  .route("/")
  .post(validate(userValidation.createUser), userController.createUser)
  .get(async (req, res) => {
    res.send("Working");
  });
router
  .route("/update")
  .get(validate(userValidation.getUser), userController.getUser)
  .post(
    upload("profile", "image/").single("profile"),
    validate(userValidation.updateUser),
    userController.updateUser
  )
  .delete(validate(userValidation.deleteUser), userController.deleteUser);
 

 
 
module.exports = router; //
