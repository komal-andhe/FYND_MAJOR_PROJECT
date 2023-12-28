const express = require("express");
const app= express();
const cors= require('cors');
const dotenv = require('dotenv');
// const session =require('express-session')
// const passport =require('passport')
const ngoconnectionDb =require('./db.js');
const productsRouter = require('./routes/Products.js');
const categoriesRouter = require('./routes/Category.js');
const usersRouter = require('./routes/Users.js');
const authRouter = require('./routes/Authenticate.js');
const cartRouter = require('./routes/Cart.js');
const ordersRouter = require('./routes/Order.js');
// const port= 4500;

dotenv.config();

// data will go through these middllewares
app.use(express.json()); //to parse req.body
app.use(cors({
    exposedHeaders:['X-Total-Count']
}
));


// connecting mongodb to index
ngoconnectionDb();

// middleware for mandatory path/routes
app.use('/api/auth',require('./routes/auth'));
app.use('/products',productsRouter.router);
app.use('/categories',categoriesRouter.router);
app.use('/users',usersRouter.router);
app.use('/auth',authRouter.router);
app.use('/cart',cartRouter.router);
app.use('/orders',ordersRouter.router);


app.get('/',(req,res)=>{  
    res.send('Hello World!');
})




app.listen(process.env.PORT,()=>{
    console.log(`Server is active at ${process.env.PORT}`);
})