import React from 'react';
import './Projects.scss';
import { AppWrap } from '../../Wrapper';
import { icons } from 'react-icons/lib';
import images from '../../Constant/images';
import { motion , useAnimation} from 'framer-motion';


const projects = [
  {name:'potfolio',image:images.project01},
  {name:'calculator',image:images.project02},
  {name:'potfolio',image:images.about02},
  {name:'potfolio',image:images.about03}
]

function Projects() {
  return (
       <div className='App__Projects  App__Content app__container '>
         <div className="App__Projects-headText">
            <h3>outwork and successful Projects</h3>
            <div className="App__Projects-headText-left">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci recusandae saepe eos ducimus eum inventore,
                dignissimos quisquam.</p>
                <a href='#'>explore more <i  className='fa fa-arrow-right'></i></a>
            </div>
         </div>
         <div className="App__Projects-projects">
            <div className="cards-wrapper">

              {projects.map((item,index)=>(
                <div key={index} className="card">
                  <motion.div 
                    whileHover={{scale:1.1}}
                    className='card-img' >
                    <img src={item.image}/>
                    <div className="middle">
                    <h2>{item.name}</h2>
                    </div>
                  </motion.div>
                  <div className='project-btn app__flex'>
                    <button className='github'>Github</button>
                    <button className='livedemo'>live demo</button>
                  </div>
               </div>
              ))}

            </div>

          </div>       
         </div>
       
  )
}

export default AppWrap(Projects,'Projects');