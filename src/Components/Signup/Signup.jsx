// import Navbar from '../Navbar/Navbar';
// // import { Navbar } from '@material-tailwind/react';
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Register } from 'react-scroll/modules/mixins/scroller';
// import { api_url } from '../../config';

// // import e from 'express';

// // creating form
// function Signup() {

// //   const[role,setRole]=useState();
// //   const[name, setName]=useState();
// //   const[email, setEmail]=useState();
// //   const[phone, setPhone]=useState();
// //   const[password, setPassword]=useState();
// //   const[showerr, setShowerr]=useState();
  
// //   const navigate=useNavigate()

// //  const Register=async(e)=>{
// //       e.preventDefault();


// // // api call
// //   const response=await fetch(`${api_url}/api/auth/register`,{
// //     method:'POST',
// //     headers:{
// //       'content-type':'application/json'
// //     },
// //     // to get data in backend
// //     body:JSON.stringify({
// //        role:role,
// //        name:name,
// //        email:email,
// //        phone:phone,
// //        password:password,
       
// //     })
// //   });
// //   //  converting response data into json
// //   const json=await response.json();
// //   console.log('json data',json); 

// // // checking token availability and navigating to products 
// //   if(json.authtoken){
// //     sessionStorage.setItem('auth-token', json.authtoken);
// //     sessionStorage.setItem('name',name); 
// //     navigate('/product');
// //     window.location.reload();

// //   }
// // }


//   return (
//     <>
    
//     <Navbar/>
//     <div className="signup_container">
//       <div className="signup_main grid justify-items-center items-center py-20">
//       <div className="signup_grid">
//         <h1>Sign Up</h1>
//       </div>
//       <div className="signup_text">
//         Already a member? <Link className='signuptologin text-blue-600 underline' to='/login'>Login</Link>
        
//       </div>

//     {/* creating form & onsubmit going to Register() */}
//     <div className="signup_form">
//     <form onSubmit={Register}>
//     {/* <form> */}

//      {/* Role */}
//      <div className="form-group">
//       <label htmlFor='role'>SignUp Role</label>
//       <select name='role' id='role' className='form-group' value={role} onChange={(e)=>setRole(e.target.value)}>
//         <option value=''>Select Role</option>
//         <option value='user'>User</option>
//         <option value='ngo'>NGO</option>
//         <option value='admin'>Admin</option>
//       </select>
//      </div>

//       {/* Name */}
//   <div className="mb-3">
//     <label for="name" class="form-label">Enter Name</label>
//     <input type="name" class="form-control" id="name" value={name} onChange={(e)=>setName(e.target.value)} aria-describedby="helpbyId"/>
//     {/* <input type="name" class="form-control" id="name" value={name}  aria-describedby="helpbyId"/> */}
//   </div>

//      {/* Email */}
//   <div className="mb-3">
//     <label for="email" class="form-label">Enter Email</label>
//     <input type="email" class="form-control" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
//     {/* <input type="email" class="form-control" id="email" value={email} /> */}
//   </div>
  
//   {/* Phone */}
//   <div className="mb-3">
//     <label for="phone" class="form-label">Enter Contact</label>
//     <input type="text" class="form-control" id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} aria-describedby="helpbyId"/>
//     {/* <input type="text" class="form-control" id="phone" value={phone} aria-describedby="helpbyId"/> */}
//   </div>

//   {/* Password */}
//   <div className="mb-3">
//     <label for="password" class="form-label">Enter Password</label>
//     <input type="password" class="form-control" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} aria-describedby="helpbyId"/>
//     {/* <input type="password" class="form-control" id="password" value={password} aria-describedby="helpbyId"/> */}
//   </div>
 
//   {/* Submit Button */}
//   <div className='pb-20'>
//     <button type="submit" className="btn btn_signup  pushable mt-4">
//       <span className='front'>Submit</span>
//     </button>
//   </div>
         
// </form>
// </div>
// </div>
// </div>
//     </>
//   )
// }

// export default Signup