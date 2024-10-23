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
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="absolute z-40 w-full border-gray-200 dark:border-gray-600 dark:bg-gray-900 text-customwhite pt-5 pb-5 site_header">
      <div className='container mx-auto xl:max-w-[1504px] lg:max-w-[100%]'>
        <div className="header_wrapper">
          <div className="w-full flex md:order-1 justify-between items-center border p-2 rounded-md border-lightBlue">
            {/* Logo */}
            <div className='logo_div basis-1/5'>
              <Image className="text-left" src="/images/header_logo.svg" height={32} width={50} alt="Logo" />
            </div>

            {/* Navigation */}
            <div className='nav_div basis-3/5 relative flex gap-4'>
              <ul className="flex items-center justify-center w-full" dir="ltr">
                <li
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter('services')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center rounded-md px-2 py-1 text-md font-semibold text-slate-11 hover:text-slate-12 lg:px-3">
                    Services
                    <svg className="opacity-70 ml-1 transition-transform group-hover:rotate-180" fill="none" height="22" viewBox="0 0 24 24" width="22">
                      <path d="M15.25 10.75L12 14.25L8.75 10.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    </svg>
                  </button>
                  {openDropdown === 'services' && (
                    <div className="header_submenu p-4 absolute left-0 w-[500px] bg-white text-black shadow-md rounded-md transition-all ease-in-out duration-300 opacity-100 visible" 
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(48px)' }}>
                      <div className='submenu_flex w-full flex gap-2'>
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
                <button className="trans_button px-5 py-2 rounded-md shadow-md transition flex items-center text-[14px] 2xl:text-[16px] xl:text-[14px] font-semibold bg-[rgba(255,255,255,0.11)] hover:bg-[rgba(255,255,255,0.15)]">
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
                <button className="bg-white text-black px-5 py-2 text-[14px] 2xl:text-[16px] xl:text-[14px] font-semibold rounded-md transition hover:bg-[#4353FF] hover:text-white">
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
