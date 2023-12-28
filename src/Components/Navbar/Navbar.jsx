import React, { useState, useEffect,Fragment } from "react";
// import { navbarData } from "../../DataForPage/DummyData";
import logo from "../../assets/images/logo.png";
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItems } from "../cart/cartSlice";


const navbarData = [
  {
    id: "1",
    name: "Home",
    link: "/",
  },
  // {
  //   id: "2",
  //   name: "Champaigns",
  //   link: "/champaign",
  // },
  {
    id: "3",
    name: "Products",
    link: "/product",
  },
  {
    id: "4",
    name: "Profile",
    link: "/profile",
  },];

const userNavigation = [
  { name: 'My Profile', link: '/profile' },
  { name: 'My Orders', link: '/orders' },
  { name: 'Sign out', link: '/logout' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = () => {
  // checking user loggedin or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState();
  const items=useSelector(selectItems);


  // giving scrolling effect
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <>
      <div id="nav_container">
        <div
          className={
            scroll
              ? "h-20 w-full fixed flex transition items-center ease-in-out duration-500 bg-white-200 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 z-20 "
              : "bg-transparent h-20 w-full fixed transition ease-in-out duration-500 flex items-center  z-20"
          }
        >
          <ul className="nav-item-list grid grid-cols-2 justify-items-center items-center content-center w-full">
            <li>
              <img className="nav-item h-20" src={logo} alt="logo-img"></img>
            </li>
            <li className="nav-item mr-64 flex flex-row items-center w-full ">
              {navbarData.map((item) => {
                return (
                  <div key={item.id}>
                    <Link
                      to={item.link}
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={50}
                      duration={500}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                      // spyThrottle={500}
                      className="cursor-pointer text-dark font-inter text-lg font-medium tracking-tight py-1 px-2 hover:text-blue-500"
                    >
                      {item.name}
                    </Link>
                  </div>
                );
              })}

              
                <>
                  <li className="">
              
                    <div className="relative py-0 ml-2">
                      <Link to='/cart'>
                      <div className="t-0 absolute left-3 ml-1">
                      {items.length>0 && <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">{items.length}</span>}
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="file: mt-2 h-10 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                      </Link>
                    </div>
                  </li>

                   {/* Profile dropdown */}
                   <Menu as="div" className="relative ml-6">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src="https://i.pinimg.com/564x/3f/9f/5b/3f9f5b8c9f31ce16c79d48b9eeda4de0.jpg"
                              alt="profile"
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <Link
                                    to={item.link}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
            
                  
                </>
             
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
