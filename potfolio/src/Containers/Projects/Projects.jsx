import React from 'react';
import './Projects.scss';
import { AppWrap } from '../../Wrapper';
import images from '../../Constant/images';
import { motion } from 'framer-motion';
import {Link, Route} from 'react-router-dom';


const projects = [
  {name:'potfolio',image:images.project01,demo:'',github:'https://github.com/Meganathanrbm/Potfolio-website'},
  {name:'calculator',image:images.project02,demo:'https://meganathanrbm.github.io/Calculator/',github:'https://github.com/Meganathanrbm/Calculator'},
  {name:'todo-list',image:images.project03,demo:"https://todo-list-aca6d.web.app/",github:'https://github.com/Meganathanrbm/Todo-list'},
  {name:'potfolio',image:images.about03,demo:'#',github:'#'}
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
                    <button className='github'><a href={item.github} target='_blank' ><em>Github</em></a></button>
                    <button className='livedemo'><a href={item.demo} target='_blank' ><em>live demo</em></a></button>
                  </div>
               </div>
              ))}

            </div>

          </div>       
         </div>
       
  )
}

export default AppWrap(Projects,'Projects');

