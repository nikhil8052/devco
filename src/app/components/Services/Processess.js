import React from 'react';
import Process from '@/app/components/Services/Process';

export default function Benefits({title="", description="", processes=[]}) {
  return (
    <div className="benefits-section py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">{title+description}</h2>
      </div>

      <div className="benefits-container grid grid-cols-1 md:grid-cols-2 gap-6 p-6  mx-auto">
        {
          processes.map((obj, index )=>{
           
            return (
               <div key={index} >
                    <Process
                      title={obj.title}
                      description={obj.description}
                      imageHeight={obj.imageHeight}
                      imageWidth={obj.imageWidth}
                    />
               </div>
            )
          })
        }
       
      </div>
    </div>
  );
}
