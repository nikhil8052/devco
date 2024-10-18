import HeroBanner from "./components/layout/HeroBanner";
import Faq from "./components/faq/Faq";
import DesignSection from './components/Services/DesignSection';
import { service1, service2, service3 } from "./data/home";


export default function Home() {


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
        <DesignSection title={service1.title} description={service1.description} servicesProps={service1.serviceProps} backgroundImage={service1.backgroundImage} sideImage={service1.sideImage} />
        <DesignSection title={service2.title} description={service2.description} servicesProps={service2.serviceProps} backgroundImage={service2.backgroundImage} sideImage={service2.sideImage} />
        <DesignSection title={service3.title} description={service3.description} servicesProps={service3.serviceProps} backgroundImage={service3.backgroundImage} sideImage={service3.sideImage} />
      <Faq /> 


    </div>
    
    </>
  );
}
