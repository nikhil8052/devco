import React from 'react';
import FormPage from "@/app/components/siteforms/Formpage";

export default function contact() {
  return (
    <div className='form_pagemain bg-black relative text-customwhite pt-20'  style={{
      backgroundImage: "url('/images/banner_bg.png')",
      backgroundRepeat: "no-repeat",
    }}>
      <FormPage/>
    </div>

  )
}
