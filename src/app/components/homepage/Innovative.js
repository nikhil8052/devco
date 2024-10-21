import React from 'react';
import Image from 'next/image';

export default function Innovative() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-white-800 md:text-3xl">Innovative Software</h3>
        <h3 className="text-2xl font-semibold text-customBlue md:text-3xl">Development Services</h3>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mb-8">
        <Image src='/images/innovate.webp' width={1000} height={800} alt="Innovative" className="rounded-lg shadow-lg"/>
      </div>

      {/* Text Section */}
     <div className="text-left">
        <h2 className="text-xl font-bold text-customBlue mb-4">Our Services</h2>
        <h4 className="text-lg font-semibold text-white-700 mb-4">
            At DEV.co, we provide full-stack custom software development solutions to businesses small and large.
        </h4>
        <p className="text-gray-600 mb-6 px-4 md:px-0">
            As a custom software dev agency, we cover the full breadth of custom solutions by developing websites, mobile apps, custom portals, billing solutions, artificial intelligence, SaaS, big data, and other cloud-based applications.
        </p>
        <h4 className="text-lg font-semibold text-white-700 mb-4">12+ years as a software development company</h4>
        <p className="text-gray-600 px-4 md:px-0">
            For over a decade, we have developed a proven, repeatable system for delivering quality code. We provide solutions across the software development life cycle, ensuring we out-deliver above other custom software development firms on the market.
        </p>
        </div>

    </div>
  );
}
