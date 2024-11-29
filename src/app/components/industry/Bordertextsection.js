import React from 'react';
import BorderTextbox from "./borderTextbox"; // Updated to PascalCase for components

export default function Bordertextsection({ BorderTextdata = [] }) {
  // Check if data is available
  if (!BorderTextdata.length) {
    return null; // Do not render the section if no data is present
  }

  return (
    <div className='new_section benefits_section'>
      <div className='container'>
        <div className="benefits-container grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 rounded overflow-hidden shadow-lg border-lightBlue border p-5 lg:p-8 md:p-6 h-full">
          {
            BorderTextdata.map((obj, index) => (
              <div key={index}>
                <BorderTextbox 
                  title={obj.title} 
                  description={obj.description} 
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
