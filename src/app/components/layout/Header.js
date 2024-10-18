'use client'
import React, { useState } from 'react';

const Header = () => {
  // State to track which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to handle mouse enter and leave events for dropdowns
  const handleMouseEnter = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (

    <nav className="absolute z-40 w-full border-gray-200 dark:border-gray-600 dark:bg-gray-900 text-customwhite pt-5 pb-5 site_header">
      <div className='container mx-auto'>
      <div className="flex flex-wrap justify-between items-center ">
        <button
          data-collapse-toggle="mega-menu-full"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        {/* Top Links Centered */}
        <div className="hidden w-full md:flex md:order-1 justify-center border p-2 rounded-md border-lightBlue">
          <ul className="flex space-x-8">
            <li
              onMouseEnter={() => handleMouseEnter('home')}
              onMouseLeave={handleMouseLeave}
              className="relative group"
            >
              <button
                className="block py-2 px-3 text-customwhite rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Home
              </button>
              {/* Home Dropdown */}
              {openDropdown === 'home' && (
                <div className="absolute left-0 z-10 w-48 mt-2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-600">
                  <ul className="py-2">
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Overview</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Features</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Pricing</a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
              className="relative group"
            >
              <button
                className="block py-2 px-3 text-customwhite rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Company
                
              </button>
              {/* Company Dropdown */}
              {openDropdown === 'company' && (
                <div className="absolute left-0 z-10 w-48 mt-2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-600">
                  <ul className="py-2">
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Online Stores</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Segmentation</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Marketing CRM</a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter('marketplace')}
              onMouseLeave={handleMouseLeave}
              className="relative group"
            >
              <button
                className="block py-2 px-3 text-customwhite rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Marketplace
              </button>
              {/* Marketplace Dropdown */}
              {openDropdown === 'marketplace' && (
                <div className="absolute left-0 z-10 w-48 mt-2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-600">
                  <ul className="py-2">
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Browse Products</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Top Sellers</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Discounts</a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-customwhite rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Resources</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-customwhite rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Header;
