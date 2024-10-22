'use client'
import React, { useState } from 'react';
import Image from 'next/image';

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

  // Define your navigation items and corresponding submenus
  const navItems = [
    {
      title: 'Features',
      icon: '/images/features_icon.svg',
      submenu: [
        { title: 'Feature 1', icon: '/images/feature1_icon.svg', link: '#' },
        { title: 'Feature 2', icon: '/images/feature2_icon.svg', link: '#' },
        { title: 'Feature 3', icon: '/images/feature3_icon.svg', link: '#' },
      ],
    },
    {
      title: 'Pricing',
      icon: '/images/pricing_icon.svg',
      submenu: [
        { title: 'Plan A', icon: '/images/planA_icon.svg', link: '#' },
        { title: 'Plan B', icon: '/images/planB_icon.svg', link: '#' },
        { title: 'Plan C', icon: '/images/planC_icon.svg', link: '#' },
      ],
    },
    {
      title: 'About',
      icon: '/images/about_icon.svg',
      submenu: [
        { title: 'Our Story', icon: '/images/story_icon.svg', link: '#' },
        { title: 'Team', icon: '/images/team_icon.svg', link: '#' },
        { title: 'Careers', icon: '/images/careers_icon.svg', link: '#' },
      ],
    },
    {
      title: 'Contact',
      icon: '/images/contact_icon.svg',
      submenu: [
        { title: 'Support', icon: '/images/support_icon.svg', link: '#' },
        { title: 'Sales', icon: '/images/sales_icon.svg', link: '#' },
      ],
    },
  ];

  return (
    <nav className="absolute z-40 w-full border-gray-200 dark:border-gray-600 dark:bg-gray-900 text-customwhite pt-5 pb-5 site_header">
      <div className='container mx-auto xl:max-w[1504px] lg:max-w[100%]'>
        <div className="header_wrapper">
          <div className="w-full flex md:order-1 justify-between items-center border p-2 rounded-md border-lightBlue">
            {/* Logo */}
            <div className='logo_div basis-1/5'>
              <Image className="text-left" src="/images/header_logo.svg" height={32} width={50} alt="Logo" />
            </div>

            {/* Navigation */}
            <div className='nav_div basis-3/5 relative flex gap-4'>
             <ul data-orientation="horizontal" class="flex items-center justify-center w-full" dir="ltr">
             <li><button id="radix-:r0:-trigger-radix-:r4:" data-state="closed" aria-expanded="false" aria-controls="radix-:r0:-content-radix-:r4:" class="flex items-center rounded-md px-1 py-1 text-md font-semibold text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 lg:px-3 lg:pr-0 group select-none gap-[2px] outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7" data-radix-collection-item="">Services<svg class="opacity-70 -ml-0.5 transition-transform duration-[250] delay-0 ease-in group-data-[state=open]:translate-y-0.5" fill="none" height="22" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M15.25 10.75L12 14.25L8.75 10.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg></button></li>

             <li><button id="radix-:r0:-trigger-radix-:r5:" data-state="closed" aria-expanded="false" aria-controls="radix-:r0:-content-radix-:r5:" class="flex items-center rounded-md px-1 py-1 text-md font-semibold text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 lg:px-3 lg:pr-0 group select-none gap-[2px] outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7" data-radix-collection-item="">Skills<svg class="opacity-70 -ml-0.5 transition-transform duration-[250] delay-0 ease-in group-data-[state=open]:translate-y-0.5" fill="none" height="22" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M15.25 10.75L12 14.25L8.75 10.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg></button></li>

             <li><button id="radix-:r0:-trigger-radix-:r5:" data-state="closed" aria-expanded="false" aria-controls="radix-:r0:-content-radix-:r5:" class="flex items-center rounded-md px-1 py-1 text-md font-semibold text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 lg:px-3 lg:pr-0 group select-none gap-[2px] outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7" data-radix-collection-item="">Technologies<svg class="opacity-70 -ml-0.5 transition-transform duration-[250] delay-0 ease-in group-data-[state=open]:translate-y-0.5" fill="none" height="22" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M15.25 10.75L12 14.25L8.75 10.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg></button></li>

             <li><button id="radix-:r0:-trigger-radix-:r5:" data-state="closed" aria-expanded="false" aria-controls="radix-:r0:-content-radix-:r5:" class="flex items-center rounded-md px-1 py-1 text-md font-semibold text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 lg:px-3 lg:pr-0 group select-none gap-[2px] outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7" data-radix-collection-item="">Industries<svg class="opacity-70 -ml-0.5 transition-transform duration-[250] delay-0 ease-in group-data-[state=open]:translate-y-0.5" fill="none" height="22" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M15.25 10.75L12 14.25L8.75 10.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg></button></li>


             <li>
              <a class="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-2 py-1 text-md font-semibold text-slate-11 hover:text-customblue focus-visible:text-slate-12 lg:px-4" data-radix-collection-item="" href="/">Our Work </a>
              </li>
              <li>
              <a class="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-2 py-1 text-md font-semibold text-slate-11 hover:text-customblue focus-visible:text-slate-12 lg:px-4" data-radix-collection-item="" href="/">About  </a>
              </li>
              <li>
              <a class="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-2 py-1 text-md font-semibold text-slate-11 hover:text-customblue focus-visible:text-slate-12 lg:px-4" data-radix-collection-item="" href="/">Contact</a>
              </li>

             </ul>
            </div>

            {/* Buttons Section */}
            <div className="button_col basis-1/5 flex items-center justify-end gap-x-4">
              <div className="w-full btn_wrapper flex justify-end gap-x-4">
                <button className="trans_button px-5 py-2 rounded-md shadow-md transition flex items-center text-[14px]   2xl:text-[16px] xl:text-[14px] font-semibold bg-[rgba(255,255,255,0.11)] hover:bg-[rgba(255,255,255,0.15)]">
                  GitHub
                  <span className="ml-2">
                    <Image
                      src="/images/github_icon.svg"
                      height={28}
                      width={28}
                      alt="GitHub Icon"
                      className="bg-[rgba(255,255,255,0.11)] min-w-[28px] p-1 rounded"
                    />
                  </span>
                </button>
                <button className="bg-white text-black px-5 py-2 text-[14px]  2xl:text-[16px] xl:text-[14px]   font-semibold rounded-md transition hover:bg-[#4353FF] hover:text-white">
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
