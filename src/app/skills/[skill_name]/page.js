import StartUps from "@/app/components/Services/StartUps";
import HeroBanner from "@/app/components/Services/HeroBanner";
import Benefits from "@/app/components/Services/Benefits";
// import Processess from "@/app/components/Services/Processess";
import { skills } from "@/app/data/skills";
import CombiningCode from '../../components/homepage/CombiningCode';
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





export default function Home(content) {

const slug = content.params.service_name;

// Find the skill based on the slug or return the first skill if not found
const skill = skills.find((item) => item.slug === slug) || skills[0];

// Now 'skill' will either be the matching skill or the first item in the array



  return (
    <>
  
      <HeroBanner subtitle={skill.sub_title} title={skill.top_title}  description={skill.top_description} bannericon={skills.bannericon} />
      <StartUps title={skill.startups.title}  description={skill.startups.description}  images={skill.startups.images} imageHeight={skill.startups.imageHeight}   imageWidth={skill.startups.imageWidth}   />
      <Benefits  title={skill.benefits.title}  description={skill.benefits.description}  benefits={skill.benefits.benefits} />
      <Chooseservice/>
      <Whyusecard/>
      <Ultextgrid/>
      <CustomsofSection/>
      <DeveloperDo/>
      <Simpleimage/>
      <Simpletextdjs/>
      <Chooseservice/>
      <StartUps  images={skill.startups.images} imageHeight={skill.startups.imageHeight}   imageWidth={skill.startups.imageWidth}   />
      <CombiningCode/>
      {/* <Chooseservice chooseData={skill.chooseServices.card_data  } /> */}
      <Benefitslider chooseData={skill.Benefitslider.card_datas  }/>
      <Textbuttonimg/>
      <Subheadingtext/>
      <Dividercontainer/>
      <Chooseservice/>
      <Simpletextdjs/>
      {/* <Processess  title={skill.processes.title }  processes={skill.processes.processes}  /> */}
      <CombiningCode/>
          
    </>
  );
}
