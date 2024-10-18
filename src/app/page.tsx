import HeroBanner from "./components/layout/HeroBanner";
import Faq from "./components/faq/Faq";
import BasicCard from "./components/cards/BasicCard";
import TechCard from "./components/cards/TechCard";
import ClientCount from "./components/cards/ClientCount";
import { homeCard1, techCard1, techCard2 } from "./data/home.js";
import DesignSection from './components/Services/DesignSection';


export default function Home() {

  const clientCountData = {
    imageSrc: '/images/cc1.svg',
    imageWidth: 180,
    imageHeight: 74,
    title: 'Website Development',
    description: 'Our web development team builds dozens of websites monthly, integrating the right technology stack with cross platform applications for the best possible user experience to your web apps.',
  };


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
      <DesignSection/>
      <Faq /> 
      {/* {homeCard1.map((cardData, index) => (
          <BasicCard key={index} cardData={cardData} />
        ))} */}

        {/* <TechCard
          title={techCard1.title}
          description={techCard1.description}
          imageSrc={techCard1.imageSrc}
          imageWidth={techCard1.imageWidth}
          imageHeight={techCard1.imageHeight}
          subTitle={techCard1.subTitle}
          details={techCard1.details}
        /> */}
        

        <ClientCount
          imageSrc={clientCountData.imageSrc}
          imageWidth={clientCountData.imageWidth}
          imageHeight={clientCountData.imageHeight}
          title={clientCountData.title}
          description={clientCountData.description}
        />

    </div>
    
    </>
  );
}
