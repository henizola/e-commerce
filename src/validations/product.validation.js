const Joi = require("joi");

const { roles } = require("../config/roles");
const { objectId } = require("./custom.validation");
const images = Joi.object().keys({
  name: Joi.string().required(),
  url: Joi.string().required(),
});
const unit = Joi.object().keys({
  size: Joi.string().required(),
  qty: Joi.number().min(0).required(),
  available: Joi.number().min(0).required(),
});

const types = Joi.object().keys({
  color: Joi.string().required(),
  images: Joi.array().items(images),
  unit: Joi.array().items(unit).min(1).required(),
});

const createProduct = {
  body: Joi.object({
    productName: Joi.string().required(),
    thumbnail: Joi.string().required(),
    SID: Joi.string().custom(objectId).required(),
    catagories: Joi.array().items(Joi.string()).min(1).required(),
    price: Joi.number().min(0).required(),
    Colors: Joi.array().items(Joi.string()).min(1).required(),
    sizes: Joi.array().items(Joi.string()).min(1).required(),
    images: Joi.array().items(images).min(1).required(),
    // types:Joi.array().items(types).min(1).required(),
  }),
};
const productUpdate = {
  body: Joi.object({
    id: Joi.string().custom(objectId).required(),
    productName: Joi.string().required(),
    thumbnail: Joi.string().required(),
    SID: Joi.string().custom(objectId).required(),
    catagories: Joi.array().items(Joi.string()).min(1).required(),
    price: Joi.number().min(0).required(),
    Colors: Joi.array().items(Joi.string()).min(1).required(),
    sizes: Joi.array().items(Joi.string()).min(1).required(),
    images: Joi.array().items(images).min(1).required(),
    // types:Joi.array().items(types).min(1).required(),
  }),
};
const ProductID = {
  query: Joi.object({
    pid: Joi.string().custom(objectId).required(),
  }),
};
module.exports = {
  createProduct,
  ProductID,
  productUpdate,
};
