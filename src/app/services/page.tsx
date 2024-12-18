'use client';

import Logofloat from "@/app/components/Logofloat";
import Centerbanner from "@/app/components/Services/Centerbanner";
import Textcardsection from "@/app/components/Services/Textcardsection";
import Textbuttonsection from "@/app/components/Services/Textbuttonsection";
import Iconsection from "@/app/components/Services/Iconsection";
import Industryfaqs from "@/app/components/faq/Industryfaqs";
import CodeHeading from "@/app/components/Services/CodeHeading"
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
      <Textcardsection 
      title={serviceData.Textcardsection.top_title} 
      description={serviceData.Textcardsection.top_description}
      Textcardata={serviceData.Textcardsection.Textcardata}
      />
      <Textcardsection 
      title={serviceData.Textcardsection2.top_title} 
      description={serviceData.Textcardsection2.top_description}
      Textcardata={serviceData.Textcardsection2.Textcardata}
      />
      <Iconsection
       title={serviceData.Iconsection.top_title} 
       description={serviceData.Iconsection.top_description}
      />
      <Textcardsection 
      title={serviceData.Textcardsection3.top_title} 
      description={serviceData.Textcardsection3.top_description}
      Textcardata={serviceData.Textcardsection3.Textcardata}
      />
        <Textcardsection 
      title={serviceData.Textcardsection4.top_title} 
      description={serviceData.Textcardsection4.top_description}
      Textcardata={serviceData.Textcardsection4.Textcardata}
      />
     <Textbuttonsection 
      title={serviceData.Textbuttonsection.top_title} 
      description={serviceData.Textbuttonsection.top_description}
      />
      <CodeHeading headingContent={serviceData.codeheadingsection.headingContent}/>

      <Industryfaqs title={serviceData.faqs.title} description={serviceData.faqs.description} faqs={serviceData.faqs.faqs} />
     
    </div>
  );
}
