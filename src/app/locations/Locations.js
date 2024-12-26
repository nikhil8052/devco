'use client';

import LocationContactSectio from "@/app/components/locations/locationContactsectio";
import { cmbcodedata, processes } from "@/app/data/locations";
import Processess from "@/app/components/Services/Processess";
import Locationbanner from "@/app/components/locations/Locationbanner";
import CodeHeading from "@/app/components/Services/CodeHeading";
import Locationheadtextsection from "@/app/components/locations/Locationheadtextsection";
import Loctextmedia from "@/app/components/locations/Loctextmedia";
import Industryfaqs from "@/app/components/faq/Industryfaqs";
import Textblockfull from "@/app/components/Textblockfull";
import Benefits from "@/app/components/Services/Benefits";

export default function Locations({ data }) {
  const Locations = data;

  return (
    <>
      {/* Location Banner */}
        <Locationbanner
          bannericon={Locations.bannericon}
          title={Locations.top_title}
          description={Locations.top_description}
        />


      {/* Location Head Text Section */}
      {Locations?.Locationheadtextsection?.contentData && (
        <Locationheadtextsection contentData={Locations.Locationheadtextsection.contentData} />
      )}

      {/* Divider */}
      <div className="divider flex items-center content-center h-[70px] md:h-[150px] w-full mx-auto">
        <div className="container mx-auto">
          <div className="divider_line h-[1px] w-full bg-[#ffffff] opacity-10"></div>
        </div>
      </div>

      {/* Location Text Media */}
      {Locations?.Loctextmedia?.contentData && (
        <Loctextmedia contentData={Locations.Loctextmedia.contentData} />
      )}

      {/* Benefits */}
      {Locations?.benefits?.title && Locations?.benefits?.benefits && (
        <Benefits
          title={Locations.benefits.title}
          description={Locations.benefits.description}
          benefits={Locations.benefits.benefits}
        />
      )}

      {/* Code Heading */}
      {Locations?.codeheadingsection?.headingContent && Locations?.codeheadingsection?.paracontent && (
        <CodeHeading
          headingContent={Locations.codeheadingsection.headingContent}
          paracontent={Locations.codeheadingsection.paracontent}
        />
      )}

      {/* Text Block Full */}
      {Locations?.Textblockfull?.sectionData && (
        <Textblockfull Textblockdata={Locations.Textblockfull.sectionData} />
      )}

      {/* Location Contact Section */}
      {cmbcodedata?.CombiningCodedata && (
        <LocationContactSectio CombiningCodedata={cmbcodedata.CombiningCodedata} />
      )}

      {/* Processes */}
      {processes?.title && processes?.processes && (
        <Processess title={processes.title} processes={processes.processes} />
      )}

      {/* FAQs */}
      {Locations?.faqs?.faqs?.length > 0 && (
        <Industryfaqs
          title={Locations.faqs.title}
          description={Locations.faqs.description}
          faqs={Locations.faqs.faqs}
        />
      )}
    </>
  );
}
