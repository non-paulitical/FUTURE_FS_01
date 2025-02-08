import React from 'react'
import { Section } from '@radix-ui/themes';

const Skills = () => {
  return (
    <Section className='min-h-screen md:min-h-[60vh] flex flex-col bg-[url("/assets/gradient/gradient.svg")] bg-repeat-space bg-contain md:bg-rounded'>
      <Section>
        <h1 className='section-heading'>Skills</h1>
      </Section>
      <Section className='cards flex-1 grid grid-cols-1 gap-5 md:grid-cols-2 md:content-center'>
        <div className='card md:grid-cols-1'>
          <div className='card-background'></div>
          <div className='card-content'>
            <h3 className='card-heading'>LANGUAGES</h3>
            <ul className='card-list'>
              <li>C Language</li>
              <li>C++</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
        <div className='card md:grid-cols-2'>
          <div className='card-background'></div>
          <div className='card-content'>
            <h3 className='card-heading'>LIBRARIES/FRAMEWORK</h3>
            <ul className='card-list'>
              <li>Django</li>
              <li>ReactJS</li>
              <li>NextJS</li>
              <li>ExpressJS</li>
              <li>REST Framework</li>
            </ul>
          </div>
        </div>
        <div className='card md:grid-cols-1 md:col-start-1 md:col-span-2 md:row-start-2 md:justify-self-center md:w-1/2'>
          <div className='card-background'></div>
          <div className='card-content'>
            <h3 className='card-heading'>TOOLS</h3>
            <ul className='card-list'>
              <li>Version Controlling - Git</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </Section>
    </Section>
  )
}

export default Skills