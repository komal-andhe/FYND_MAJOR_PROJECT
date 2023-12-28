const mongoose =require('mongoose');

// schema for storing user data

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }

},{timestamps:true});

//creating collections

const userDetails=mongoose.model('userDetails',userSchema);
module.exports=userDetails;



