import dynamic from 'next/dynamic';
import HeroBanner from "@/app/components/layout/HeroBanner";
import { service1, service2, service3, metadata } from "@/app/data/home";
import { mainservicedata } from "@/app/data/mainservice";
import { Combinecode } from '@/app/data/home';
import UserLayout from './user_layout/UserLayout';
import LazyBackgroundSection from '@/app/components/LazyBackgroundSection'

// SSR ENABLED (visible above the fold)
import StartUps from '@/app/components/homepage/StartUps';
import DesignSection from '@/app/components/Services/DesignSection';
import Innovative from '@/app/components/homepage/Innovative';
import Development from '@/app/components/homepage/Development';

// SSR DISABLED (below the fold)
const ClientCount = dynamic(() => import('@/app/components/homepage/ClientCount'), { ssr: false });
const CustomsofSection = dynamic(() => import('@/app/components/homepage/CustomsofSection'), { ssr: false });
const CustomDevelopement = dynamic(() => import('@/app/components/homepage/CustomDevelopement'), { ssr: false });
const CombiningCode = dynamic(() => import('@/app/components/homepage/CombiningCode'), { ssr: false });
const Logofloat = dynamic(() => import('@/app/components/Logofloat'), { ssr: false });
const Faq = dynamic(() => import('@/app/components/faq/Faq'), { ssr: false });

export default function Home() {
  const serviceData1 = mainservicedata[0]; 


  return (
    <>
    <UserLayout>

      <div
        className="home_page bg-black relative text-customwhite items-center pt-20"
        style={{
          backgroundImage: "url('/images/banner_bg1.webp')",
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
    
    </UserLayout>
    
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


