import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from '@radix-ui/themes';
import { NavBar, About, Projects, Skills, Contact } from './components';
import './App.css'

function App() {
  return (
    <Router >
      <Container className="h-full bg-background text-base-text">
        <header className="sticky top-0 z-10">
          <NavBar />
        </header>
        <div className="wrapper mt-5 w-4/5 md:w-3/5 mx-auto *:space-y-25 ">
          <main>
            <About />
            <Projects />
            <Skills />
          </main>
          <footer className='mt-25'>
            <Contact />
          </footer>
        </div>
      </Container>
    </Router >
  )
}

export default App
