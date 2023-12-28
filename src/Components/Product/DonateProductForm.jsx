import React from 'react'
import { createProductAsync, selectCategories } from '../Product/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


export default function DonateProductForm() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
 
    const categories=useSelector(selectCategories);
    const dispatch = useDispatch();


  return (
    <>
    <div className='mt-10 mx-8  '>
    <form  onSubmit={handleSubmit((data) => {
             console.log(data);
             const product={...data}
             product.images=[product.image1, product.image2, product.image3, product.thumbnail]
             delete product['image1']
             delete product['image2']
             delete product['image3']
             console.log(product);
              dispatch(
                createProductAsync(product)
              );
              alert('Thank you! Donation created successfully. View your product in Product section ');
              reset();
            })}
        className='bg-blue-100 px-10 py-10'>
      <div className="space-y-12 text-gray-600">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Donate Product</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="donarname" className="block text-sm font-medium leading-6 text-gray-900">
                Donar Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    {...register('donarname', {
                        required: 'donarname is required',
                      })}
                    id="donarname"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-gray rounded-md py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    // placeholder="janesmith"
                  />
                </div>
              </div>
            </div>
            
            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                Product Title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    {...register('title', {
                        required: 'title is required',
                      })}
                    id="title"
                    className="block flex-1 border-0 bg-gray rounded-md py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    // placeholder="janesmith"
                  />
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a unique title for your product. e.g: Red Shirt, White cloths</p>
            </div>


            
            <div className="col-span-full">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  {...register('description', {
                    required: 'description is required',
                  })}
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your product.</p>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="pickup" className="block text-sm font-medium leading-6 text-gray-900">
                Pickup Date
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="date"
                    {...register('pickup', {
                        required: 'pickup is required',
                      })}
                    id="pickup"
                    className="block flex-1 border-0 bg-gray rounded-md py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    // placeholder="janesmith"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    {...register('phone', {
                        required: 'phone is required',
                        min:0,
                      })}
                    id="phone"
                    className="block flex-1 border-0 bg-gray rounded-md py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    // placeholder="janesmith"
                  />
                </div>
              </div>
            </div>

            

            <div className="col-span-full">
              <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
              Category
              </label>
              <div className="mt-2">
               <select {...register('category', {
                    required: 'category is required',
                  })}>
                <option value="">--choose category--</option>
                {categories.map((category)=> (
                <option value={category.value}>{category.label}</option>
                ))}
               </select>
              </div>
              
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="stock" className="block text-sm font-medium leading-6 text-gray-900">
                Stock
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    {...register('stock', {
                        required: 'stock is required',
                        min:0,
                      })}
                    id="stock"
                    className="block flex-1 border-0 bg-gray rounded-md py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    // placeholder="janesmith"
                  />
                </div>
              </div>
            </div>


            <div className="sm:col-span-4">
              <label htmlFor="thumbnail" className="block text-sm font-medium leading-6 text-gray-900">
                Thumbnail
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    {...register('thumbnail', {
                        required: 'thumbnail is required',
                        
                      })}
                    id="thumbnail"
                    className="block flex-1 border-0 bg-gray rounded-md py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    // placeholder="janesmith"
                  />
                </div>
              </div>
            </div>


            <div className="sm:col-span-4">
              <label htmlFor="image1" className="block text-sm font-medium leading-6 text-gray-900">
                Image 1
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    {...register('image1', {
                        required: 'image is required',      
                      })}
                    id="image1"
                    className="block flex-1 border-0 bg-gray rounded-md py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    // placeholder="janesmith"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="image2" className="block text-sm font-medium leading-6 text-gray-900">
                Image 2
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    {...register('image2', {
                        required: 'image is required',      
                      })}
                    id="image2"
                    className="block flex-1 border-0 bg-gray rounded-md py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    // placeholder="janesmith"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="image3" className="block text-sm font-medium leading-6 text-gray-900">
                Image 3
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                  <input
                    type="text"
                    {...register('image3', {
                        required: 'image is required',      
                      })}
                    id="image3"
                    className="block flex-1 border-0 bg-gray rounded-md py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    // placeholder="janesmith"
                  />
                </div>
              </div>
            </div>

            
          </div>
        </div>

    

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Extra</h2>
          

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium text-gray-900">
                      Comments
                    </label>
                    
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="candidates" className="font-medium text-gray-900">
                      Candidates
                    </label>
                    
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Offers
                    </label>
                    
                  </div>
                </div>
              </div>
            </fieldset>
            
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link 
         to='/'
        type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </Link>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
    </div>
    </>
  )  
}
