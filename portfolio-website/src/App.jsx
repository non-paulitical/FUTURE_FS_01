import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from '@radix-ui/themes';
import { DesktopNavBar, MobileNavBar, About, Projects, Skills, Contact } from './components';
import './App.css'

function App() {
  return (
    <Router>
      <Container className="h-full bg-background text-base-text">
        <header className="sticky top-0">
          <DesktopNavBar />
          <MobileNavBar />
        </header>
        <div className="wrapper w-3/5 mx-auto">
          <main>
            <About />
            <Projects />
            <Skills />
          </main>
          <footer>
            <Contact />
          </footer>
        </div>
      </Container>
    </Router>
  )
}

export default App
