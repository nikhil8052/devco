'use client';
import Aboutbanner from '@/app/components/about/Aboutbanner';
import {  Aboutbannerdata } from '@/app/data/thanks';
import UserLayout from "../user_layout/UserLayout";

export default function AboutPage() {
  return (
    <UserLayout>
    <div
      className="aboutpage thankspage bg-black relative text-customwhite items-center pt-20"
      style={{
        backgroundImage: "url('/images/aboutbg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Ensures the background image scales properly
      }}
    >
      {/* About Banner */}
      <Aboutbanner dynamicData={Aboutbannerdata.dynamicData} />
      <div className="thankspagebutton">
      <div
                className="btn_wrapper flex justify-center gap-x-4"
              >
                <a
                  href="/portfolio"
                  className="bg-white text-black px-3 md:px-6 text-[15px] py-2 rounded-md shadow-md transition flex items-center hover:bg-[#4353FF] hover:text-white"
                >
                  View Case studies
                </a>
               
              </div>
      </div>


     
    </div>
    </UserLayout>
  );
}
