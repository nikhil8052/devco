'use client'
import AnimatedBanner from '../components/portfolio/AnimatedBanner';
import CombiningCode from "../components/homepage/CombiningCode";
import Portfoliomain from "../components/portfolio/Portfoliomain";
import ClientCount from '../components/homepage/ClientCount';
import { portfolio } from "@/app/data/portfolio";


export default function Home() {
    
return <>
    <div
        className="inner_page bg-black relative text-customwhite pt-20"
        style={{
          backgroundImage: "url('/images/banner_bg.png')",
          backgroundRepeat: "no-repeat",
        }}
      >
    <AnimatedBanner/>
    <Portfoliomain />
    <ClientCount/>
    <CombiningCode CombiningCodedata={portfolio.CombiningCodedata } />


    </div>
    </>
}
