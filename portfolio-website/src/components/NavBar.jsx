import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Section } from '@radix-ui/themes';

// Shared Logo Component
const NavLogo = () => (
  <img className='h-15' src="/Logo.svg" alt="Logo" />
);

// Shared Navigation Links Component
const NavLinks = ({ mobile = false }) => (
  <ul className={`${mobile ? 
    'h-full space-y-10 text-3xl font-bold flex flex-col justify-center items-center' : 
    'flex gap-10 *:hover:underline underline-offset-4'}`}
  >
    <li><Link to='#about'>ABOUT</Link></li>
    <li><Link to='#projects'>PROJECTS</Link></li>
    <li><Link to='#skills'>SKILLS</Link></li>
    <li><Link to='#contact'>CONTACT</Link></li>
  </ul>
);

const NavBar = () => {
  const [isMenuClosed, setIsMenuClosed] = useState(true);

  return (
    <nav className='sticky bg-navbar'>
      {/* Mobile Controls */}
      <div className='lg:hidden'>
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
        <Section className={`${isMenuClosed ? 'hidden' : 'fixed inset-0 top-15 z-50 h-[calc(100vh-3.75rem)]'}`}>
          <div className="absolute inset-0 bg-navbar">
            <NavLinks mobile />
          </div>
        </Section>
      </div>

      {/* Desktop Navigation */}
      <div className='hidden lg:block'>
        <div className='flex justify-around items-center'>
          <Section className='h-15 p-5'>
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