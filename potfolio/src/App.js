import React from 'react';
import './App.scss';
import {Navbar} from './Components';
import{Home,About,Skills,Projects,Contact,Footer} from './Containers';

function App() {
  return (
    <div className='app'>
        <Navbar/>
        <Home/>
        <hr/>
        <About/>
        <hr/>
        <Skills/>
        <hr/>
        <Projects/>
        <hr/>
        <Contact/>
        <hr/>
        <Footer/>
    </div>
  )
}

export default App;