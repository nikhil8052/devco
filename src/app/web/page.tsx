'use client'
import UserLayout from "../user_layout/UserLayout";
import UiTopbanner from '@/app/components/web/UiTopbanner';
import TextAnimated from '@/app/components/web/TextAnimated';
import TextAnimated2 from '@/app/components/web/TextAnimated2';
import Swappinglogos from '@/app/components/uxui/Swappinglogos';
import Textanimatedleft from '@/app/components/web/Textanimatedleft';
import CenterAnimatedtext from '@/app/components/uxui/CenterAnimatedtext';
import NewSlider from '@/app/components/uxui/NewSlider';
import Centeranimtetextbottom from '@/app/components/web/Centeranimtetextbottom';
import ParrlexScrolltemp from '@/app/components/web/ParrlexScrolltemp';
import Testimonials from '@/app/components/uxui/Testimonials';
import Logofloat from '@/app/components/Logofloat';
import { mainservicedata } from '@/app/data/mainservice';
import NewfaqSection from '@/app/components/faq/NewfaqSection';
import { faqsData } from '@/app/data/web'; // Added missing import
import Standout from '@/app/components/web/Standout';

export default function Home() {   
  const logofloatData = mainservicedata[0];

  return (
    <UserLayout>
      <div 
        className="inner_page ux_ux_page bg-black relative text-customwhite pt-20"
        style={{
          backgroundImage: "url('/images/banner_bg.png')",
          backgroundRepeat: "no-repeat"
        }}
      >
        <UiTopbanner />

        <div className="section_wrap">
          <div className="sectyion_inner relative">
            <img 
              src="/images/left_eclip_ux_video.svg" 
              className="absolute left-0 bottom-0 z-20 w-[50%]" 
              alt="Left Eclipse"
            />
            <div className="div_wrap relative z-10">
              <Swappinglogos />
              <TextAnimated />
            </div>
          </div>

          <div className="slider_sectux relative">
            <img 
              src="/images/slider_right_exux.png" 
              className="absolute right-0 bottom-[-20%] z-2 w-[50%]" 
              alt="Slider Right"
            />
            <div className="sect_slider_wrap relative z-10">
              <NewSlider />
            </div>
          </div>

          <CenterAnimatedtext />
          <Textanimatedleft />
        </div>

        <ParrlexScrolltemp />
        <TextAnimated2 />


        <Logofloat
          firstrowimages={logofloatData.firstrowimages.imagesdata}
          secondrowimages={logofloatData.secondrowimages.imagesdata}
          thirdrowimages={logofloatData.thirdrowimages.imagesdata}
          fourthrowimages={logofloatData.fourthrowimages.imagesdata}
        />

        <Testimonials />
        <Standout />
        <NewfaqSection
        subtitle={faqsData.faqs.subtitle}
          title={faqsData.faqs.title}
          description={faqsData.faqs.description}
          faqs={faqsData.faqs.faqs}
        />

        <div className="bottom_section relative">
          <img 
            src="/images/faz_bg.png" 
            className="absolute bottom-0 h-full w-full" 
            alt="Background"
          />
          <div className="div_z relative z-10">
            <Centeranimtetextbottom />
          </div>
        </div>
      </div>

    </UserLayout>
  );
}
