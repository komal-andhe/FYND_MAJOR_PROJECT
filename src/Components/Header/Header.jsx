import React from "react";
import header1 from "../../assets/images/headerImage.png";
import { Link, redirect, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const redirectToProduct = () => {
    navigate("/product");
  };

  return (
    <>

         {/*hero section  */}
      <div className="header_constainer mx-auto pl-20 pr-16 pt-16 ">
        <div className="header_page grid grid-cols-2 justify-items-center items-center ">
          <div className="header_page_left w-4/5 pt-16 ">
            {/* <Switch defaultChecked /> */}
            <h1 className="text-5xl font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark">
              Change the World by{" "}
              <span className="text-dark text-6xl font-petitFormal font-bold">
                Giving
              </span>
              {""}
            </h1>

            <div className="mt-4">
              <p className="w-4/5 font-inter font-medium no-underline align-middle tracking-wide normal-case text-dark text-2xl">
                Small acts, when multiplied by millions of people, can tranform
                the world.
              </p>
            </div>

            <div className="pb-20">
              <button
                className=" header_btn pushable mt-4"
                onClick={() => redirectToProduct()}
              >
                <span className="front">Explore</span>
              </button>
            </div>
          </div>

          <div className="header_page_right mt-4">
            <img
              className="h-94 w-full bg-no-repeat bg-center relative z-10 header rounder-xl"
              src={header1}
              alt="header-phone"
            ></img>
          </div>
        </div>
      </div>


     {/* for NGO */}
     <div className="px-20 bg-gray-200 ">
      <h2 className=" pt-10 text-center font-bold text-orange-600 underline">For NGO</h2>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

        
        {/*First card*/}
        <div className="p-8 bg-white my-5 rounded-lg">
          {/*Banner image*/}
          <img
            className="rounded-lg w-full h-34"
            src="https://i.pinimg.com/564x/c5/5a/9d/c55a9dd66a8d9ccece61b1dc8dba399f.jpg"
            alt="order"

          />
          {/*Tag*/}
          <p className="text-indigo-500 font-semibold text-base mt-2">
            Order Product
          </p>
          {/*Title*/}
          <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
            Explore and Order Product 
          </h1>
          {/*Description*/}
          <div className="max-w-full">
            <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
              1. Explore the product section and place an order for the needed product.
              2. Provide user details and address thoroughly.
            </p>
          </div>
          
        </div>

        {/* <second>/ */}
        <div className="p-8 bg-white my-5 rounded-lg">
          {/*Banner image*/}
          <img
            className="rounded-lg w-full h-18"
            src="https://i.pinimg.com/564x/c2/bd/b3/c2bdb3c21a57e100397010ca62e6afe9.jpg"
            
          />
          {/*Tag*/}
          <p className="text-indigo-500 font-semibold text-base mt-2">
            Order Confirmation
          </p>
          {/*Title*/}
          <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
            Order Received and Confirmation
          </h1>
          {/*Description*/}
          <div className="max-w-full">
            <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
              1. The protocol involves receiving and verifying user details for the placed order.
              2. Confirming the placed order is the next step in the protocol.
            </p>
          </div>
          
        </div>

        {/* third card */}
        <div className="p-8 bg-white my-5 rounded-lg">
          {/*Banner image*/}
          <img
            className="rounded-lg w-full h-34"
            src="https://i.pinimg.com/564x/0a/e8/4e/0ae84e2345f8819965476f7f25e5121e.jpg"
          />
          {/*Tag*/}
          <p className="text-indigo-500 font-semibold text-base mt-2">
            Order Delivery
          </p>
          {/*Title*/}
          <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
            Product will be delivered to NGO's
          </h1>
          {/*Description*/}
          <div className="max-w-full">
            <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
              1. Following the confirmation and verification of the product, proceed to schedule the delivery.
              2. The order is scheduled for delivery within 7 working days.
            </p>
          </div>
          
        </div>

      </div>
      </div>



      {/* donation of product */}

      <div className="container flex flex-col px-20 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div className="flex items-center justify-center w-full h-96 md:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src="https://i.pinimg.com/564x/5b/28/0e/5b280ee45eee01d6df516b5cc2528b3c.jpg"
            alt="donation box"
          />
        </div>
        <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
          <div className="max-w-lg md:mx-12 md:order-2 pl-16">
            <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">
              Let's Spread Happiness
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              We Deliver your Donation to the Right place
            </p>
            <div className="py-10 px-10 ">
              <Link to="/donation-form">
                <span className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex me-2 mb-2 ">
                  Donate Product
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* for donar section */}
      <div className="px-20 bg-gray-200">
      <h2 className="pt-10 text-center font-bold text-orange-600 underline">For Donor</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        
        {/*First card*/}
        <div className="p-8 bg-white my-5 rounded-lg">
          {/*Banner image*/}
          <img
            className="rounded-lg w-full h-34"
            src="https://i.pinimg.com/564x/0d/1a/c9/0d1ac910523a0f83ddc36a9521562d65.jpg"
            alt="form"

          />
          {/*Tag*/}
          <p className="text-indigo-500 font-semibold text-base mt-2">
            Donate Product
          </p>
          {/*Title*/}
          <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
            Fill Form and Schedule pickup
          </h1>
          {/*Description*/}
          <div className="max-w-full">
            <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
              1. Please adhere to the following protocols when donating a product: Fill out the form with the necessary details.
              2. Thoroughly provide product details and schedule the pickup date for the product.
              3. Prior to donating the product, ensure compliance with all safety measures.

            </p>
          </div>
          
        </div>

        {/* <second>/ */}
        <div className="p-8 bg-white my-5 rounded-lg">
          {/*Banner image*/}
          <img
            className="rounded-lg w-full h-18"
            src="https://i.pinimg.com/564x/bb/00/de/bb00de2da50a7e3a2434a8bfb382c6f5.jpg"
            
          />
          {/*Tag*/}
          <p className="text-indigo-500 font-semibold text-base mt-2">
            Pick Up Product
          </p>
          {/*Title*/}
          <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
            Product will be Picked
          </h1>
          {/*Description*/}
          <div className="max-w-full">
            <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
              1.The protocol involves picking up the product from the donor.
              2.Please comply with the following protocols when donating a product.
            </p>
          </div>
          
        </div>

        {/* third card */}
        <div className="p-8 bg-white my-5 rounded-lg">
          {/*Banner image*/}
          <img
            className="rounded-lg w-full h-34"
            src="https://i.pinimg.com/564x/60/ac/f4/60acf4705854c4cb3e2efd6b2ce2e935.jpg"
          />
          {/*Tag*/}
          <p className="text-indigo-500 font-semibold text-base mt-2">
            Product Donation
          </p>
          {/*Title*/}
          <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
            Product will be donated to NGO's
          </h1>
          {/*Description*/}
          <div className="max-w-full">
            <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
              1. The protocol involves receiving products and facilitating their delivery to NGOs.
              2. The established protocol entails the donation of products to NGOs and distribution to those in need.
            </p>
          </div>
          
        </div>

      </div>
      </div>
    </>
  );
};

export default Header;
