import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Section } from '@radix-ui/themes';


// Navigation
const handleNavigation = (e, section, setIsMenuClosed) => {
  e.preventDefault();
  document.getElementById(section).scrollIntoView({ behavior: 'smooth', block: 'start' });
  if(setIsMenuClosed) setIsMenuClosed(true);  
}

// Shared Logo Component
const NavLogo = () => (
  <img className='h-15' src="/Logo.svg" alt="Logo" />
);

// Shared Navigation Links Component
const NavLinks = ({ mobile = false }, setIsMenuClosed) => (
  <ul className={`${mobile ?
    'h-full space-y-10 text-3xl font-bold flex flex-col justify-center items-center' :
    'flex gap-10 *:hover:underline underline-offset-4'}`}
  >
    <li><Link to={'/about'} onClick={(e) => handleNavigation(e, 'about', setIsMenuClosed)}>ABOUT</Link></li>
    <li><Link to={'/projects'} onClick={(e) => handleNavigation(e, 'projects', setIsMenuClosed)}>PROJECTS</Link></li>
    <li><Link to={'/skills'} onClick={(e) => handleNavigation(e, 'skills', setIsMenuClosed)}>SKILLS</Link></li>
    <li><Link to={'/contact'} onClick={(e) => handleNavigation(e, 'contact', setIsMenuClosed)}>CONTACT</Link></li>
  </ul>
);

const NavBar = () => {
  const [isMenuClosed, setIsMenuClosed] = useState(true);

  return (
    <nav className='sticky bg-navbar'>
      {/* Mobile Controls */}
      <div className='md:hidden'>
        <Section className='h-15 p-5 flex justify-between items-center'>
          <NavLogo />
          <Button
            onClick={() => setIsMenuClosed(!isMenuClosed)}
            className='p-1 underline decoration-gray-600 underline-offset-3'
            variant='outline'
          >
            Menu
          </Button>
        </Section>

        {/* Mobile Menu */}
        <Section className={`${isMenuClosed ? 'hidden' : 'fixed inset-0 top-15 h-[calc(100vh-3.75rem)]'}`}>
          <div className="absolute inset-0 bg-navbar">
            <NavLinks mobile setIsMenuClosed={setIsMenuClosed}  />
          </div>
        </Section>
      </div>

      {/* Desktop Navigation */}
      <div className='hidden md:block'>
        <div className='flex justify-around items-center'>
          <Section className='h-15'>
            <NavLogo />
          </Section>
          <Section>
            <NavLinks />
          </Section>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;