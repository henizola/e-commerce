const mongoose = require('mongoose');
 

const orderSchema = mongoose.Schema({
   // TID:{type:Number,required:[true,'there is no type no product(u son of a bitch  r u trying to cheat)']},//type index
    BID:{type:mongoose.Schema.Types.ObjectId, ref: "Users", },
    products:[
      {
      SID:{type:mongoose.Schema.Types.ObjectId, ref: "Users", required: [true,'seller must be known'] },//shop ID
      productName:{type:String ,required:true}, 
      price:{type:Number,required:true},//
      PID:{type:mongoose.Schema.Types.ObjectId, ref: "products", required: true },
      color:{type:String ,required:true},//black
      size:{type:String ,required:true},//tpe size id
      qty:{type:Number,required:true,min: [1, 'you can\'t order less than one product'],},
      
    }
  ],
    status:{
        type:String,
        enum: {
            values: ['pending', 'orderd','completed'],
            message: 'please send known status',
          },
          default:'pending',
    },
    address:{
      phone:{ type: String,required:true },
      country: { type: String ,required:true},
      city: { type: String,required:true },
      street: { type: String ,required:true},
      state: { type: String ,required:true},
    },
},{
    timestamps: true,
});
const Order = mongoose.model('Order',orderSchema);
module.exports =Order;