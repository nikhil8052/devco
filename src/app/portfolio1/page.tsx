'use client'
import AnimatedBanner from '@/app/components/portfolio/AnimatedBanner';
import Portfoliomain1 from "@/app/components/portfolio/Portfoliomain1";
import ClientCount from '@/app/components/homepage/ClientCount';
import Portfoliosection from '@/app/components/portfolio/Portfoliosection';
import {  portfolioCol1, portfolioCol2,portfolioItems,portfoliotabs} from "@/app/data/portfolio";
import UserLayout1 from "../user_layout/UserLayout1";

export default function Home() {  
  
  
  
  return (
    <UserLayout1>
    <>
      <div
        className="inner_page bg-black relative text-customwhite pt-20"
        style={{
          backgroundImage: "url('/images/banner_bg.png')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <AnimatedBanner />
        <Portfoliomain portfolioCol1={portfolioCol1.portfolioColdata} portfolioCol2={portfolioCol2.portfolioColdata} />
        <ClientCount />
        <Portfoliosection portfolioItems={portfolioItems.portfolioItemsdata} portfoliotabs={portfoliotabs.portfoliotabsdata} />
        {/* <CombiningCode CombiningCodedata={portfolio.CombiningCodedata} /> */}
      </div>
    </>
    </UserLayout1>
  );
}
