import React, { useEffect } from 'react';
import './Projects.scss';
import { AppWrap } from '../../Wrapper';
import { motion } from 'framer-motion';
import {Link,} from 'react-router-dom';
import { client, urlFor } from '../../client';    //for sanity client and urlfor is image 
import { useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";





function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]'; 
    
    client.fetch(query)
   .then((data) =>  setProjects(data))

   //this is AOS
     AOS.init({
      duration : 1000,
    });
  }, [])
  

  return (
       <div className='App__Projects  App__Content app__container '>
          <div className="projects-top  row">
                <div className="col-lg-6 col-md-6 projects-top-left">
                    <h3 data-aos="fade-right">outwork and successful Projects</h3>
                </div>
                <div className="col-lg-6 col-md-6 projects-top-right">
                    <p   data-aos="fade-up">
                     Discover my diverse project showcase where passion meets functionality, representing 
                     unique journeys of growth, delivering impactful solutions.
                    </p>
                    <Link  to="Projects/exploremore"   className='link' data-aos="fade-up">explore more <i  className='fa fa-arrow-right'></i></Link>
                </div>
          </div>
          <div className="projects-bottom">
              <div className="cards-wrapper">
                {projects.map((item,index)=>(
                  ((index<3) && 
                    <motion.div 
                      key={index}
                      whileHover={{scale:1.1}}
                      className='cardHover' >
                       <div  className="card" data-aos="flip-left" >
                          <img className={`card-img-top  img-fluid  ${item.name}`} src={urlFor(item.imageurl)} alt="Card image cap"/>
                          <div className="card-body">
                            <h5 className='card-title'>{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <a href={item.livedemo}  target="_blank" className="btn btn-primary">Live Demo</a>
                            <a href={item.github}  target="_blank" className="btn btn-secondary">Github</a>
                          </div>
                       </div> 
                    </motion.div>
                  )
                ))}
              </div>
            </div>

         </div>
       
  )
}

export default AppWrap(Projects,'Projects');

