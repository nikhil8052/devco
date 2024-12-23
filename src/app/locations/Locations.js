'use client';

import LocationContactSectio from "@/app/components/locations/locationContactsectio";
import { cmbcodedata, processes,codeheadingsection } from "@/app/data/locations";
import Processess from "@/app/components/Services/Processess";
import Locationbanner from "@/app/components/locations/Locationbanner";
import CodeHeading from "@/app/components/Services/CodeHeading";
import Locationheadtextsection from "@/app/components/locations/Locationheadtextsection";
import Loctextmedia from "@/app/components/locations/Loctextmedia";

export default function Locations({ data }) {
  const Locations = data;

  return (
    <>
      <Locationbanner
        bannericon={Locations.bannericon}
        title={Locations.top_title}
        description={Locations.top_description}
      />

      <Locationheadtextsection contentData={Locations.Locationheadtextsection.contentData} />

      <div className="divider flex items-center content-center h-[70px] md:h-[150px] w-full mx-auto">
        <div className="container mx-auto">
          <div className="divider_line h-[1px] w-full bg-[#ffffff] opacity-10"></div>
        </div>
      </div>

      <Loctextmedia contentData={Locations.Loctextmedia.contentData} />

      <CodeHeading
        headingContent={Locations.codeheadingsection.headingContent}
        paracontent={Locations.codeheadingsection.paracontent}
      />

      <LocationContactSectio CombiningCodedata={cmbcodedata.CombiningCodedata} />

      <Processess title={processes.title} processes={processes.processes} />
    </>
  );
}
