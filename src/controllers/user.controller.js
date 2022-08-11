const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { userService } = require("../services");

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.send(user);
});

const getAllUser = catchAsync(async (req, res) => {
  const user = await userService.getByYear();
  res.send(user);
});

const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.query.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  res.send(user);
});

const updateUser = catchAsync(async (req, res) => {
  if (req.file) {
    req.body["profile"] ='profile/'+req.file.filename;
  }
  const user = await userService.updateUserById(req.body);
  res.send(user);
});

const deleteUser = catchAsync(async (req, res) => {
  await userService.deleteUserById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUser,
  //reporting
 
};
