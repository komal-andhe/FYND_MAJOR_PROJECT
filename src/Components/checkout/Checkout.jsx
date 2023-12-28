import React, { useState } from "react";
import { Link, Navigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectItems,updateCartAsync,deleteItemFromCartAsync} from "../cart/cartSlice";
import { useForm } from 'react-hook-form';
import { updateUserAsync } from "../user/userSlice";
import { createOrderAsync, selectCurrentOrder } from "../order/orderSlice";
import { selectUserInfo } from "../user/userSlice";

export default function Checkout() {
// Dispatch  Data from Backend
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

    const user =useSelector(selectUserInfo)

  //   items adding into cart
    const items=useSelector(selectItems);
    const totalItems = items.reduce((total, item)=>item.quantity+total, 0);
    const currentOrder= useSelector(selectCurrentOrder)

    const [selectedAddress,setSelectedAddress]=useState(null);

    const handleQuantity=(e,item)=>{
      dispatch(updateCartAsync({ id:item.id, quantity: +e.target.value}));
    };
  
    const handleRemove=(e,id)=>{
       dispatch(deleteItemFromCartAsync(id));
    };
    

    const handleAddress=(e)=>{
        console.log(e.target.value);
        setSelectedAddress(user.addresses[e.target.value]);
    }


    const handleOrder=(e)=>{
       if(selectedAddress){
        const order ={items, totalItems, user:user.id, selectedAddress,status:'pending'}
        dispatch(createOrderAsync(order));
        // todo: clearcart after order, 
        // redirect to success page,
        // on server change stock reduce number 
       }else{
        alert('Enter Address');
       }
    }

  return (
    <>
    
      {/* checkout form */}
      {!items.length && <Navigate to="/product" replace={true}></Navigate>}
      {currentOrder && <Navigate to={`/order-success/${currentOrder.id}`} replace={true}></Navigate>}

      <div className="mx-auto bg-gray-300 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10  lg:grid-cols-5 ">
          <div className="lg:col-span-3">
            <form 
              className="bg-white px-5 py-12 mt-12"
              noValidate
              onSubmit={handleSubmit((data) => {
                console.log(data)
              dispatch(
                updateUserAsync({ ...user, addresses:[...user.addresses,data] })
              );
              reset();
            })}  >
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-2xl pt-4 font-semibold leading-7 text-gray-900">
                    Personal Information
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Use a permanent address where you can receive mail.
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="ngoname"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        NGO Name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register('ngoname',{required:' NGO name is required'})}
                          id="ngoname"
                          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="userName"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        User name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register('userName',{required:' user name is required'})}
                          id="userName"
                          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          {...register('email',{required:'email is required'})}
                          type="email"
                          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Phone No
                      </label>
                      <div className="mt-2">
                      <input
                          id="phone"
                          {...register('phone',{required:'phone number is required'})}
                          type="text"
                          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="street"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Street address
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register('street',{required:'street is required'})}
                          id="street"
                          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        City
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register('city',{required:'city is required'})}
                          id="city"
                          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        State / Province
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register('state',{required:'region is required'})}
                          id="state"
                          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="pinCode"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        PinCode
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register('pinCode',{required:'pinCode is required'})}
                          id="pinCode"
                          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              

               <div className="py-4  flex items-center justify-end gap-x-6">
               
                  <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Reset
                  </button>
                
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add Address
                </button>
              </div>
                </div>
              </form>


                {/* Address */}
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Address
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Choose from Existing Addresses
                </p>
                <ul role="list">
                  {user.addresses.map((address,index) => (
                    <li
                      key={index}
                      className="flex justify-between gap-x-6 px-5 py-4 mb-2 rounded-md border-2 border-gray-200"
                    >
                      <div className="flex min-w-0 gap-x-4">
                        <input 
                        onChange={handleAddress}
                        name="address"
                        type="radio"
                        value={index}
                        className="h-4 w-4 border-gray-300 text-indigo-600"/>
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">
                            {address.userName}
                          </p>
                          <p className="text-sm leading-6 text-gray-900">
                           Phone: {address.phone}
                        </p>
                         
                        </div>
                      </div>
                      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        
                        <p className="text-sm leading-5 text-gray-900">
                          {address.street}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-900">
                            {address.city}
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-900">
                            {address.pinCode}
                          </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

             
            
          </div>


          {/* chcekout cart  */}
          <div className="lg:col-span-2">
          <div className="mx-auto mt-12  bg-gray-200 max-w-7xl px-3 sm:px-2 lg:px-4">
        
        <div className="border-t px-0 py-6 sm:px-0">
        <h2 className="text-4xl mb-10 font-bold tracking-tight text-gray-900">Cart</h2>
  
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {items.map((item) => (
                <li key={item.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={item.product.thumbnail}
                      alt={item.product.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
  
                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href={item.product.id}>{item.product.title}</a>
                        </h3>
                        {/* <p className="ml-4">{product.price}</p> */}
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.product.color}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      
                      <div className="text-gray-500 ">
                          <label htmlFor="quantity"
                          className="inline mr-5 text-sm font-medium leading-6 text-gray-900">
                              Qty
                          </label> 
                      <select onChange={(e)=>handleQuantity(e,item)} value={item.quantity} >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>                       
                      </select>  
                      </div>
  
                      <div className="flex">
                        <button
                          onClick={e=>handleRemove(e,item.id)}
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        <div className="border-t border-gray-400 px-2 py-6 sm:px-2">
          <div className="flex justify-between my-2 text-base font-medium text-gray-900">
            <p>Total Items in cart</p>
            <p>{totalItems} items</p>
          </div>
          <p className="mt-0.5 text-sm my-2 text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
         
            <div
              onClick={handleOrder}
              className="flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Order Now
            </div>
           
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or
              <Link to='/product'>
              <button
                type="button"
                className="font-medium ml-2 text-indigo-600 hover:text-indigo-500"
                onClick={() => setOpen(false)}
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
              </Link>
            </p>
          </div>
        </div>
      </div>  
          </div>
        </div>
      </div>
    </>
  );
}
