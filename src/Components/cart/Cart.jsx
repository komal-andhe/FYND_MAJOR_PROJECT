import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link,Navigate } from "react-router-dom";
import { selectItems,updateCartAsync,deleteItemFromCartAsync} from "./cartSlice";



export default function Cart() {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(true);
//   items adding into cart
  const items=useSelector(selectItems);
  const totalItems = items.reduce((total, item)=>item.quantity+total, 0);

  const handleQuantity=(e,item)=>{
    dispatch(updateCartAsync({id:item.id, quantity: +e.target.value}));
  };

  const handleRemove=(e,id)=>{
     dispatch(deleteItemFromCartAsync(id));
  };



  return (
    <>

     {!items.length && <Navigate to="/product" replace={true}></Navigate>}
    <div className="mx-auto mt-12  bg-gray-200 max-w-7xl px-2 sm:px-6 lg:px-8">
        
      <div className="border-t px-4 py-6 sm:px-6">
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

      <div className="border-t border-gray-400 px-4 py-6 sm:px-6">
        <div className="flex justify-between my-2 text-base font-medium text-gray-900">
          <p>Total Items in cart</p>
          <p>{totalItems} items</p>
        </div>
        <p className="mt-0.5 text-sm my-2 text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6">
          <Link to='/checkout'
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Checkout
          </Link>
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
    </>
  );
}
