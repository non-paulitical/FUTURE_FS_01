import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from '@radix-ui/themes';
import { NavBar, About, Projects, Skills, Contact } from './components';
import './App.css'

function App() {
  return (
    <Router>
      <Container className="h-full bg-background text-base-text">
        <header className="sticky top-0">
          <NavBar />
        </header>
        <div className="wrapper m-5 w-4/5 lg:w-3/5 mx-auto">
          <main className=''>
            <About />
            <Projects />
            <Skills />
          </main>
          <footer className=''>
            <Contact />
          </footer>
        </div>
      </Container>
    </Router>
  )
}

export default App
