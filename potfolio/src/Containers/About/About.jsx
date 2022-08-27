import React from 'react';
import './About.scss';
import { AppWrap } from '../../Wrapper';
import { motion } from 'framer-motion';
import images from '../../Constant/images';
import { MoContainer,MoItem } from '../Skills/Skills';

const Aitems=[
  {field:"name :",value:"meganathan"},
  {field:"age :",value:20},
  {field:"email :",value:"meganathanrbm@gmail.com",name:'email'},
  {field:"location :",value:"tamil nadu,india"},
  {field:"qualification :",value:"b.sc CS"},
  {field:"experince :",value:"---"}
]

function About() {
  return (
    <div className='App__About App__Content app__container'>
      <div className='App__About-left app__flex'>
          <div className='card-image app__flex'>
            <img src={images.about01} alt="profile picture"></img>
          </div>
      </div>
      <div className='App__About-right app__flex'>
        <div>
          <h3>Discover</h3>
          <h1>About Me</h1>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat voluptate et reiciendis, architecto
              consequuntur delectus vel magni accusantium dicta, voluptates sit esse est quia
               architecto
              consequuntur delectus vel magni accusantium dicta, voluptates sit esse est quia
              necessitatibus magnam! Labore repellat voluptas ipsa.</p>

            <motion.div
              className='App__About-card'
              variants={MoContainer}
              initial="hidden"
              animate="visible"
              >
               {Aitems.map((items,index)=>(
                  <motion.div 
                    key={index}
                    variants={MoItem}>
                      <div className='About-card-item' key={index}>
                          <text className='text-field'>{items.field}</text>
                          <text className={`text-value  ${items.name}`}>{items.value}</text>
                      </div>
                  </motion.div>
                ))
               }
            </motion.div>

            <div className="App__About-icon">
            <img src={images.aboutIcon02} />
              <img src={images.aboutIcon} />
            </div>
  
        </div>
      </div>
    </div>
  )
}

export default AppWrap(About,'About');