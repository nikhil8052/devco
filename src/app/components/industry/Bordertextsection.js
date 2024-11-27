import React from 'react';
import BorderTextbox from "./borderTextbox"; // Updated to PascalCase for components

const data = [
  {
    title: "Why Government Entities Need Custom Software Development",
    description: "",
  },
  {
    title: "",
    description: `Government entities – whether at the civic, state, or federal level – are unique in that they have to account for a myriad of factors that private businesses don’t traditionally have to face. <br></br>
    Intensive security requirements, extensive bidding processes, and careful vetting mean only a handful of software developers are qualified. And the ones that are must be able to offer a diverse array of solutions.`,
  },
  // Add more objects as needed
];

export default function Bordertextsection() {
  return (
    <div className='new_section benefits_section'>
      <div className='container'>
        <div className="benefits-container grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 rounded overflow-hidden shadow-lg border-lightBlue border p-5 lg:p-8 md:p-6 h-full">
          {
            data.map((obj, index) => {
              return (
                <div key={index}>
                  <BorderTextbox 
                    title={obj.title} 
                    description={obj.description} 
                  />
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}
