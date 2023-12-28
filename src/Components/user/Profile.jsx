import React from 'react'
import Navbar from '../Navbar/Navbar'
import UserProfile from './UserProfile'

export default function () {
  return (
    <> <div className='pt-2'>
       <Navbar/>
       <div className='pt-10'>
        <h1 className='px-28 pt-10  max-auto text-2xl font-medium'>My Profile</h1>
        <UserProfile/>
        </div>
        </div> 

    </>
  )
}