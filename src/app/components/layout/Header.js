'use client'
import React, { useState,useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Skillsmenu from '@/app/components/megamenu/Skillsmenu';
import Servicemenu from '@/app/components/megamenu/Servicemenu';
import Industrymenu from '@/app/components/megamenu/Industrymenu'



const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDropdownToggle = (dropdown) => {
    if (window.innerWidth < 1024) {
      setOpenDropdown((prevState) => ({
        ...prevState,
        [dropdown]: !prevState[dropdown],
      }));
    }
  };

  const handleMouseEnter = (dropdown) => {
    if (window.innerWidth >= 1024) {
      setOpenDropdown((prevState) => ({
        ...prevState,
        [dropdown]: true,
      }));
    }
  };

  const handleMouseLeave = (dropdown) => {
    if (window.innerWidth >= 1024) {
      setOpenDropdown((prevState) => ({
        ...prevState,
        [dropdown]: false,
      }));
    }
  };

  const toggleMainMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
    <nav
    className={`absolute z-40 w-full border-gray-200 dark:border-gray-600 dark:bg-gray-900 text-customwhite pt-5 pb-5 site_header  ${
      isScrolled ? "scrolled-header" : ""
    }`}
  >
      <div className='container mx-auto xl:max-w-[1504px] lg:max-w-[100%] relative'>
        <div className="header_wrapper">
          <div className="w-full flex md:order-1 justify-between items-center border p-2 rounded-md border-lightBlue">
            {/* Logo */}
            <div className='logo_div basis-1/5'> 
            <Link href="/">             
              <Image className="text-left" src="/images/header_logo.svg" height={32} width={50} alt="Logo" />
              </Link>
            </div>
            

            {/* Navigation */}
            <div
              className={`nav_div lg:basis-3/5 absolute lg:relative lg:flex lg:items-center lg:w-auto lg:bg-transparent lg:visible
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(48px)' }} ${
                isMenuOpen  ? 'left-0 top-16 w-full p-4' : 'hidden'  
              }`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(48px)' }}
            >
              <ul className="flex flex-col lg:flex-row items-start justify-start lg:justify-center lg:items-center w-full lg:w-full xl:gap-4 lg:gap-1 md:gap-2">
       
              <li 
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter('skills')}
                  onMouseLeave={() => handleMouseLeave('skills')}
                >
                <button
                    className="flex items-center rounded-md px-2 py-1 text-md font-semibold text-slate-11 hover:text-slate-12 lg:px-3 capitalize"
                    onClick={() => handleDropdownToggle('skills')}
                  >
                    Skills
                    <svg className="opacity-70 ml-1 transition-transform group-hover:rotate-180" fill="none" height="22" viewBox="0 0 24 24" width="22">
                      <path d="M15.25 10.75L12 14.25L8.75 10.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    </svg>
                  </button>
                  {openDropdown['skills'] && (
                   <div
                   className="header_submenu static lg:absolute w-full lg:w-[250px]  text-black shadow-md rounded-md transition-all ease-in-out duration-300 opacity-100 visible">
                     <Skillsmenu />
                    </div>
                  )}
                </li>

                {/* service menu */}
                <li 
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter('services')}
                  onMouseLeave={() => handleMouseLeave('services')}
                >
                <button
                    className="flex items-center rounded-md px-2 py-1 text-md font-semibold text-slate-11 hover:text-slate-12 lg:px-3 capitalize"
                    onClick={() => handleDropdownToggle('services')}
                  >
                    Services
                    <svg className="opacity-70 ml-1 transition-transform group-hover:rotate-180" fill="none" height="22" viewBox="0 0 24 24" width="22">
                      <path d="M15.25 10.75L12 14.25L8.75 10.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    </svg>
                  </button>
                  {openDropdown['services'] && (
                   <div
                   className="header_submenu  static lg:absolute w-full lg:w-[250px] text-black shadow-md rounded-md transition-all ease-in-out duration-300 opacity-100 visible">
                   <Servicemenu />
                    </div>
                  )}
                </li>

                 {/* industries menu */}
                 <li 
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter('industries')}
                  onMouseLeave={() => handleMouseLeave('industries')}
                >
                <button
                    className="flex items-center rounded-md px-2 py-1 text-md font-semibold text-slate-11 hover:text-slate-12 lg:px-3 capitalize"
                    onClick={() => handleDropdownToggle('industries')}
                  >
                    Industries
                    <svg className="opacity-70 ml-1 transition-transform group-hover:rotate-180" fill="none" height="22" viewBox="0 0 24 24" width="22">
                      <path d="M15.25 10.75L12 14.25L8.75 10.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    </svg>
                  </button>
                  {openDropdown['industries'] && (
                   <div
                   className="header_submenu static lg:absolute w-full lg:w-[250px]  text-black shadow-md rounded-md transition-all ease-in-out duration-300 opacity-100 visible"
                   

                 >
                   <Industrymenu />
                    </div>
                  )}
                </li>




              <li>
              <a class="rounded-md px-2 py-1 text-md font-semibold text-slate-11 hover:text-slate-12 lg:px-3" data-radix-collection-item="" href="/portfolio">Our Work </a>
              </li>
              <li>
              <a class="rounded-md px-2 py-1 text-md font-semibold text-slate-11 hover:text-slate-12 lg:px-3" data-radix-collection-item="" href="/about">About  </a>
              </li>
              <li>
              <a class="rounded-md px-2 py-1 text-md font-semibold text-slate-11 hover:text-slate-12 lg:px-3" data-radix-collection-item="" href="/contact">Contact</a>
              </li>
              </ul>
            </div>

            {/* Buttons Section */}
            <div className="button_col basis-1/5 flex items-center justify-end gap-x-3 sm:gap-x-4">
              <div className="w-full btn_wrapper flex justify-end gap-x-3 sm:gap-x-4">
                <a href="https://account.dev.co/login" target="_blank" className="trans_button px-3 2xl:px-5 md:px-3 py-2 text-[13px] 2xl:text-[16px] xl:text-[13px] 2xl:font-semibold md:font-normal sm:font-normal rounded-md shadow-md transition flex items-center  bg-[rgba(255,255,255,0.11)] hover:bg-[rgba(255,255,255,0.15)]">
                  Login
                  <span className="ml-2 hidden xl:block md:hidden">
                    {/* <Image
                      src="/images/github_icon.svg"
                      height={28}
                      width={28}
                      alt="GitHub Icon"
                      className="bg-[rgba(255,255,255,0.11)] min-w-[28px] p-1 rounded"
                    /> */}
                  </span>
                </a>
                <a href="https://account.dev.co/login" target="_blank" className="video_popup_button bg-white text-black px-3 2xl:px-5 md:px-3 py-2 text-[13px] 2xl:text-[16px] xl:text-[13px] 2xl:font-semibold md:font-normal sm:font-normal rounded-md transition hover:bg-[#4353FF] hover:text-white" >
                Sign up
                </a>
              </div>
              <div className='mobile_togglke block lg:hidden ml-auto'>
              <button onClick={toggleMainMenu} className="block p-0 text-white ">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    {/* Top Bar */}
                    <path 
                      d={`M4 6h16`} 
                      stroke="#ffffff" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                    />
                    {/* Middle Bar */}
                    <path 
                      d={`M4 12h16`} 
                      stroke="#ffffff" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                    />
                    {/* Bottom Bar */}
                    <path 
                      d={`M4 18h16`} 
                      stroke="#ffffff" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                    />
                    {/* Cross Icon (Transforming Bottom Bar into Cross) */}
                  </svg>
                </button>

            </div>
            </div>
          </div>
        </div>
      </div>
    </nav>


    </>
  );
};

export default Header;
