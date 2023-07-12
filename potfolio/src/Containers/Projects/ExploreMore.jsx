import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../client';    //for sanity client and urlfor is image 
import { useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import "./ExploreMore.scss";

function ExploreMore() {
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
<div className='project-container' >
    {projects.map((item,index)=>(
        <motion.div 
          key={index}
          whileHover={{scale:1.1}}
        >
            <div  className='project-card'>
              <img className='card-img-top img-fluid'  src={urlFor(item.imageurl)} alt="Card image cap"/>
              <div className='card-body'>
                  <h5 className='card-title'>{item.name}</h5>
                   <p className='card-text'>{item.description}</p>
                    <a href={item.livedemo}  target="_blank" className="btn btn-primary">Live Demo</a>
                    <a href={item.github}  target="_blank" className="btn btn-secondary">Github</a>
                </div>
            </div> 
         </motion.div>
     ))}
    </div>             

       
  )
}

export default ExploreMore
