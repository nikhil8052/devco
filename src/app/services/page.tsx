'use client';

import Logofloat from "@/app/components/Logofloat";
import Centerbanner from "@/app/components/Services/Centerbanner";
import { mainservicedata } from "@/app/data/mainservice";

export default function Services() {
  // Extracting the first service data from the array
  const serviceData = mainservicedata[0]; 

  return (
    <div
      className="main_service_page bg-black"
      style={{
        backgroundImage: "url('/images/banner_bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Logo Float Component */}
      <Logofloat 
        firstrowimages={serviceData.firstrowimages.imagesdata} 
        secondrowimages={serviceData.secondrowimages.imagesdata} 
        thirdrowimages={serviceData.thirdrowimages.imagesdata}
        fourthrowimages={serviceData.fourthrowimages.imagesdata}
      />
      
      {/* Center Banner Component */}
      <Centerbanner
        subtitle={serviceData.sub_title}
        title={serviceData.top_title}
        description={serviceData.top_description}
      />
    </div>
  );
}
