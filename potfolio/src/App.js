import React from 'react';
import './App.scss';
import {Navbar} from './Components';
import{Home,About,Skills,Projects,Contact,Footer,ExploreMore} from './Containers';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function Layout(){
  return(
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
      <Footer/>
    </div>
  )
}

function Explore(){
  return(
    <div className="explore">
       <Navbar/>
       <ExploreMore />
       <Footer/>
    </div>
  )
}


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route index element={<Layout />} />
        <Route path="explore" element={<Explore />} />
        <Route path="*" element={<Layout />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;