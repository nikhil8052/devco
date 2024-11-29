'use client'
import { industries } from "@/app/data/industries";
import StartUps from "@/app/components/Services/StartUps";
import SkillBanner from "@/app/components/skills/SkillBanner"
import Bordertextsection from "@/app/components/industry/Bordertextsection";
import Processess from "@/app/components/Services/Processess";
import CombiningCode from '../../components/homepage/CombiningCode';
import Benefitslider from "@/app/components/skills/Benfitslider";
import Subheadingtext from "@/app/components/skills/Subheadingtext";

export default function Home(content) {
  const slug = content.params.industry_name;
  console.log("Slug:", slug);

  const selectedindustries = industries.find((item) => item.slug === slug) || industries[0];
  console.log("Selected Industries:", selectedindustries);

  return (
    <>
      <SkillBanner
        bannericon={selectedindustries.bannericon}
        subtitle={selectedindustries.sub_title}
        title={selectedindustries.top_title}
        description={selectedindustries.top_description}
      />
      {/* <StartUps
        title={selectedindustries.startups?.title}
        description={selectedindustries.startups?.description}
        images={selectedindustries.startups?.images}
        imageHeight={selectedindustries.startups?.imageHeight}
        imageWidth={selectedindustries.startups?.imageWidth}
      /> */}
      <Bordertextsection
        BorderTextdata={selectedindustries.BorderTextbox?.BorderTextdata}
      />
      <Benefitslider
        title={selectedindustries.Benefitslider?.title}
        description={selectedindustries.Benefitslider?.description}
        chooseData={selectedindustries.Benefitslider?.card_datas}
      />
      <Subheadingtext
        heading={selectedindustries.Subheadingtext?.heading}
        subText={selectedindustries.Subheadingtext?.subText}
        list1={selectedindustries.Subheadingtext?.list1}
        list2={selectedindustries.Subheadingtext?.list2}
      />
      <Processess
        title={selectedindustries.processes?.title}
        processes={selectedindustries.processes?.processes}
      />
      <CombiningCode />
    </>
  );
}

