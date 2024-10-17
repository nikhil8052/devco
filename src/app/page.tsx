
import HeroBanner from "./components/layout/HeroBanner"
export default function Home() {
  return (
    <>
    <div className="home_page bg-black relative text-custom-white items-center pt-20" style={{
          backgroundImage: "url('/images/banner_bg.png')",
          backgroundRepeat: "no-repeat",
        }}>
      <HeroBanner />
    </div>
    </>
  );
}
