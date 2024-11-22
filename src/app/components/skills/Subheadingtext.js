"use client";
import React from 'react';

const Subheadingtext = () => {
    return (
        <div className="sub-heading-ulli-sec py-10 md:py-20 relative">
            <div className="container relative z-10">
                <div className="code_content">
                    <div className="relative mx-auto w-full mb-5 ">
                        <h3 className="text-[24px] max-w-[438px] 2xl:text-[40px] xl:text-[36px] md:text-[30px] sm:text-[26px] font-semibold mb-2">
                            Interesting Facts About JavaScript
                        </h3>
                    </div>
                    <div className='ulli-text'>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 gap-x-4 md:gap-y-10">
                            <ul className="section_ulli pl-7 text-opacity-70 max-w-[500px] 2xl:max-w-[690px] list-disc text-[14px] 2xl:text-[22px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-normal text-customwhite md:mb-4">
                                <li>JavaScript was created in 1995 by a Netscape employee named Brendan Eich</li>
                                <li>JavaScript powers 20% of <u>WordPress’ core code</u></li>
                                <li>JS is the only programming language that can be used on the front-end of a website</li>
                                <li>JavaScript wasn’t always compatible with mobile devices, but is now supported by all modern web browsers for mobile and desktop</li>
                                <li>JS can be used offline because it’s executed in the browser</li>
                                <li>The best web developers can also program in JavaScript</li>
                                <li>It’s hard to find a website that doesn’t utilize JS</li>
                                <li>Although JavaScript was inspired by Java, they are completely different, although they share libraries and syntax</li>
                            </ul>
                            <ul className="section_ulli pl-7 text-opacity-70 max-w-[500px] 2xl:max-w-[690px] list-disc text-[14px] 2xl:text-[22px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-normal text-customwhite md:mb-4">
                                <li>The popular document repository for journalists called DocumentCloud utilizes JavaScript and JSON to dynamically display document contents</li>
                                <li>69.7% of web developers prefer JavaScript</li>
                                <li>JavaScript frameworks make it easy for developers to build a new project and saves time and money</li>
                                <li>There are 24+ JS frameworks and 83+ libraries available for developers</li>
                                <li>JavaScript programmers continually create new libraries to add more functionality and make programming easier</li>
                                <li>jQuery and Node.js are the most popular JavaScript framework and are used in 50.4% and 48.3% of projects respectively. Angular.js and React.js come in second and are used in 32.4% and 32.3% of projects, respectively.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subheadingtext;