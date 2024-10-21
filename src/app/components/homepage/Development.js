import React from 'react';
import TechCard from '../cards/TechCard';
import { techCard1 , techCard2 } from '../../data/home';

export default function Development() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Grid layout for two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
  );
}
