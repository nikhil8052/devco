'use client';
import Chooseservice from "@/app/components/Services/Chooseservice";
import Aboutbanner from '@/app/components/about/Aboutbanner';
import CombiningCode from "@/app/components/homepage/CombiningCode";
import StartUps from "@/app/components/Services/StartUps";
import Bordertextsection from "@/app/components/industry/Bordertextsection";
import Dividercontainer from "@/app/components/skills/Dividercontainer";
import { Combinecode, Aboutbannerdata, startups, BorderTextbox,chooseServices,teamdatasection} from '@/app/data/about';
import Teamsection from '@/app/components/about/Teamsection';
import Image from "next/image";
import UserLayout from "../user_layout/UserLayout";

export default function AboutPage() {
  return (
    <UserLayout>
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


     <div className='about_border_section aboutpage_sections relative'>
     <div className="bg_right-pattern absolute top-[0%] right-0 z-1 w-[50%]">
        <Image
          src="/images/why-use.png"
          width={1920}
          height={500}
          alt="Background Pattern"
        />
      </div>
     <div className='innercontent relative z-10'>
      <Bordertextsection
            BorderTextdata={BorderTextbox.BorderTextdata}
          />
      <div className="divider mt-2">
          <Dividercontainer />
        </div>
                {/* Startups Section */}
        <StartUps
          title={startups.title}
          description={startups.description}
          images={startups.images}
          imageHeight={startups.imageHeight}
          imageWidth={startups.imageWidth}
        />
        <div className="divider">
          <Dividercontainer />
        </div>

     <div className="about_chooseservice">
     <Chooseservice
          title={chooseServices.title}
          description={chooseServices.description}
          chooseData={chooseServices.card_data}
        />
     </div>
     </div>
     </div>
     <div className="divider mt-2">
          <Dividercontainer />
        </div>
     <Teamsection teamData={teamdatasection.teamData} />

      {/* Combining Code Section */}
     <div className="pattern_bg_combinesection"  
     style={{
        backgroundImage: "url('/images/combinecodebg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Ensures the background image scales properly
      }}>
      <CombiningCode CombiningCodedata={Combinecode.CombiningCodedata} />
     </div>
     
    </div>
    </UserLayout>
  );
}
