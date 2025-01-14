'use client';

import Aboutbanner from '@/app/components/about/Aboutbanner';
import CombiningCode from "@/app/components/homepage/CombiningCode";
import StartUps from "@/app/components/Services/StartUps";
import Bordertextsection from "@/app/components/industry/Bordertextsection";
import { Combinecode, Aboutbannerdata, startups, BorderTextbox } from '@/app/data/about';

export default function AboutPage() {
  return (
    <div
      className="aboutpage bg-black relative text-customwhite items-center pt-20"
      style={{
        backgroundImage: "url('/images/aboutbg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Ensures the background image scales properly
      }}
    >
      {/* About Banner */}
      <Aboutbanner dynamicData={Aboutbannerdata.dynamicData} />


     <div className='about_border_section'>
      <Bordertextsection
          BorderTextdata={BorderTextbox.BorderTextdata}
        />
              {/* Startups Section */}
      <StartUps
        title={startups.title}
        description={startups.description}
        images={startups.images}
        imageHeight={startups.imageHeight}
        imageWidth={startups.imageWidth}
      />
     </div>

      {/* Combining Code Section */}
      <CombiningCode CombiningCodedata={Combinecode.CombiningCodedata} />
    </div>
  );
}
