import React from 'react';
import Benefit from "@/app/components/Services/Benefit";

export default function Benefits() {
  return (
    <div className="benefits-container grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      <Benefit title="Save time"/>
      <Benefit title="Save money"   />
      <Benefit title="Get access to top talent"  />
      <Benefit title="Cover all your skilled needs"  />
    </div>
  );
}
