import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Components/Product/productSlice";
import authReducer from '../Components/Signup/authSlice';
import cartReducer from '../Components/cart/cartSlice';
import orderReducer from '../Components/order/orderSlice';
import userReducer from '../Components/user/userSlice'

export const store =configureStore({
    reducer:{
       product:productReducer,
       auth: authReducer ,
       cart: cartReducer,
       order: orderReducer,
       user: userReducer,
    },
});