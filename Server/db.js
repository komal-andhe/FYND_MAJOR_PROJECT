const mongoose=require('mongoose');
const dotenv = require('dotenv')


dotenv.config()
// connecting database to our website


const ngoconnectionDb= ()=>{

    mongoose.connect(process.env.MONGODB_URL)
    .then((data)=>{
            console.log(`Connected to Database`);
        })
        .catch((err)=>{
            console.log(err);
        }) 
    };
    



module.exports=ngoconnectionDb;
