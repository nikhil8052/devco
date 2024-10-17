// components/Header.tsx
'use client'
import Link from 'next/link';

const Header = () => {
  // Define your navigation items with optional dropdown items
  const navItems = [
    { label: 'Services', path: '/services' },
    { 
      label: 'Skills', 
      path: '/skills',
      dropdown: [
        { label: 'Team', path: '/about/team' },
        { label: 'Company', path: '/about/company' },
      ],
    },
    { label: 'Technologies', path: '/technologies' },
    
    { label: 'Industries', path: '/industries' },
    { label: 'Our Work', path: '/our-work' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },



  ];

  return (
    <header className=" text-white p-4 z-10 absolute top-0 left-0 site_header">
     <div className='container mx-auto'>
      <nav>
          <ul className="flex space-x-4">
            {navItems.map((item, index) => (
              <li key={index} className="relative group"> {/* Add relative positioning for dropdown */}
                <Link href={item.path} className="hover:text-blue-400">
                  {item.label}
                </Link>
                
                {/* Render dropdown if it exists */}
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ul className="py-2">
                      {item.dropdown.map((dropItem, dropIndex) => (
                        <li key={dropIndex}>
                          <Link 
                            href={dropItem.path} 
                            className="block px-4 py-2 text-white hover:bg-gray-600"
                          >
                            {dropItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
     </div>
    </header>
  );
};

export default Header;
