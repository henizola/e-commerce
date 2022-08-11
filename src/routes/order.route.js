const express = require('express')
const auth =require('../middlewares/auth')
const {orderController}=require('../controllers')
const router = express.Router();

router.route('/').post(
     // auth([], ["body", "BID"]),
    orderController.createOrder);

router.route('/seller').get(
    // auth([], ["body", "SID"]),
    orderController.getSellerOrders);
    router.route('/my-orders').get(
        // auth([], ["body", "BID"]),
        orderController.getMyOrders);
// router.route('/seller').get(auth([], ["body", "SID"]),orderController.getSellerOrders);
module.exports = router;