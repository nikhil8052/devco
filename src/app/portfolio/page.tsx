import AnimatedBanner from '../components/portfolio/AnimatedBanner';
import CombiningCode from "../components/homepage/CombiningCode";

const portfolio =()=>{

    
return <>
    <div
        className="inner_page bg-black relative text-customwhite pt-20"
        style={{
          backgroundImage: "url('/images/banner_bg.png')",
          backgroundRepeat: "no-repeat",
        }}
      >

    <AnimatedBanner/>
    <CombiningCode/>

    </div>
</>
}


export default portfolio; 