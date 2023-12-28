import React from 'react'
import AdminProductList from './AdminProductList'
import Navbar from '../Navbar/Navbar'
export default function AdminHome() {
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
          <AdminProductList/>
        </div>
      </div>
    </div>
  </>
  )
}
