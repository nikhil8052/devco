import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const skillsmenu = [
  { name: 'Software/ IT Staffing', image: '/images/menu_soft_it.svg', link: '/staffing' },
  { name: 'DevOps', image: '/images/menu_devopserves.svg', link: '/devops' },
  { name: 'Project Management', image: '/images/menu_projectmanagement.svg', link: '/project-management' },
  { name: 'Technology Architecture', image: '/images/menu_technplogy_architech.svg', link: '/technology-architecture' },
  { name: 'Web Development', image: '/images/menu_webdevelopment.svg', link: '/web' },
  { name: 'Mobile Development', image: '/images/menu_mob_dev.svg', link: '/mobile' },
  { name: 'App Development', image: '/images/menu_applicationdev.svg', link: '/apps' },
  { name: 'UI/UX Design', image: '/images/menu_uxui.svg', link: '/ux-ui' },
  { name: 'MVP Development', image: '/images/menu_mvp-dev.svg', link: '/mvp' },
  { name: 'SaaS Development', image: '/images/menu_SaaSdev.svg', link: '/saas' },
  { name: 'API Development', image: '/images/menu_apidev.svg', link: '/api' },
  { name: 'QA & Testing', image: '/images/menu_QA.svg', link: '/testing' },
];

const Servicemenu = () => {
  return (
    <div className="submenu_flex w-full flex gap-2">
      <div className="menu_icons_div basis-[100%]">
        <ul className="icon_list w-full flex flex-wrap gap-y-2">
          {skillsmenu.map((skill, index) => (
            <li key={index} className="p-2 basis-[20%] flex flex-col items-center">
              <Link href={skill.link} aria-label={skill.name} className="flex flex-col items-center">
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

export default Servicemenu;
