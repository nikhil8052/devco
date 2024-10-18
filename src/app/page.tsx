import HeroBanner from "./components/layout/HeroBanner";
import Faq from "./components/faq/Faq";
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


    </div>
    
    </>
  );
}
