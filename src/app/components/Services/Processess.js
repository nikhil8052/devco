import React from 'react';
import Process from '@/app/components/Services/Process';

export default function Benefits() {
  return (
    <div className="benefits-section py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Our Development Process</h2>
      </div>

      <div className="benefits-container grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-5xl mx-auto">
        <Process
          title="Save Time"
          description="A staffing agency will save you time by taking care of most of the recruiting work, letting you focus on other important tasks."
        />
        <Process
          title="Save Money"
          description="We provide cost-effective staffing solutions that help you reduce the cost of recruitment and employee turnover."
        />
        <Process
          title="Get Access to Top Talent"
          description="Gain access to a large pool of top talent that matches your specific project needs and business goals."
        />
        <Process
          title="Cover All Your Skilled Needs"
          description="We provide professionals for a wide range of technical needs, from development to management."
        />
      </div>
    </div>
  );
}
