const mongoose =require('mongoose')
const {Order,Product} = require('../models')


const createOrder=async(body )=>{
    // console.log(body);
  let found= await Promise.all (  body['products'].map( async(pro)=>{
        return  checkProduct({ _id:pro['PID'],'productName':pro['productName'],Colors:pro['color'],sizes:pro['size']}) ;
          }));
          
   if(found.length!= body['products'].length||found.includes(null)){
      let notfound =[];
       found.map((el,index)=>{
              if(el==null) notfound.push(body['products'][index])
       }
       );
          return {msg:"failed to create order because of those products",notfound};
   }
   found.map((el,index)=>{
       body['products'][index]['price']= el['price'];
}
);
   return Order.create(body);
}

const checkProduct=async(product={})=>{
     
 return Product.findOne(product).select({productName:1,price:1,thumbnail:1,sizes:1});
 
}
const getSellerOrders =async(body)=>{
  
    body['SID'] = mongoose.Types.ObjectId(body['SID']);
    // return Order.find({status:"pending",'products.SID':body['SID']},{_id:1,'products.$':1})
  return Order.aggregate([
    {
      "$unwind": "$products"
    },
    {
      $match: {
        "products.SID":body['SID']
      }
    },
    {
      $group: {
        _id: "$_id",
        
        // push: {
        //   $first: "$push"
        // },
        products: {
          $push: "$products"
        }
      }
    }
  ])
// return Order.aggregate([{
//     $match:{
//         status:'pending',
//         'products.SID':body['SID']
//     }
//   },]);
}
const getMyOrders =async(body)=>{
    return Order.find({BID:body['BID']});
}
// const checkProduct=async(productList=[])=>{
//     // "books.$.bookId"
//  return Product.find({
//     $or:productList
//  }).select({productName:1,price:1,thumbnail:1,sizes:1});
// //   Product.find({_id:{$in:productList}
//     //  });
// }
module.exports={
    createOrder,getSellerOrders,getMyOrders
}