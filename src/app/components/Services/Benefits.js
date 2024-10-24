import React from 'react';
import Benefit from "@/app/components/Services/Benefit";

export default function Benefits({ benefits=[]}) {
  return (
    <div className="benefits-container grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
     
        {
          benefits.map((obj, index)=>{
            return (
              <div key={index}>
                 <Benefit title={obj.title}  description={obj.description}   imageSrc={obj.imageSrc}  imageHeight={obj.imageHeight}  imageWidth={obj.imageWidth}   />
              </div>
            )
          })
        }
    </div>
  );
}
