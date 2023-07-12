import React from 'react';
import './App.scss';
import {Navbar} from './Components';
import{Home,About,Skills,Projects,Contact,Footer,ExploreMore} from './Containers';
import { Routes, Route } from "react-router-dom";


function Layout(){
  return(
    <>
      <Home/>
      <hr/>
      <About/>
      <hr/>
      <Skills/>
      <hr/>
      <Projects/>
      <hr/>
      <Contact/>
    </>
  )
}



function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
       <Route path='/'  index element={<Layout />} />
       <Route path='Projects/exploremore' element={<ExploreMore/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
