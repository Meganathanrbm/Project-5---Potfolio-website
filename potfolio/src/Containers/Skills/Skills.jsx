import React, { useEffect, useState } from 'react';
import './Skills.scss';
import { AppWrap } from '../../Wrapper';
import images from '../../Constant/images';
import { motion, useAnimation } from 'framer-motion';


const items =[
  {title:"html",picture:images.html},
  {title:"css",picture:images.css},
  {title:"sass",picture:images.sass},
  {title:"javascript",picture:images.javascript},
  {title:"node",picture:images.node},
  {title:"react",picture:images.react},
  {title:"git",picture:images.git},
  {title:"python",picture:images.python}
]

export const MoContainer = {
  hidden:{opacity: 1 , scale:0},
  visible:{
    opacity:1,
    scale:1,
    transition:{
      delayChildren:0.3,
      staggerChildren:0.2
    }
  }
};
export const MoItem = {
  hidden:{y:20,opacity:0},
  visible:{
    y:0,
    opacity:1
  }
};



function Skills() {

  return (
    <div className='App__Skills App__Content  app__container'>
      <h1 className='head-text'>Skills <span>&</span> experience</h1>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere est aut delectus vel porro, laudantium,
      ipsum dolor sit amet consectetur adipisicing elit. Facere est aut delectus vel porro, laudantium, illo cupiditate magnam soluta quos consequuntur tempora vero autem magni dolores! Optio hic cum architecto!</p>
      <div className='App__Skills-skills'>
      <motion.div
        className="App__Skills-skills-container"
        variants={MoContainer}
        initial="hidden"
        whileInView={MoContainer}
        animate="visible"
        >
          {items.map((items,index)=>(
            <motion.div 
            whileHover={{scale:1.1}}
            key={index}
            className={`App__Skills-skills-container-item app__flex  i-${index}`}
            variants={MoItem}
            whileInView={MoItem}
            >
              <div className='Skills-card '>
                <img src={items.picture} alt="image"/>
                <h2>{items.title}</h2>
              </div>
            </motion.div>
          ))

          }

     </motion.div>
      </div>

    </div>
  )
}

export default AppWrap(Skills,'Skills');