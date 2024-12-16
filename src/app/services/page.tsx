'use client';
import Logofloat from "@/app/components/Logofloat";
import { firstrowimages, secondrowimages } from "@/app/data/services";
import Centerbanner from "@/app/components/Services/Centerbanner";


export default function Services() {
  return (
    <div 
      className="main_service_page bg-black" 
      style={{
        backgroundImage: "url('/images/banner_bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Ensures the image covers the background nicely
        backgroundPosition: "center", // Center-align the background
      }}
    >
      <Logofloat 
        firstrowimages={firstrowimages.imagesdata} 
        secondrowimages={secondrowimages.imagesdata} 
      />
   <Centerbanner/>
    </div>
  );
}
