import HeroBanner from "./components/layout/HeroBanner";
import Faq from "./components/faq/Faq";

import DesignSection from './components/Services/DesignSection';
import ClientCount from './components/homepage/ClientCount';
import { service1, service2, service3 } from "./data/home";
import StartUps from './components/homepage/StartUps';
import Innovative from './components/homepage/Innovative';
import Development from './components/homepage/Development';
import CustomDevelopement from './components/homepage/CustomDevelopement';
import CustomsofSection from './components/homepage/CustomsofSection';
import CombiningCode from './components/homepage/CombiningCode';
import Logofloat from "@/app/components/Logofloat";
import { mainservicedata } from "@/app/data/mainservice";



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
        <CombiningCode />
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
