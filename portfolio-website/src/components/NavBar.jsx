import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Section } from '@radix-ui/themes';

const NavBar = () => {
  const [isMenuClosed, setisMenuClosed] = useState(true);

  const toggleMenu = () => {
    setisMenuClosed(!isMenuClosed);
  };

  return (
    <>
      {/* Mobile View */}
      <nav className='sticky lg:hidden bg-navbar'>
        <Section className='logo-menu  h-15 p-5 flex justify-between items-center'>
          <img className='h-15' src="/Logo.svg" alt="Logo" />
          <Button onClick={toggleMenu} className='p-1 underline decoration-gray-600 underline-offset-3 underline-white' variant='outline'>
            Menu
          </Button>
        </Section>
        <Section className={isMenuClosed ? "hidden" : "nav-links fixed inset-0 top-15 z-50 h-[calc(100vh-3.75rem)]"}>
          <div className="absolute inset-0 bg-navbar">
            <ul className='h-full space-y-10 text-3xl font-bold flex flex-col justify-center items-center'>
              <li><Link to='#about'>ABOUT</Link></li>
              <li><Link to='#projects'>PROJECTS</Link></li>
              <li><Link to='#skills'>SKILLS</Link></li>
              <li><Link to='#contact'>CONTACT</Link></li>
            </ul>
          </div>
        </Section>
      </nav>

      {/* Desktop View */}
      <nav className='hidden lg:block'>
        <div className='bg-navbar flex justify-around items-center'>
          <Section className='logo-menu  h-15 p-5 flex justify-around items-center'>
            <img className='h-15' src="/Logo.svg" alt="Logo" />
          </Section>
          <Section>
            <ul className='flex gap-10 *:hover:underline underline-offset-4'>
              <li><Link to='#about'>ABOUT</Link></li>
              <li><Link to='#projects'>PROJECTS</Link></li>
              <li><Link to='#skills'>SKILLS</Link></li>
              <li><Link to='#contact'>CONTACT</Link></li>
            </ul>
          </Section>
        </div>
      </nav>
    </>

  );
};

export default NavBar