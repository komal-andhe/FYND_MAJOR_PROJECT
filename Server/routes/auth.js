const express =require('express');
const app= express();
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken')
const {body,validationResult}= require('express-validator');
const userDetails=require('../models/user');
const router=express.Router();
const dotenv=require('dotenv');

// configuration of dotenv
dotenv.config();

// getting jwt secret key 
const JWT_SECRET=process.env.JWT_SECRET;

// router.get('/hello',(req,res)=>{
//     res.send('hello');
// })

// creating url and validation for signup form input
router.post('/register',[
    body('role',"Please select a role"),
    body('name',"Please enter name of atleast 3 characters").isLength({min:3}),
    body('email',"Please enter valid email").isEmail(),
    body('phone',"Please enter 10 digits number only").isLength({min:10}),
    body('password',"Please enter password of atleast 8 characters").isLength({min:8}),    
],async(req,res)=>{
    const error=validationResult(req);
    if(!error.isEmpty( )){
        return res.status(400).json({error:error.array()})
    } 
    try{
        const existingEmail= await userDetails.findOne({email:req.body.email});
        if(existingEmail){
            return res.status(400).json({error:'Email id already exist'});
        }
        // adding salting for security
        const salt=await bcryptjs.genSalt(10);
        const hash= await bcryptjs.hash(req.body.password,salt);

        // data to be stored in backend
        const newUser=await userDetails.create({
            role:req.body.role,
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            password:req.body.password,
            createdAt:Date(),
            
        })

        // // saving data in post man or db
        //  const val =await newUser.save();
        //  res.json(val);
        
        // creating payload
        const payload={
            user:{
                id:newUser.id
            }
        }
        // JWT signature in json format 
        const authtoken=jwt.sign(payload,JWT_SECRET);
        res.json({authtoken});
    }
    catch(e){
        console.log(e);
        return res.status(500).send('Internal server error')
    }



})

module.exports=router;