import React from 'react';
import './Home.scss';
import images from '../../Constant/images';
import { AppWrap } from '../../Wrapper';

function Home() {
  return (
 
      <div className='App__Header-container app__container'>
        <div className='App__Header-container-left app__flex'>
          <div>
            <h3>Hello,I'm</h3>
            <div className="typing">
              <div className="typing-effect">
              <h1>Meganathan.</h1>
              </div>
            </div>
           
            <p>
          I am a Freelance Web Designer. I work with small  business owners, 
          startups, and individuals who want to get more online visibility.
        </p>
        <button><a href='#Contact'>Get in touch</a></button>
      
          </div>
        </div>
        <div className='App__Header-container-right'>
          <div className='App__Header-container-right-img'>
            <div>
              <img src={images.profile} alt="profile" ></img>
            </div>
            
          <div className='App__Header-slogan-text'>
            <h1 ><span>never</span> settle</h1>
          </div>
          <div className="media">
            <h2 className='bluet'>never</h2>
            <h2 >settle</h2>
          </div>
        </div>
        </div>
       
       
      </div>
 
  )
}

export default AppWrap(Home,'Home');