'use client'
import React, { useState } from 'react';

const SaaSCalculator = () => {
  const [inputs, setInputs] = useState({
    monthlyCustomers: 100,
    avgRevenuePerCustomer: 99,
    churnRate: 5,
    upsellRate: 10,
    acquisitionCost: 500
  });

  const calculateAnnualRevenue = () => {
    const monthlyRevenue = inputs.monthlyCustomers * inputs.avgRevenuePerCustomer;
    const churnLoss = monthlyRevenue * (inputs.churnRate / 100);
    const upsellGain = monthlyRevenue * (inputs.upsellRate / 100);
    const acquisitionCosts = inputs.monthlyCustomers * inputs.acquisitionCost / 12;
    return (monthlyRevenue - churnLoss + upsellGain - acquisitionCosts) * 12;
  };

  const handleSliderChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: parseFloat(e.target.value)
    });
  };

  const sliderStyle = "w-full accent-gray-400 bg-gray-400";

  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-black text-white rounded-lg font-[Montserrat]">
      <h1 className="text-3xl font-bold mb-4">SaaS Revenue Calculator</h1>
      <p className="mb-6 text-gray-300">
        Optimize your SaaS business metrics with our advanced revenue calculator. 
        Project growth, analyze customer acquisition costs, and forecast annual recurring revenue (ARR)
        for your software-as-a-service venture.
      </p>

      <div className="space-y-6">
        <div>
          <label className="block mb-2">Monthly New Customers</label>
          <input
            type="range"
            name="monthlyCustomers"
            min="0"
            max="1000"
            value={inputs.monthlyCustomers}
            onChange={handleSliderChange}
            className={sliderStyle}
          />
          <span className="text-white">{inputs.monthlyCustomers}</span>
        </div>

        <div>
          <label className="block mb-2">Average Revenue Per Customer ($)</label>
          <input
            type="range"
            name="avgRevenuePerCustomer"
            min="0"
            max="999"
            value={inputs.avgRevenuePerCustomer}
            onChange={handleSliderChange}
            className={sliderStyle}
          />
          <span className="text-white">${inputs.avgRevenuePerCustomer}</span>
        </div>

        <div>
          <label className="block mb-2">Monthly Churn Rate (%)</label>
          <input
            type="range"
            name="churnRate"
            min="0"
            max="30"
            step="0.1"
            value={inputs.churnRate}
            onChange={handleSliderChange}
            className={sliderStyle}
          />
          <span className="text-white">{inputs.churnRate}%</span>
        </div>

        <div>
          <label className="block mb-2">Monthly Upsell Rate (%)</label>
          <input
            type="range"
            name="upsellRate"
            min="0"
            max="50"
            step="0.1"
            value={inputs.upsellRate}
            onChange={handleSliderChange}
            className={sliderStyle}
          />
          <span className="text-white">{inputs.upsellRate}%</span>
        </div>

        <div>
          <label className="block mb-2">Customer Acquisition Cost ($)</label>
          <input
            type="range"
            name="acquisitionCost"
            min="0"
            max="2000"
            value={inputs.acquisitionCost}
            onChange={handleSliderChange}
            className={sliderStyle}
          />
          <span className="text-white">${inputs.acquisitionCost}</span>
        </div>

        <div className="mt-8 p-6 bg-gray-900 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Projected Annual Revenue</h2>
          <p className="text-4xl text-white">
            ${calculateAnnualRevenue().toLocaleString()}
          </p>
        </div>

        <a 
          href="/schedule-consultation" 
          className="block w-full text-center bg-white hover:bg-gray-100 text-black font-bold py-3 px-4 rounded-lg mt-8 transition duration-300"
        >
          Schedule a Free SaaS Growth Consultation
        </a>
      </div>
    </div>
  );
};

export default SaaSCalculator;