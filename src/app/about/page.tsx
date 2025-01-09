'use client';
import Aboutbanner from '@/app/components/about/Aboutbanner';
import CombiningCode from "@/app/components/homepage/CombiningCode";
import{Combinecode,Aboutbannerdata} from '@/app/data/about'

export default function AboutPage() {
  return (
    <div className="aboutpage bg-black relative text-customwhite items-center pt-20"
    style={{
      backgroundImage: "url('/images/aboutbg.png')",
      backgroundRepeat: "no-repeat",
    }}>
      <Aboutbanner dynamicData={Aboutbannerdata.dynamicData} />
      <CombiningCode CombiningCodedata={Combinecode.CombiningCodedata} />
    </div>
  );
}
