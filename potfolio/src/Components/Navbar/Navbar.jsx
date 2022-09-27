import React, { useState } from 'react';
import './Navbar.scss';
import { Constant } from '../../Constant';
import images from '../../Constant/images';

function Navbar() {

  const [menu, setMenu] = useState(false);

  const menuClick=(e)=>{
    setMenu(!menu)
  }

  return (
    <nav className='App__Navbar'>
      <div className='App__Navbar-logo'>
        <a href='#Home'><img className='logo' src={images.logo} alt="logo"/></a>
      </div>
      <ul className='app__flex App__Navbar-list'>
        {['Home','About','Skills','Projects','Contact'].map((link)=>(
          <li key={`link-${link}`}>
            <a href={`#${link}`}>{link}</a>
            <div></div>
          </li>
        ))}
      </ul>

      <div className='app__flex App__Navbar-menu'>
        {(!menu)?<div>
          <button onClick={menuClick}><i class="fa fa-bars"></i></button></div>
        :<div className='app__flex App__Navbar-menu-false'>
          <button onClick={menuClick}><i class="fa-solid fa-xmark"></i></button>
          <div className='app__flex App__Navbar-menu-false-list'>
          <ul className='App__Navbar-menu-true-list'>
        {['Home','About','Skills','Projects','Contact'].map((link)=>(
          <li onClick={()=>setMenu(false)} key={`link-${link}`}>
            <a href={`#${link}`}>{link}</a>
      
          </li>
        ))}
      </ul>
          </div>
        </div>}
      </div>
    </nav>
  )
}

export default Navbar;