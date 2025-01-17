'use client';
import { useEffect } from "react";
import { industries } from "@/app/data/industries";
import { skills } from "@/app/data/skills";
import { services } from "@/app/data/services";
import { technologies } from "@/app/data/technology";
import { locationsdata } from "@/app/data/locations";
import Industry from "@/app/industry/Industry";
import Skill from "@/app/skills/Skill";
import Service from "@/app/services/Service";
import Technology from "@/app/technology/Technology";
import Locations from "@/app/locations/Locations";


export default function Page() {
  

  // Fallback if no match found

    return <div>Not Found You are here now man you have got it now man shower</div>;


}
