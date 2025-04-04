"use client";
import UserLayout from "../user_layout/UserLayout";
import Textbanner from "@/app/components/terms/Textbanner";
import { Topbannerdata } from "@/app/data/terms";
import TermsDatablock from "@/app/components/terms/TermsDatablock";

export default function AboutPage() {
  return (
    <UserLayout>
      <div
        className="terms_page bg-black relative text-customwhite items-center pt-20"
        style={{
          backgroundImage: "url('/images/aboutbg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Ensures the background image scales properly
        }}
      >
        <Textbanner
          title={Topbannerdata?.top_title || ""}
          description={Topbannerdata?.top_description || ""}
        />
         <div className="pattern_bg_combinesection"  
     style={{
        backgroundImage: "url('/images/combinecodebg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Ensures the background image scales properly
      }}>
        <TermsDatablock />
        </div>
      </div>
    </UserLayout>
  );
}
