import React from 'react'
import { Section } from '@radix-ui/themes';
import displayPicture from '../assets/images/display_picture_cropped.png'
import future_interns from '../assets/icons/future_interns_logo.jpg';

const About = () => {
  return (
    <Section id='about' className='space-y-15 text-sm'>
      <Section >
        <div className="flex">
          <img className=' h-25 w-auto bg-[url("/assets/gradient/gradient.svg")] bg-no-repeat bg-cover border-1 border-[#80808036] rounded-2xl' src={displayPicture} alt="Display Picture of Abhijit Paul." />
          <div className="flex">
            <img className='h-15' src="/assets/Arrow.svg" alt="Arrow Icon" />
            <span>Hello! I Am <p className='text-themed-text'>Abhijit Paul</p></span>
          </div>
        </div>
        <div className="w-2/3 mx-auto mt-4 text-xs">
          <p>A Developer who</p>
          <span className='text-4xl'>Judges a business by its <span className="text-themed-text">landing page</span>...</span>
          <p>Because if the landing page doesn't impress you than what can?</p>
        </div>
      </Section>
      <Section className='text-sm'>
        <h1 className='text-4xl'>I'm a Full Stack Developer.|</h1>
        <span>Currently, I'm an Intern at
          <span className='text-green-500'>
            <img className='h-[0.875rem] inline m-1' src={future_interns} alt="Future Interns Logo" />
            Future Interns
          </span>,
        </span>
      </Section>
      <Section>
        <p className='text-left'>
          Hello, I'm Abhijit Paul, a passionate self-taught full stack web developer dedicated to revolutionizing the digital world with creative and impactful solutions. Let's build the future together!
        </p>
      </Section>
    </Section>
  )
}

export default About