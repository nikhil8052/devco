import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const skillsmenu = [
  { name: 'Artificial Intelligence',image: '/images/menu_ai.svg', link: '/ai' },
  { name: 'Cybersecurity', image: '/images/menu_cybersecrty.svg', link: '/cybersecurity' },
  { name: 'Robotic Process Automation', image: '/images/menu_robotic_process.svg', link: '/robotic-process-automation' },
  { name: 'Blockchain (DLT)', image: '/images/menu_blockchain.svg', link: '/blockchain' },
  { name: 'Extended Reality (AR/VR)',image: '/images/menu_er.svg', link: '/vr' },
  { name: 'ERP', image: '/images/menu_erp.svg', link: '/erp' },
  { name: 'CRM',image: '/images/menu_crm.svg', link: '/crm' },
  { name: 'Online Storage', image: '/images/menu_online_storage.svg', link: '/online-storage' },
  { name: 'Big Data', image: '/images/menu_bigdata.svg', link: '/big-data' },
  { name: 'Business Intelligence', image: '/images/menu_businessintel.svg', link: '/bi' },
  { name: 'Internet of Things (IOT)', image: '/images/menu_internet-fthings.svg', link: '/iot' },
];

const Technologymenu = () => {
  return (
    <div className="submenu_flex w-full flex gap-2">
      <div className="menu_icons_div basis-[100%]">
        <ul className="icon_list w-full flex flex-wrap gap-y-1">
          {skillsmenu.map((skill, index) => (
            <li key={index} className="p-2 basis-[20%] flex flex-col items-center">
              <Link
                href={skill.link}
                aria-label={skill.name}
                className="flex flex-col items-center"
              >
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={50}  // Adjust size as needed
                  height={50} // Adjust size as needed
                  className="mb-2"
                />
                <span className="text-customwhite text-center">{skill.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Technologymenu;
