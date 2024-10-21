import React from 'react';
import TechCard from '../cards/TechCard';
import { techCard1 , techCard2 } from '../../data/home';

export default function Development() {
  return (
    <div className='tech_card_section py-5'>
      <div className="container mx-auto">
      {/* Grid layout for two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 relative border-t border-b border-lightBlue py-12">
        <div className='vertical_center_line absolute top-0 h-full'></div>
        <TechCard
          title={techCard1.title}
          description={techCard1.description}
          imageSrc={techCard1.imageSrc}
          imageWidth={techCard1.imageWidth}
          imageHeight={techCard1.imageHeight}
          subTitle={techCard1.subTitle}
          details={techCard1.details}
        />
        <TechCard
          title={techCard2.title}
          description={techCard2.description}
          imageSrc={techCard2.imageSrc}
          imageWidth={techCard2.imageWidth}
          imageHeight={techCard2.imageHeight}
          subTitle={techCard2.subTitle}
          details={techCard2.details}
        />
      </div>
    </div>
    </div>
  );
}
