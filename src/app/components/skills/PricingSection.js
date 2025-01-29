"use client";
import React from "react";

const PricingSection = ({ title, description }) => {

  return (
    <div className="simple-text-sec pb-10 lg:pb-20 md:pb-10">
      <div className="container">
        <div className="simple-text text-center">
          {title && (
            <h2
              className="section_head_title font-semibold text-[26px] 2xl:text-[54px] xl:text-[45px] md:text-[36px] sm:text-[34px] md:mb-3 mb-2 text-customwhite"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
          )}
           {description && (
            <p
              className="description_title text-[26px] 2xl:text-[22px] xl:text-[20] md:text-[14] sm:text-[14px] text-customwhite"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          )}
         
        </div>
        <div className="pricing_block">
            <div className="pricing_row flex flex-wrap">
                <div className="pricing_col ">
                    <div className="pricing_box">
                        <div className="box_top w-full">
                            <div className="box_header">
                                <h4>Essential Plan</h4>
                                <p>Includes All Essential Services</p>
                                <div className="pricing_wrap">
                                    <div className="price_text"><span className="currency">$</span><span className="price">49</span><span>00</span></div>
                                    <div className="price_duration">/Month</div>
                                </div>
                            </div>
                            <div className="box_body">
                                <ul className="feature_listing">
                                    <li>Security & Malware Scans</li>
                                    <li>Weekly Backups</li>
                                    <li>Malware Cleanups</li>
                                    <li>24/7 Uptime Monitoring</li>
                                    <li>WordPress Updates</li>
                                    <li>Maintenance & Bug Fixes</li>
                                    <li>Support via Email</li>
                                </ul>
                            </div>
                        </div>
                        <div className="box_footer w-full">
                        <a href="#" class="bg-customBlue text-customwhite px-6 py-3 rounded-md shadow-md transition flex items-center hover:bg-[#ffffff] hover:text-black">Sign Up Now</a>
                        </div>
                    </div>
                </div>
                <div className="pricing_col ">
                    <div className="pricing_box">
                        <div className="box_top w-full">
                            <div className="box_header">
                                <h4>Professional Plan</h4>
                                <p>Includes Premium Plan Plus</p>
                                <div className="pricing_wrap">
                                    <div className="price_text"><span className="currency">$</span><span className="price">299</span><span>00</span></div>
                                    <div className="price_duration">/Month</div>
                                </div>
                            </div>
                            <div className="box_body">
                                <ul className="feature_listing">
                                    <li>Dedicated Account Manager</li>
                                    <li>Staging/Development Site *</li>
                                    <li>Google Analytics</li>
                                    <li>Free CDN (Content Delivery Network) *</li>
                                    <li>Free SSL Certificate *</li>
                                    <li>No Charge Hosting</li>
                                    <li>Near Real-Time Back Ups (Hourly)</li>
                                    <li>Unlimited Small Jobs (3 Jobs At A Time)</li>
                                    <li>VIP Support via Email, Chat, Or Phone By Appt.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="box_footer w-full">
                        <a href="#" class="bg-customBlue text-customwhite px-6 py-3 rounded-md shadow-md transition flex items-center hover:bg-[#ffffff] hover:text-black">Sign Up Now</a>
                        </div>
                    </div>
                </div>
                <div className="pricing_col ">
                    <div className="pricing_box">
                        <div className="box_top w-full">
                            <div className="box_header">
                                <h4>Premium Plan</h4>
                                <p>Includes Essential Plan Plus</p>
                                <div className="pricing_wrap">
                                    <div className="price_text"><span className="currency">$</span><span className="price">99</span><span>00</span></div>
                                    <div className="price_duration">/Month</div>
                                </div>
                            </div>
                            <div className="box_body">
                                <ul className="feature_listing">
                                    <li>Monitor & Fix Broken Links</li>
                                    <li>Day-to-day Back Ups</li>
                                    <li>Google Analytics</li>
                                    <li>1 Small Job every Month</li>
                                    <li>Performance Monitoring</li>
                                    <li>1 Publishing Job every Month</li>
                                    <li>Priority Support via Email / Chat</li>
                                </ul>
                            </div>
                        </div>
                        <div className="box_footer w-full">
                        <a href="#" class="bg-customBlue text-customwhite px-6 py-3 rounded-md shadow-md transition hover:bg-[#ffffff] hover:text-black">Sign Up Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
