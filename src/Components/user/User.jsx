import React from 'react'
import Navbar from '../Navbar/Navbar'
import UserOrders from './UserOrders'

export default function () {
  return (
    <> <div className='pt-2'>
       <Navbar/>
       <div className='pt-10'>
        <h1 className='max-auto text-2xl'>My Orders</h1>
        <UserOrders/>
        </div>
        </div> 

    </>
  )
}
