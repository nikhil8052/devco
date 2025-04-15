'use client'
import UserLayout from "../user_layout/UserLayout";
import UiTopbanner from '@/app/components/uxui/UiTopbanner';
import TextAnimated from '@/app/components/uxui/TextAnimated';
import Swappinglogos from '@/app/components/uxui/Swappinglogos';
import Textanimatedleft from '@/app/components/uxui/Textanimatedleft';
import CenterAnimatedtext from '@/app/components/uxui/CenterAnimatedtext';
import NewSlider from '@/app/components/uxui/NewSlider';
import Centeranimtetextbottom from '@/app/components/uxui/Centeranimtetextbottom';
import ParrlexScrolltemp from '@/app/components/uxui/ParrlexScrolltemp';
import Testimonials from '@/app/components/uxui/Testimonials';




export default function Home() {   
  return (
    <UserLayout>
    <>
      <div
        className="inner_page ux_ux_page bg-black relative text-customwhite pt-20" style={{backgroundImage: "url('/images/banner_bg.png')",backgroundRepeat: "no-repeat",
        }}
      >

      <UiTopbanner />
      <div className="section_wrap ">
        <div className="sectyion_inner relative ">
          <img src="/images/left_eclip_ux_video.svg" alt="Pattern Image" className="absolute left-[0] bottom-[0] z-2 w-[50%]"></img>
          <div className="div_wrap relative z-10">
            <Swappinglogos />
            <TextAnimated />
          </div>
        </div>
        <div className="slider_sectux relative">
        <img src="/images/slider_right_exux.png" alt="Pattern Image 2" className="absolute right-[0] bottom-[-20%] z-2 w-[50%]"></img>
          <div className="sect_slider_wrap relative z-10">
            <NewSlider />
          </div>
        </div>
        <CenterAnimatedtext />
        <Textanimatedleft />
      </div>
      <ParrlexScrolltemp />
      <Testimonials />

      <div className="bottom_section relative">
        <img src="/images/faz_bg.png" alt="bottom pattern image" className="absolute bottom-[0] h-full w-full"></img>
        <div className="div_z relative z-10">
        <Centeranimtetextbottom />
        </div>
      </div>

      </div>
    </>
    </UserLayout>
  );
}
