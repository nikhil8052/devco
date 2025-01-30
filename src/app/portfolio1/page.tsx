'use client'
import AnimatedBanner from '@/app/components/portfolio/AnimatedBanner';
import CombiningCode from "@/app/components/homepage/CombiningCode";
import Portfoliomain1 from "@/app/components/portfolio/Portfoliomain1";
import ClientCount from '@/app/components/homepage/ClientCount';
// import Portfoliosection from '@/app/components/portfolio/Portfoliosection';
import { portfolio, portfolioCol1, portfolioCol2} from "@/app/data/portfolio";
import UserLayout from "../user_layout/UserLayout";

export default function Home() {   
  return (
    <UserLayout>
    <>
      <div
        className="inner_page bg-black relative text-customwhite pt-20"
        style={{
          backgroundImage: "url('/images/banner_bg.png')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <AnimatedBanner />
        <Portfoliomain1 portfolioCol1={portfolioCol1.portfolioColdata} portfolioCol2={portfolioCol2.portfolioColdata} />
        <ClientCount />
        {/* <Portfoliosection portfolioItems={portfolioItems.portfolioItemsdata} portfoliotabs={portfoliotabs.portfoliotabsdata} /> */}
        <CombiningCode CombiningCodedata={portfolio.CombiningCodedata} />
      </div>
    </>
    </UserLayout>
  );
}
