import React from 'react'
import { Link } from 'react-router-dom';
import { Section } from '@radix-ui/themes';

const DesktopNavBar = () => {
  return (
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
  )
}

export default DesktopNavBar