import React from 'react';
import './App.scss';
import {Navbar} from './Components';
import{Home,About,Skills,Projects,Contact,Footer} from './Containers';

function App() {
  return (
    <div className='app'>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App;