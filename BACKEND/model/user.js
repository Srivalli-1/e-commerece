const mongoose =require('mongoose')

const userSchema = new mongoose.Schema({
    name:{type:String,Required:true},
    email:{type:String,required:true,unique:true},
    phonenumber:{type:Number},
    password:{type:String,required:true,minlenght:4},
    avatar:{
        id:{type:String},
        url:{type:String}
    },
    address:{
        {
            country:{type:String,required:true},
            city:{type;String , required:true},
            address1:{type:String},
            address2:{type:String},
            pincode:{type:Number,required:true}
        }
    },
    role:{type:String,defaul


    }
})