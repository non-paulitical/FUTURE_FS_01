import React from 'react'
import { Section } from '@radix-ui/themes';
import displayPicture from '../assets/images/display_picture_cropped.png'

const About = () => {
  return (
    <Section>
      <Section className='flex-wrap justify-center'>
        <div className='m-4 bg-[url('>
          <img className='' src={displayPicture} alt="Display Picture of Abhijit Paul." />
        </div>
        <div>
          <p>A Developer who</p>
          <h1>Judges a business by its landing page.</h1>
          <p>Because if the landing page doesn't impress you than what can?</p>
        </div>
      </Section>
      <Section>
        <h1>I'm a Full Stack Developer.|</h1>
        <p>Currently, I'm an Intern at Future Interns</p>
      </Section>
      <Section>
        <p>
          Hello, I'm Abhijit Paul, a passionate self-taught full stack web developer dedicated to revolutionizing the digital world with creative and impactful solutions. Let's build the future together!
        </p>
      </Section>
    </Section>
  )
}

export default About