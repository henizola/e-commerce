const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const productDetail=mongoose.Schema({
    color:{type:String ,required:true},//black
    images:[
        {name:{type:String ,required:true},url:{type:String ,required:true}}
    ],
    
    unit:[
        {
            size:{type:String ,required:true},
            qty:{type:Number,required:true},
            available:{type:Number,required:true},
          },
    ]
   
});
const productShema =mongoose.Schema({
    productName:{type:String ,required:true}, 
     thumbnail:{type:String ,required:true},
     SID:{type:mongoose.Schema.Types.ObjectId, ref: "Users", required: true },//shop ID
     catagories:[{type:String ,required:true}],//jacket,women
     price:{type:Number,required:true},//
     Colors:[{type:String ,required:true}],
     sizes:[{type:String ,required:true}],
     images:[
        {name:{type:String ,required:true},url:{type:String ,required:true}}
    ],
     },{
        timestamps: true,
      });
// const productShema = mongoose.Schema({
//     productName:{type:String ,required:true}, 
//     thumbnail:{type:String ,required:true},
//     SID:{type:mongoose.Schema.Types.ObjectId, ref: "Users", required: true },//shop ID
//     catagories:[{type:String ,required:true}],//jacket,women
//     price:{type:Number,required:true},//
//     types: [productDetail],
// },{
//     timestamps: true,
//   })

// add plugin that converts mongoose to json
 
productShema.plugin(toJSON);
productShema.plugin(paginate);
const product =mongoose.model('product',productShema);
module.exports = product;
 