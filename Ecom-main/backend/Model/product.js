const mongoose =require('mongoose');
const productSchema= new mongoose.schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    email:{
        type:String, 
        required:true, 
        match :[/.+@.+\..+/]
    },
    images:{
        type:[String],
        required:[true]
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    cart:[
    {
      productId:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"schema",
          required  :true,
      },
      quantity:{
        type: Number,
        required:true,
        min:1,
        default:1,

      },
    },
   ],
   cart:[
    {
      productid:{
        type:String,
        required:true,
        unique:true,
      },
      quantity:{
        type:Number,
        required:true,
        min:0,
      },
    },
],
},{timestamps:true}


)
const Product=mongoose.model('Product',productSchema);
module.exports=Product;