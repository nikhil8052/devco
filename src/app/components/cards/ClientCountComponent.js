'use client';

import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function ClientCount({ title, description, counttitle }) {
  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="w-full p-5 md:p-10 sm:p-7 border-2 border-lightBlue rounded-md bg-white/3 backdrop-blur-lg h-full"
    >
      {/* Animated Counter */}
      <div className="mb-2">
        <h3 className="counttitle text-[36px] font-bold text-customWhite">
          {startCount ? (
            <CountUp end={parseInt(counttitle, 10)} duration={2} />
          ) : (
            '0'
          )}
        </h3>
      </div>

      {/* Dynamic Title */}
      <div>
        <h5 className="text-customWhite font-semibold text-[18px] xl:text-[25px] lg:text-20px] md:text-[18px] sm:text-[18px] mb-2 md:mb-5 sm:mb-3">
          {title}
        </h5>

        {/* Dynamic Description */}
        <p className="text-customWhite font-normal text-[14px] xl:text-[20px] lg:text-[18px] md:text-[14px] sm:text-[14px]">
          {description}
        </p>
      </div>
    </div>
  );
}
