'use client';

import LocationContactSectio from "@/app/components/locations/locationContactsectio";
import { cmbcodedata } from "@/app/data/locations";

const locations = [
  { name: "Albuquerque", image: "/images/Albuquerque.png" },
  { name: "Atlanta", image: "/images/Atlanta.png" },
  { name: "Baltimore", image: "/images/Baltimore.png" },
  { name: "Boston", image: "/images/Boston.png" },
  { name: "Chesapeake", image: "/images/Chesapeake.png" },
  { name: "Cleveland", image: "/images/Cleveland.png" },
  { name: "Dallas", image: "/images/Dallas.png" },
  { name: "El Paso", image: "/images/El Paso.png" },
  { name: "Fresno", image: "/images/Fresno.png" },
  { name: "Greensboro", image: "/images/Greensboro.png" },
  { name: "Indianapolis", image: "/images/Indianapolis.png" },
  { name: "Jersey City", image: "/images/Jersey City.png" },
  { name: "Lexington", image: "/images/Lexington.png" },
  { name: "Louisville", image: "/images/Louisville.png" },
  { name: "Mesa", image: "/images/Mesa.png" },
  { name: "Nashville", image: "/images/Nashville.png" },
  { name: "Norfolk", image: "/images/Norfolk.png" },
  { name: "Orlando", image: "/images/Orlando.png" },
  { name: "Raleigh", image: "/images/Raleigh.png" },
  { name: "San Diego", image: "/images/San Diego.png" },
  { name: "Tucson", image: "/images/Tucson.png" },
  { name: "Anaheim", image: "/images/Anaheim.png" },
  { name: "Aurora", image: "/images/Aurora.png" },
  { name: "Baton Rouge", image: "/images/Baton Rouge.png" },
  { name: "Buffalo", image: "/images/Buffalo.png" },
  { name: "Chicago", image: "/images/Chicago.png" },
  { name: "Colorado Springs", image: "/images/Colorado Springs.png" },
  { name: "Denver", image: "/images/Denver.png" },
  { name: "Fort Wayne", image: "/images/Fort Wayne.png" },
  { name: "Garland", image: "/images/Garland.png" },
  { name: "Henderson", image: "/images/Henderson.png" },
  { name: "Irvine", image: "/images/Irvine.png" },
  { name: "Kansas City", image: "/images/Kansas City.png" },
  { name: "Lincoln", image: "/images/Lincoln.png" },
  { name: "Lubbock", image: "/images/Lubbock.png" },
  { name: "Miami", image: "/images/Miami.png" },
  { name: "New Orleans", image: "/images/New Orleans.png" },
  { name: "Oakland", image: "/images/Oakland.png" },
  { name: "Philadelphia", image: "/images/Philadelphia.png" },
  { name: "Sacramento", image: "/images/Sacramento.png" },
  { name: "San Francisco", image: "/images/San Francisco.png" },
  { name: "Washington D.C.", image: "/images/Washington D.C..png" },
  { name: "Anchorage", image: "/images/Anchorage.png" },
  { name: "Austin", image: "/images/Austin.png" },
  { name: "Bentonville", image: "/images/Bentonville.png" },
  { name: "Chandler", image: "/images/Chandler.png" },
  { name: "Chula Vista", image: "/images/Chula Vista.png" },
  { name: "Columbus", image: "/images/Columbus.png" },
  { name: "Detroit", image: "/images/Detroit.png" },
  { name: "Fort Worth", image: "/images/Fort Worth.png" },
  { name: "Gilbert", image: "/images/Gilbert.png" },
  { name: "Honolulu", image: "/images/Honolulu.png" },
  { name: "Irving", image: "/images/Irving.png" },
  { name: "Laredo", image: "/images/Laredo.png" },
  { name: "Long Beach", image: "/images/Long Beach.png" },
  { name: "Madison", image: "/images/Madison.png" },
  { name: "Milwaukee", image: "/images/Milwaukee.png" },
  { name: "New York City", image: "/images/New York City.png" },
  { name: "Oklahoma City", image: "/images/Oklahoma City.png" },
  { name: "Phoenix", image: "/images/Phoenix.png" },
  { name: "Salt Lake City", image: "/images/Salt Lake City.png" },
  { name: "San Jose", image: "/images/San Jose.png" },
  { name: "West Palm Beach", image: "/images/West Palm Beach.png" },
  { name: "Arlington", image: "/images/Arlington.png" },
  { name: "Bakersfield", image: "/images/Bakersfield.png" },
  { name: "Boise", image: "/images/Boise.png" },
  { name: "Charlotte", image: "/images/Charlotte.png" },
  { name: "Cincinnati", image: "/images/Cincinnati.png" },
  { name: "Corpus Christi", image: "/images/Corpus Christi.png" },
  { name: "Durham", image: "/images/Durham.png" },
  { name: "Fremont", image: "/images/Fremont.png" },
  { name: "Glendale", image: "/images/Glendale.png" },
  { name: "Houston", image: "/images/Houston.png" },
  { name: "Jacksonville", image: "/images/Jacksonville.png" },
  { name: "Las Vegas", image: "/images/Las Vegas.png" },
  { name: "Los Angeles", image: "/images/Los Angeles.png" },
  { name: "Memphis", image: "/images/Memphis.png" },
  { name: "Minneapolis", image: "/images/Minneapolis.png" },
  { name: "Newark", image: "/images/Newark.png" },
  { name: "Omaha", image: "/images/Omaha.png" },
  { name: "Portland", image: "/images/Portland.png" },
  { name: "San Antonio", image: "/images/San Antonio.png" },
  { name: "Seattle", image: "/images/Seattle.png" }
];

export default function Home() {
  return (
    <>
      <div
        className="inner_page bg-black relative text-customwhite pt-20"
        style={{
          backgroundImage: "url('/images/banner_bg.png')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="inner_banner_content text-center py-20">
          <h1 className="text-[34px] 2xl:text-[64px] xl:text-[45px] md:text-[36px] sm:text-[34px] font-semibold mb-4">
            Locations We Serve
          </h1>
        </div>
        <div className="locations_wrap">
          <div className="container mx-auto">
            <div className="locations_grid">
                {locations.map((location, index) => (
                <div className="location_col" key={index}>
                    <a
                      href={`/${location.name.toLowerCase().replace(/ /g, "-")}`}
                      className="location_box"
                    >
                      <div className="location_thumb">
                        <img src={location.image} alt={location.name} />
                      </div>
                      <div className="location_text">
                        <h3>{location.name}</h3>
                      </div>
                    </a>
                </div>
                ))}
            </div>
          </div>
        </div>

        <LocationContactSectio CombiningCodedata={cmbcodedata.CombiningCodedata} />
      </div>
    </>
  );
}
