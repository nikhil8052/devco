'use client'
import UserLayout from "../user_layout/UserLayout";
import UiTopbanner from '@/app/components/uxui/UiTopbanner';
import TextAnimated from '@/app/components/uxui/TextAnimated';
import Swappinglogos from '@/app/components/uxui/Swappinglogos';
import Textanimatedleft from '@/app/components/uxui/Textanimatedleft';
import CenterAnimatedtext from '@/app/components/uxui/CenterAnimatedtext';


export default function Home() {   
  return (
    <UserLayout>
    <>
      <div
        className="inner_page ux_ux_page bg-black relative text-customwhite pt-20" style={{backgroundImage: "url('/images/banner_bg.png')",backgroundRepeat: "no-repeat",
        }}
      >

      <UiTopbanner />
      <div className="section_wrap relative">
        <div className="sectyion_inner relative z-10">
          <Swappinglogos />
          <TextAnimated />
        </div>
        <CenterAnimatedtext />
        <Textanimatedleft />
      </div>

      </div>
    </>
    </UserLayout>
  );
}
