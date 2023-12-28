const User = require("../models/UserModel");
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');

// configuration of dotenv
dotenv.config();

// getting jwt secret key 
const JWT_SECRET=process.env.JWT_SECRET;

// create user controller
exports.createUser = async (req, res) => {
    try{
          // Generate salt
        // const salt = await bcryptjs.genSalt(10);
        // // Hash the password using the generated salt
        // const hashedPassword = await bcryptjs.hash(req.body.password, salt);

        const user = await User(req.body);
        await user.save();
        
 
        const payload={
            newuser:{
                id:user.id
            }
        }

        // JWT signature in json format 
        const authtoken=jwt.sign(payload,JWT_SECRET);
        res.status(201).json({authtoken});

    }catch(err){
        res.status(400).json(err);
    }

  };


// checkuser
exports.loginUser = async (req, res) => {

    try{
        const user = await User.findOne({email:req.body.email}).exec();
        console.log({user})
        if(!user){
            res.status(401).json({message:'no such user email'})
        }else if(user.password===req.body.password){
            res.status(201).json({id:user.id, role:user.role}); 
        }else{
            res.status(401).json({message:'invalid credentials'});
        } 
    }catch(err){
        res.status(400).json(err);
    }

}  