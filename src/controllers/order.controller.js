const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { oredrService } = require("../services");


const createOrder=catchAsync(async(req,res)=>{
       const order = await oredrService.createOrder(req.body);
       res.send(order);
})
const getSellerOrders=catchAsync(async(req,res)=>{
       const orders = await oredrService.getSellerOrders(req.body);
       
       res.send(orders);
})
const getMyOrders=catchAsync(async(req,res)=>{
       const orders = await oredrService.getMyOrders(req.body);
       
       res.send(orders);
})



module.exports ={createOrder,getSellerOrders,getMyOrders};