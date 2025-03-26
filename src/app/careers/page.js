import React from 'react';
import Careerpage from "@/app/components/siteforms/Careerpage";
import UserLayout from "../user_layout/UserLayout";

export default function contact() {
  return (
    <UserLayout >
    <div className='form_page bg-black relative text-customwhite pt-20'>
      <Careerpage/>
    </div>
    </UserLayout>
  )
}
