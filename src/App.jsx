import { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchItemsByUserIdAsync } from './Components/cart/cartSlice'
import { selectLoggedInUser } from './Components/Signup/authSlice'
import './App.css'
import Home from './Components/AllCompontents/Home'
import Product from './Components/Product/Product'
import Login from './Components/Login/Login'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Cart from './Components/cart/Cart'
import Checkout from './Components/checkout/Checkout'
import ProductDetail from './Components/Product/ProductDetail'
import SignIn from './Components/Signup/SignIn'
import Protected from './Components/Signup/Protected'
import PageNotFound from './app/404'
import OrderSuccessPage from './Components/order/OrderSuccessPage'
import User from './Components/user/User'
import Profile from './Components/user/Profile'
import { fetchLoggedInUserAsync } from './Components/user/userSlice'
import Logout from './Components/Signup/Logout'
import ForgotPassword from './Components/Signup/ForgotPassword'
import ProtectedAdmin from './Components/Signup/ProtectedAdmin'
import AdminHome from './Components/admin/AdminHome'
import AdminProductDetail from './Components/admin/AdminProductDetail'
import DonateProductForm from './Components/Product/DonateProductForm'
import AdminOrders from './Components/admin/AdminOrders'

function App() {
  
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id));
      dispatch(fetchLoggedInUserAsync(user.id))
    }
  },[dispatch,user]);

  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Protected><Home/></Protected>}/>
        <Route path='/product' element={<Protected><Product/></Protected>}/>
        <Route path='/admin/product' element={<AdminHome/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/cart' element={<Protected> <Cart/> </Protected>}/>
        <Route path='/checkout' element={<Protected> <Checkout/> </Protected>}/>
        <Route path='/product-detail/:id' element={<Protected> <ProductDetail/> </Protected>}/>
        <Route path='/admin/product-detail/:id' element={ <AdminProductDetail/> }/>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/order-success/:id' element={<OrderSuccessPage/>}/>
        <Route path='/orders' element={<User/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/donation-form' element={<Protected><DonateProductForm/></Protected>}/>
        <Route path='/admin/orders' element={<AdminOrders/>}/>

       </Routes>
      </BrowserRouter>
      {/* <Home/> */}
      {/* <LandingPage/> */}
      {/* <Scontent/> */}
    </>
  )
}

export default App
