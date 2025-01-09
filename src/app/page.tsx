import HeroBanner from "@/app/components/layout/HeroBanner";
import Faq from "@/app/components/faq/Faq";
import DesignSection from '@/app/components/Services/DesignSection';
import ClientCount from '@/app/components/homepage/ClientCount';
import { service1, service2, service3,metadata } from "@/app/data/home";
import StartUps from '@/app/components/homepage/StartUps';
import Innovative from '@/app/components/homepage/Innovative';
import Development from '@/app/components/homepage/Development';
import CustomDevelopement from '@/app/components/homepage/CustomDevelopement';
import CustomsofSection from '@/app/components/homepage/CustomsofSection';
import CombiningCode from '@/app/components/homepage/CombiningCode';
import Logofloat from "@/app/components/Logofloat";
import { mainservicedata } from "@/app/data/mainservice";
import {Combinecode} from '@/app/data/home'

export default function Home() {
  const serviceData1 = mainservicedata[0]; 


  return (
    <>

      <div
        className="home_page bg-black relative text-customwhite items-center pt-20"
        style={{
          backgroundImage: "url('/images/banner_bg.png')",
          backgroundRepeat: "no-repeat",
        }}
      >
        
        <HeroBanner />
        <StartUps/>
        <DesignSection title={service1.title} description={service1.description} servicesProps={service1.serviceProps}  sideImage={service1.sideImage} />
        <DesignSection title={service2.title} description={service2.description} servicesProps={service2.serviceProps}  sideImage={service2.sideImage} />
        <DesignSection title={service3.title} description={service3.description} servicesProps={service3.serviceProps}  sideImage={service3.sideImage} />
        <Innovative />
        <Development/>
        <ClientCount/>
        <CustomsofSection/>
        <CustomDevelopement/>
        <CombiningCode CombiningCodedata={Combinecode.CombiningCodedata} />
        <Logofloat 
        firstrowimages={serviceData1.firstrowimages.imagesdata} 
        secondrowimages={serviceData1.secondrowimages.imagesdata} 
        thirdrowimages={serviceData1.thirdrowimages.imagesdata}
        fourthrowimages={serviceData1.fourthrowimages.imagesdata}
      />
         <Faq /> 

    </div>
    
    </>
  );
}


export async function generateMetadata() {
  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: "website",
      images: [
        {
          url: metadata.image,
          width: 1200,
          height: 630,
          alt: "Software Development Company",
        },
      ],
    },
  };
}


