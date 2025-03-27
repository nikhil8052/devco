import React from 'react';
import BorderTextbox from "@/app/components/industry/borderTextbox"; // Ensure correct casing for component import

export default function Bordertextsection({ BorderTextdata = [] }) {
  // Check if data is available
  if (!BorderTextdata.length) {
    return null; // Do not render the section if no data is present
  }

  return (
    <div className='new_section benefits_section border-sectionmain'>
      <div className='container'>
        <div className="benefits-container justify-between max-w-[1000px] m-auto lg:flex grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 md:gap-y-10 rounded overflow-hidden shadow-lg border-lightBlue border p-5 lg:p-8 md:p-6 h-full">
          {BorderTextdata.map((obj, index) => (
            <div key={index}>
              <BorderTextbox 
                title={obj.title} 
                description={obj.description} 
                sitelist={obj.sitelist || []} // Pass sitelist if available, otherwise an empty array
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
