'use client'
import React, { useState } from 'react';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    initialInvestment: 100000,
    annualRevenue: 250000,
    annualCosts: 150000,
    timeframeYears: 3
  });

  const calculateROI = () => {
    const totalRevenue = inputs.annualRevenue * inputs.timeframeYears;
    const totalCosts = (inputs.annualCosts * inputs.timeframeYears) + inputs.initialInvestment;
    const netProfit = totalRevenue - totalCosts;
    const roi = (netProfit / inputs.initialInvestment) * 100;
    return roi.toFixed(2);
  };

  const handleSliderChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: parseFloat(e.target.value)
    });
  };

  const sliderStyle = "w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer";

  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-gray-900 text-gray-200 rounded-lg font-sans">
      <h1 className="text-3xl font-bold mb-4 text-white">ROI (Return on Investment) Calculator</h1>
      <p className="mb-6">
        Calculate the potential return on investment for your business initiatives
        and make data-driven decisions for your growth strategy.
      </p>

      <div className="space-y-6">
        <div>
          <label className="block mb-2">Initial Investment ($)</label>
          <input
            type="range"
            name="initialInvestment"
            min="10000"
            max="1000000"
            step="10000"
            value={inputs.initialInvestment}
            onChange={handleSliderChange}
            className={sliderStyle}
          />
          <span>${inputs.initialInvestment.toLocaleString()}</span>
        </div>

        <div>
          <label className="block mb-2">Annual Revenue ($)</label>
          <input
            type="range"
            name="annualRevenue"
            min="0"
            max="2000000"
            step="10000"
            value={inputs.annualRevenue}
            onChange={handleSliderChange}
            className={sliderStyle}
          />
          <span>${inputs.annualRevenue.toLocaleString()}</span>
        </div>

        <div>
          <label className="block mb-2">Annual Costs ($)</label>
          <input
            type="range"
            name="annualCosts"
            min="0"
            max="1500000"
            step="10000"
            value={inputs.annualCosts}
            onChange={handleSliderChange}
            className={sliderStyle}
          />
          <span>${inputs.annualCosts.toLocaleString()}</span>
        </div>

        <div>
          <label className="block mb-2">Timeframe (Years)</label>
          <input
            type="range"
            name="timeframeYears"
            min="1"
            max="10"
            step="1"
            value={inputs.timeframeYears}
            onChange={handleSliderChange}
            className={sliderStyle}
          />
          <span>{inputs.timeframeYears} years</span>
        </div>

        <div className="mt-8 p-6 bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-bold mb-2 text-white">Return on Investment</h2>
          <p className="text-4xl">
            {calculateROI()}%
          </p>
        </div>

        <button 
          className="w-full bg-white hover:bg-gray-100 text-black font-bold py-3 px-4 rounded-lg mt-8 transition duration-300"
        >
          Schedule Investment Strategy Consultation
        </button>
      </div>
    </div>
  );
};

export default ROICalculator;