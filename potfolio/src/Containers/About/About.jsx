import React, { useEffect } from 'react';
import './About.scss';
import { AppWrap } from '../../Wrapper';
import images from '../../Constant/images';
import AOS from 'aos';
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration : 1000,
    });
  }, []);


  return (
    <div className='App__About App__Content app__container'>
      <div className="row about-row ">
        <div className="col-lg-6 about-left">
          <div className="about-img" data-aos="fade-right">
              <img src={images.profile} alt="profile picture"/>
          </div>
        </div>
        <div className="col-lg-6 about-right">
          <div className="about-content">
          <h3 data-aos="fade-up">Discover</h3>
          <h1 data-aos="fade-up">About Me</h1>
              <p  data-aos="fade-up">
                  Welcome to my portfolio website! I'm Meganathan, a skilled developer specializing in front-end and back-end development. 
                  At the age of 21, I bring a youthful perspective and fresh ideas to create visually appealing and user-friendly interfaces. 
                  With expertise in ReactJS, HTML, CSS, JavaScript, Node.js, and the MERN stack.</p>
              <p  className='hide-para' data-aos="fade-up">Throughout my career, I have successfully completed numerous projects, demonstrating my ability to 
                  transform ideas into reality. I am constantly exploring new technologies and leveraging them to deliver exceptional results.
                  This portfolio website showcases a collection of my work, providing a glimpse into my professional journey.</p>
              <p  className='hide-para' data-aos="fade-up"> I am passionate about development and eager to contribute my skills to your projects. 
              Please feel free to explore my portfolio and reach out to me with any inquiries or collaboration opportunities.</p>
              <p  data-aos="fade-up">Thank you for visiting, and I look forward to connecting with you soon!</p>      
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppWrap(About,'About');