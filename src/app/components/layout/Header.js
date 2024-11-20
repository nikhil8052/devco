'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faJava, 
  faJs, 
  faNodeJs, 
  faReact, 
  faLaravel, 
  faHtml5, 
  faPhp, 
  faPython, 
  faUnity, 
  faAndroid, 
  faApple, 
  faShopify, 
  faWordpress, 
  faAws, 
  faSalesforce 
} from '@fortawesome/free-brands-svg-icons';

import { 
  faFlask,  // LabVIEW (placeholder)
  faGlobe,  // Webflow and Sitefinity (generic globe)
  faCogs,   // SolidWorks (generic gear icon)
  faCloud,  // Azure and Nextcloud
  faDatabase,  // Oracle and SQL
  faMoneyCheckAlt,  // NetSuite (placeholder)
  faServer,  // SQL Server
  faChartBar,  // Tableau
  faIndustry,  // SAP (placeholder)
  faCubes,   // Kubernetes
  faSearch,  // ElasticSearch
  faRobot   // OpenCV (placeholder)
} from '@fortawesome/free-solid-svg-icons';
const Header = () => {
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

  return (
    <nav className="absolute z-40 w-full border-gray-200 dark:border-gray-600 dark:bg-gray-900 text-customwhite pt-5 pb-5 site_header">
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
                   className="header_submenu p-4 static lg:absolute w-full lg:w-[250px] bg-white text-black shadow-md rounded-md transition-all ease-in-out duration-300 opacity-100 visible"
                   style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(48px)' }}
                 >
                      <div className='submenu_flex w-full flex gap-2'>
                        <div className='menu_icons_div basis-[100%]'>
                          <ul className='icon_list w-full flex flex-wrap gap-y-1'>
                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faJava} className="text-customwhite text-[16px]" />
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faJs} className="text-customwhite text-[16px]" />
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faNodeJs} className="text-customwhite text-[16px]" />
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faReact} className="text-customwhite text-[16px]" />
                              </Link>
                            </li>

                        

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faLaravel} className="text-customwhite text-[16px]" />
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faHtml5} className="text-customwhite text-[16px]" />
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faPhp} className="text-customwhite text-[16px]" />
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faPython} className="text-customwhite text-[16px]" /> {/* Python */}
                              </Link>
                            </li>

                         

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faFlask} className="text-customwhite text-[16px]" /> {/* LabView (using Flask as alternative) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faUnity} className="text-customwhite text-[16px]" /> {/* Unity */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faGlobe} className="text-customwhite text-[16px]" /> {/* Webflow (generic globe icon) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faShopify} className="text-customwhite text-[16px]" /> {/* Shopify */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faAndroid} className="text-customwhite text-[16px]" /> {/* Android */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faApple} className="text-customwhite text-[16px]" /> {/* iOS */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faCogs} className="text-customwhite text-[16px]" /> {/* SolidWorks (generic gear icon) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faCloud} className="text-customwhite text-[16px]" /> {/* Azure (cloud icon) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faAws} className="text-customwhite text-[16px]" /> {/* AWS */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faGlobe} className="text-customwhite text-[16px]" /> {/* Sitefinity (generic globe icon) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faWordpress} className="text-customwhite text-[16px]" /> {/* WordPress */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faRobot} className="text-customwhite text-[16px]" /> {/* OpenCV (using robot icon) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faSalesforce} className="text-customwhite text-[16px]" /> {/* Salesforce */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faDatabase} className="text-customwhite text-[16px]" /> {/* Oracle */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faCloud} className="text-customwhite text-[16px]" /> {/* Nextcloud (generic cloud icon) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faMoneyCheckAlt} className="text-customwhite text-[16px]" /> {/* NetSuite (using money check as alternative) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faDatabase} className="text-customwhite text-[16px]" /> {/* SQL */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faServer} className="text-customwhite text-[16px]" /> {/* SQL Server */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faChartBar} className="text-customwhite text-[16px]" /> {/* Tableau */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faIndustry} className="text-customwhite text-[16px]" /> {/* SAP (using industry as alternative) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faCubes} className="text-customwhite text-[16px]" /> {/* Kubernetes */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faSearch} className="text-customwhite text-[16px]" /> {/* ElasticSearch */}
                              </Link>
                            </li>


                          </ul>
                        </div>
                      </div>
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
                   className="header_submenu p-4 static lg:absolute w-full lg:w-[500px] bg-white text-black shadow-md rounded-md transition-all ease-in-out duration-300 opacity-100 visible"
                   style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(48px)' }}
                 >
                      <div className='submenu_flex w-full flex gap-2 '>
                        <div className='links_div basis-[30%]'>
                          <ul className=" submenu_ul">
                            <li className="p-1 submenu_item"><Link href="/" className='text-customwhite text-[16px]'>Design </Link></li>
                            <li className="p-1 submenu_item"><Link href="/" className='text-customwhite text-[16px]'>Develop</Link></li>
                            <li className="p-1 submenu_item"><Link href="/" className='text-customwhite text-[16px]'>Deploy</Link></li>
                          </ul>
                        </div>
                        <div className='menu_icons_div basis-[70%]'>
                          <ul className='icon_list w-full flex flex-wrap gap-y-1'>
                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faJava} className="text-customwhite text-[16px]" />
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faJs} className="text-customwhite text-[16px]" />
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faNodeJs} className="text-customwhite text-[16px]" />
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faReact} className="text-customwhite text-[16px]" />
                              </Link>
                            </li>

                        

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faLaravel} className="text-customwhite text-[16px]" />
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faHtml5} className="text-customwhite text-[16px]" />
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faPhp} className="text-customwhite text-[16px]" />
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faPython} className="text-customwhite text-[16px]" /> {/* Python */}
                              </Link>
                            </li>

                         

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faFlask} className="text-customwhite text-[16px]" /> {/* LabView (using Flask as alternative) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faUnity} className="text-customwhite text-[16px]" /> {/* Unity */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faGlobe} className="text-customwhite text-[16px]" /> {/* Webflow (generic globe icon) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faShopify} className="text-customwhite text-[16px]" /> {/* Shopify */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faAndroid} className="text-customwhite text-[16px]" /> {/* Android */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faApple} className="text-customwhite text-[16px]" /> {/* iOS */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faCogs} className="text-customwhite text-[16px]" /> {/* SolidWorks (generic gear icon) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faCloud} className="text-customwhite text-[16px]" /> {/* Azure (cloud icon) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faAws} className="text-customwhite text-[16px]" /> {/* AWS */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faGlobe} className="text-customwhite text-[16px]" /> {/* Sitefinity (generic globe icon) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faWordpress} className="text-customwhite text-[16px]" /> {/* WordPress */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faRobot} className="text-customwhite text-[16px]" /> {/* OpenCV (using robot icon) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faSalesforce} className="text-customwhite text-[16px]" /> {/* Salesforce */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faDatabase} className="text-customwhite text-[16px]" /> {/* Oracle */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faCloud} className="text-customwhite text-[16px]" /> {/* Nextcloud (generic cloud icon) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faMoneyCheckAlt} className="text-customwhite text-[16px]" /> {/* NetSuite (using money check as alternative) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faDatabase} className="text-customwhite text-[16px]" /> {/* SQL */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faServer} className="text-customwhite text-[16px]" /> {/* SQL Server */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faChartBar} className="text-customwhite text-[16px]" /> {/* Tableau */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faIndustry} className="text-customwhite text-[16px]" /> {/* SAP (using industry as alternative) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faCubes} className="text-customwhite text-[16px]" /> {/* Kubernetes */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faSearch} className="text-customwhite text-[16px]" /> {/* ElasticSearch */}
                              </Link>
                            </li>


                          </ul>
                        </div>
                      </div>
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
                   className="header_submenu p-4 static lg:absolute w-full lg:w-[250px] bg-white text-black shadow-md rounded-md transition-all ease-in-out duration-300 opacity-100 visible"
                   style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(48px)' }}
                 >
                      <div className='submenu_flex w-full flex gap-2'>
                        <div className='menu_icons_div basis-[100%]'>
                          <ul className='icon_list w-full flex flex-wrap gap-y-1'>
                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faJava} className="text-customwhite text-[16px]" />
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faJs} className="text-customwhite text-[16px]" />
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faNodeJs} className="text-customwhite text-[16px]" />
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faReact} className="text-customwhite text-[16px]" />
                              </Link>
                            </li>

                        

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faLaravel} className="text-customwhite text-[16px]" />
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faHtml5} className="text-customwhite text-[16px]" />
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faPhp} className="text-customwhite text-[16px]" />
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faPython} className="text-customwhite text-[16px]" /> {/* Python */}
                              </Link>
                            </li>

                         

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faFlask} className="text-customwhite text-[16px]" /> {/* LabView (using Flask as alternative) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faUnity} className="text-customwhite text-[16px]" /> {/* Unity */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faGlobe} className="text-customwhite text-[16px]" /> {/* Webflow (generic globe icon) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faShopify} className="text-customwhite text-[16px]" /> {/* Shopify */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faAndroid} className="text-customwhite text-[16px]" /> {/* Android */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faApple} className="text-customwhite text-[16px]" /> {/* iOS */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faCogs} className="text-customwhite text-[16px]" /> {/* SolidWorks (generic gear icon) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faCloud} className="text-customwhite text-[16px]" /> {/* Azure (cloud icon) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faAws} className="text-customwhite text-[16px]" /> {/* AWS */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faGlobe} className="text-customwhite text-[16px]" /> {/* Sitefinity (generic globe icon) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faWordpress} className="text-customwhite text-[16px]" /> {/* WordPress */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faRobot} className="text-customwhite text-[16px]" /> {/* OpenCV (using robot icon) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faSalesforce} className="text-customwhite text-[16px]" /> {/* Salesforce */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faDatabase} className="text-customwhite text-[16px]" /> {/* Oracle */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faCloud} className="text-customwhite text-[16px]" /> {/* Nextcloud (generic cloud icon) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faMoneyCheckAlt} className="text-customwhite text-[16px]" /> {/* NetSuite (using money check as alternative) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faDatabase} className="text-customwhite text-[16px]" /> {/* SQL */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faServer} className="text-customwhite text-[16px]" /> {/* SQL Server */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faChartBar} className="text-customwhite text-[16px]" /> {/* Tableau */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faIndustry} className="text-customwhite text-[16px]" /> {/* SAP (using industry as alternative) */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faCubes} className="text-customwhite text-[16px]" /> {/* Kubernetes */}
                              </Link>
                            </li>

                            <li className='p-1 basis-[16%]'>
                              <Link href="/" className='text-customwhite text-[20px]'>
                                <FontAwesomeIcon icon={faSearch} className="text-customwhite text-[16px]" /> {/* ElasticSearch */}
                              </Link>
                            </li>


                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </li>




              <li>
              <a class="rounded-md px-2 py-1 text-md font-semibold text-slate-11 hover:text-slate-12 lg:px-3" data-radix-collection-item="" href="/">Our Work </a>
              </li>
              <li>
              <a class="rounded-md px-2 py-1 text-md font-semibold text-slate-11 hover:text-slate-12 lg:px-3" data-radix-collection-item="" href="/">About  </a>
              </li>
              <li>
              <a class="rounded-md px-2 py-1 text-md font-semibold text-slate-11 hover:text-slate-12 lg:px-3" data-radix-collection-item="" href="/">Contact</a>
              </li>
              </ul>
            </div>

            {/* Buttons Section */}
            <div className="button_col basis-1/5 flex items-center justify-end gap-x-3 sm:gap-x-4">
              <div className="w-full btn_wrapper flex justify-end gap-x-3 sm:gap-x-4">
                <button className="trans_button px-3 2xl:px-5 md:px-3 py-2 text-[13px] 2xl:text-[16px] xl:text-[13px] 2xl:font-semibold md:font-normal sm:font-normal rounded-md shadow-md transition flex items-center  bg-[rgba(255,255,255,0.11)] hover:bg-[rgba(255,255,255,0.15)]">
                  GitHub
                  <span className="ml-2 hidden xl:block md:hidden">
                    <Image
                      src="/images/github_icon.svg"
                      height={28}
                      width={28}
                      alt="GitHub Icon"
                      className="bg-[rgba(255,255,255,0.11)] min-w-[28px] p-1 rounded"
                    />
                  </span>
                </button>
                <button className="bg-white text-black px-3 2xl:px-5 md:px-3 py-2 text-[13px] 2xl:text-[16px] xl:text-[13px] 2xl:font-semibold md:font-normal sm:font-normal rounded-md transition hover:bg-[#4353FF] hover:text-white">
                  Watch Video
                </button>
              </div>
              <div className='mobile_togglke block lg:hidden ml-auto'>
              <button onClick={toggleMainMenu} className="block p-0 text-white">
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
  );
};

export default Header;
