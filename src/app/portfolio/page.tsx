import AnimatedBanner from '../components/portfolio/AnimatedBanner';
import CombiningCode from "../components/homepage/CombiningCode";
import Portfoliomain from "../components/portfolio/Portfoliomain";


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
    <Portfoliomain />
    <CombiningCode/>

    </div>
</>
}


export default portfolio; 