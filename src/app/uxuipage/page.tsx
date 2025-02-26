'use client'
import UserLayout from "../user_layout/UserLayout";
import UiTopbanner from '@/app/components/uxui/UiTopbanner';
import TextAnimated from '@/app/components/uxui/TextAnimated';

export default function Home() {   
  return (
    <UserLayout>
    <>
      <div
        className="inner_page ux_ux_page bg-black relative text-customwhite pt-20" style={{backgroundImage: "url('/images/banner_bg.png')",backgroundRepeat: "no-repeat",
        }}
      >

      <UiTopbanner />
      <TextAnimated />

      </div>
    </>
    </UserLayout>
  );
}
