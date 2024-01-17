import React from 'react';
import Nav from './components/Nav';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';


function App() {
  return (
    <div className='bg-[#edf2f8] overflow-hidden dark:bg-gray-900'>
     <Nav />
     <Home/>
     <hr className='hr'/>
     <About/>
     <hr className='hr'/>
     <Skills/>
     <hr className='hr'/>
     <Projects/>
     <hr className='hr'/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App;
