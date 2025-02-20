import React, { useState } from 'react'
import { Section, Button } from '@radix-ui/themes';

const Contact = () => {

  const [visitorName, setVisitorName] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');
  const [visitorMessage, setVisitorMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(visitorEmail)) {
      setErrorMessage('Enter a Valid Email');
      let error = document.getElementById('error-message');
      error.textContent = errorMessage;
    }

    



    
  }

  return (
    <Section id='contact' className='pb-5'>
      <Section className="section-heading">Contact</Section>
      <Section className='contact-card-wrapper p-2 md:w-3/5 mx-auto'>
        <div className="contact-card border border-card-border rounded-md" >
          <form className='contact-form *:block space-y-2 p-2 input:bg-white' action="" onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor="visitor-name">Name:</label>
            <input onChange={(event) => setVisitorName(event.target.value)} value={visitorName} type="text" id='visitor-name' name='visitor-name' placeholder='Enter your name' />

            <label htmlFor="visitor-email">Email:</label>
            <input onChange={(event) => setVisitorEmail(event.target.value)} value={visitorEmail} type="text" id='visitor-email' name='visitor-email' placeholder='Enter your email' />
            <p id="error-message" className='w-3/7 text-red-500 text-xs mx-auto'></p>

            <label htmlFor="visitor-message">Message:</label>
            <textarea onChange={(event) => setVisitorMessage(event.target.value)} value={visitorMessage} id="visitor-message" name="visitor-message" placeholder='Enter your message'></textarea>
            <Button className='bg-button mx-auto p-2' type='submit'>Submit</Button>
          </form>
        </div>
      </Section>
    </Section>
  )
}

export default Contact