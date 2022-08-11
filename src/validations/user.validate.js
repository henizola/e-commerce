const Joi = require("joi");
const { roles } = require('../config/roles');
const { password, objectId } = require("./custom.validation");

 

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateUser = {
  body: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    role: Joi.string()
      .required()
      .valid(...roles),
  }),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};
 
module.exports = {
   
  getUser,
  updateUser,
  deleteUser,
  
};
 