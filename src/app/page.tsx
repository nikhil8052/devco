
import HeroBanner from "./components/layout/HeroBanner";
import Faq from "./components/faq/Faq";

export default function Home() {
  return (
    <>


    <div className="home_page bg-black relative text-customwhite items-center pt-20" style={{
          backgroundImage: "url('/images/banner_bg.png')",
          backgroundRepeat: "no-repeat",
        }}>
      <HeroBanner />
        <Faq /> 
    </div>
    

    </>
  );
}