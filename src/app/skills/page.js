import StartUps from "@/app/components/Services/StartUps";
// import HeroBanner from "@/app/components/Services/HeroBanner";
import SkillBanner from "@/app/components/skills/SkillBanner"
import Benefits from "@/app/components/Services/Benefits";
// import Processess from "@/app/components/Services/Processess";
import CombiningCode from '@/app/components/homepage/CombiningCode';
import Chooseservice from "@/app/components/Services/Chooseservice";
import CustomsofSection from "@/app/components/homepage/CustomsofSection";
import DeveloperDo from "@/app/components/skills/DeveloperDo";
import Simpleimage from "@/app/components/skills/Simpleimage";
import Simpletextdjs from "@/app/components/skills/Simpletextdjs";
import Whyusecard from "@/app/components/cards/Whyusecard";
import Ultextgrid from "@/app/components/skills/Ultextgrid";
// import { skills } from "@/app/data/services";
import Benefitslider from "@/app/components/skills/Benfitslider";
import Textbuttonimg from "@/app/components/skills/Textbuttonimg";
import Subheadingtext from "@/app/components/skills/Subheadingtext";
import Dividercontainer from "@/app/components/skills/Dividercontainer";
import Checkedulimage from "@/app/components/cards/Checkedulimage";
import Processess from "@/app/components/Services/Processess";



export default function Home({data}) {
  const skill = data
  return (
    <>
      <SkillBanner
        bannericon={skill.bannericon}
        subtitle={skill.sub_title}
        title={skill.top_title}
        description={skill.top_description}
      />
      <StartUps
        title={skill.startups?.title}
        description={skill.startups?.description}
        images={skill.startups?.images}
        imageHeight={skill.startups?.imageHeight}
        imageWidth={skill.startups?.imageWidth}
      />
      <Benefits title={skill.benefits?.title} />
      <Chooseservice {...skill.chooseServices1} />
      <Whyusecard />
      <Ultextgrid />
      <CustomsofSection />
      <DeveloperDo />
      <Simpleimage />
      <Simpletextdjs />
      <Chooseservice {...skill.chooseServices2} />
      <StartUps
        images={skill.startups?.images}
        imageHeight={skill.startups?.imageHeight}
        imageWidth={skill.startups?.imageWidth}
      />
      <CombiningCode />
      <Benefitslider chooseData={skill.Benefitslider?.card_datas} />
      <Processess
        title={skill.processes?.title}
        processes={skill.processes?.processes}
      />
      <Textbuttonimg />
      <Subheadingtext
        heading={skill.Subheadingtext?.heading || "Default Heading"}
        subText={skill.Subheadingtext?.subText || "Default SubText"}
        list1={skill.Subheadingtext?.list1 || []}
        list2={skill.Subheadingtext?.list2 || []}
      />
      <Dividercontainer />
      <Chooseservice {...skill.chooseServices1} />
      <Checkedulimage />
      <Simpletextdjs />
      <CombiningCode />
    </>
  );
}

