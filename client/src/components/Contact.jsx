import React, { useState } from 'react'
import { Section, Button } from '@radix-ui/themes';
import { EmailAlert } from '../components';

const Contact = () => {

  const [visitorName, setVisitorName] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');
  const [visitorMessage, setVisitorMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailStatus, setEmailStatus] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[a-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const BASE_URL = 'http://127.0.0.1:3000';

    if (!emailRegex.test(visitorEmail)) {
      setErrorMessage('Enter a Valid Email');
      let error = document.getElementById('error-message');
      error.textContent = errorMessage;
    }

    const data = {
      name: visitorName,
      email: visitorEmail,
      message: visitorMessage
    };

    try {
      const email = await fetch(BASE_URL + '/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json'
        }
      })
      setEmailStatus(email.ok ? 200 : 500)
    } catch (error) {
      setEmailStatus(500);
    }


    setVisitorName('');
    setVisitorEmail('');
    setVisitorMessage('');

  }

  return (

    <Section id='contact' className='pb-5'>
      <Section className="section-heading">Contact</Section>
      <Section className='contact-card-wrapper p-2 md:w-3/5 mx-auto'>
        <EmailAlert status={emailStatus} onClose={() => setEmailStatus(null)}/>
        <div className="contact-card border border-card-border rounded-md" >
          <form className='contact-form *:block space-y-2 p-2 input:bg-white flex flex-col' action="" onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor="visitor-name">Name:</label>
            <input onChange={(event) => setVisitorName(event.target.value)} value={visitorName} type="text" id='visitor-name' name='visitor-name' placeholder='Enter your name' />

            <label htmlFor="visitor-email">Email:</label>
            <input onChange={(event) => setVisitorEmail(event.target.value)} value={visitorEmail} type="text" id='visitor-email' name='visitor-email' placeholder='Enter your email' />
            <p id="error-message" className='text-red-500 text-xs self-center'></p>

            <label htmlFor="visitor-message">Message:</label>
            <textarea onChange={(event) => setVisitorMessage(event.target.value)} value={visitorMessage} id="visitor-message" name="visitor-message" placeholder='Enter your message'></textarea>
            <Button className='bg-button mx-auto p-2 cursor-pointer' type='submit'>Submit</Button>
          </form>
        </div>
      </Section>
    </Section>
  )
}

export default Contact