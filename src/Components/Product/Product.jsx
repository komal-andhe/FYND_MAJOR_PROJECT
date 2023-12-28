import Navbar from '../Navbar/Navbar';
// import { Navbar } from '@material-tailwind/react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import ProductForm from './ProductForm';
// import ProductCardList from './ProductCardList';
// import AddToCart from './AddToCart';
import ProductList from '../Product/ProductList';
// import { Link } from 'react-scroll';


function Product() {
  // checking session token  
  const navigate = useNavigate();

  // useEffect(() => {
  //   const authenticationToken = sessionStorage.getItem('auth-token');
  //   if (!authenticationToken) {
  //     navigate('/signup');
  //   }
  // })

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // const handleAddToCart = (selectedProduct) => {
  //   setCartItems([...cartItems, selectedProduct]);
  // };

  // const handleProductSubmit = (newProduct) => {
  //   setProducts([...products, newProduct]);
  // };

  return (
    <>
      <div>
        <div>
          {/* <Navbar /> */}
        </div>

        <div className='product_container '>
          <div className='product_page '>
            <Navbar/>
            {/* <ProductForm onSubmit={handleProductSubmit} /> */}
            {/* <ProductCardList products={products} onAddToCart={handleAddToCart} /> */}
            {/* <AddToCart cartItems={cartItems} /> */}
            <ProductList/>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Product