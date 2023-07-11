import React, { useEffect } from 'react';
import './Skills.scss';
import { AppWrap } from '../../Wrapper';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../client';    //for sanity client and urlfor is image 
import { useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";




function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {     // useEffect to fetch only one time 
   const query = '*[_type == "skills"]';    // query for get data from the sanity db

   client.fetch(query)
   .then((data) =>  setSkills(data))


   //this is AOS
     AOS.init({
      duration : 1000,
    });
  }, [])
  


  return (
    <div className='App__Skills App__Content  app__container'>
      <div className="row skills-row">
          <div className="skill-top">
              <h1 data-aos="fade-right" className='head-text' >Skills <span>&</span> experience</h1>
              <p data-aos="fade-up" className='container-fluid'>I bring a youthful perspective and fresh ideas to create visually appealing and user-friendly interfaces. 
                With expertise in ReactJS, HTML, CSS, JavaScript, Node.js, and the MERN stack, I am equipped to build robust web applications. 
                Throughout my career, I have successfully completed numerous projects, demonstrating my ability to transform ideas into reality.
              </p>
          </div>
          <div className="skill-bottom">
          <div  className="App__Skills-skills-container "  >
              {skills.map((items,index)=>(
                <motion.div 
                whileHover={{scale:1.1}}
                key={index}
                className={` App__Skills-skills-container-item app__flex  i-${index}`}
                >
                  <div className='Skills-card' data-aos="flip-left">
                    <img src={urlFor(items.imageurl)}  alt={items.name}/>
                    <h2>{items.name}</h2>
                  </div>
                </motion.div>
              ))}
          </div>
          </div>
      </div>

    </div>
  )
}

export default AppWrap(Skills,'Skills');