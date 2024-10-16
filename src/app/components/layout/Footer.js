// components/Footer.js
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  // Define your footer categories with subcategories
  const footerCategories = [
    {
      label: 'Technology',
      subCategories: [
        { label: 'Python', path: '/technology/python' },
        { label: 'CSS', path: '/technology/css' },
        { label: 'JavaScript', path: '/technology/javascript' },
      ],
    },
    {
      label: 'Design',
      subCategories: [
        { label: 'UI/UX', path: '/design/uiux' },
        { label: 'Graphic Design', path: '/design/graphic' },
      ],
    },
    {
      label: 'Development',
      subCategories: [
        { label: 'Frontend', path: '/development/frontend' },
        { label: 'Backend', path: '/development/backend' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <div className="mb-4">
        {footerCategories.map((category, index) => (
          <div key={index} className="mb-2">
            <h3 className="font-bold">{category.label}</h3>
            <div className="flex flex-col">
              {category.subCategories.map((subCategory, subIndex) => (
                <Link key={subIndex} href={subCategory.path} className="hover:text-blue-400 mx-2">
                  {subCategory.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p>© 2024 My Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
