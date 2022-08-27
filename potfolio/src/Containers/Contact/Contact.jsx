import React, { useState } from 'react';
import './Contact.scss';
import { AppWrap } from '../../Wrapper';
import images from '../../Constant/images';
import { motion } from 'framer-motion';

function Contact() {
const [formSubmit, setFormSubmit] = useState(false);
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

const formSubmitted=()=>{
  setFormSubmit(true)
}
  return (
    <div className='App__Contact app__container App__Content ' >
      <h2 className='head-text'>take a <span>coffe</span> & chat with <span>me!</span></h2>

      <div className="App__Contact-wrap app__flex">
        <motion.div 
             whileHover={{scale:1.1}}  className='wrap-item'>
          <div> <img src={images.email}/></div>
          <a href='#'>meganathanrbm@gmail.com</a>
        </motion.div>
        <motion.div 
             whileHover={{scale:1.1}}  className='wrap-item'>
          <div> <img src={images.mobile}/></div>
          <a href='#'>+91 936-167-4727</a>
         
        </motion.div>
      </div>

     
        {!formSubmit? <div className="App__Contact-form app__flex">
         <div className='app__flex form-field'> <input className='p' type='text' onChange={(e)=>setName(e.target.value)} placeholder='Your Name'/> </div>
         <div className='app__flex form-field'> <input className='p' type='text' onChange={(e)=>setEmail(e.target.value)} placeholder='Your Email'/></div>
         <div className='app__flex form-field'> <textarea className='p' name="message" onChange={(e)=>setMessage(e.target.value)} placeholder='Enter Your Message' cols="30" rows="5"/></div>
         <div className='form-field-btn'> <button onClick={formSubmitted} >Send Message</button></div>
         </div>:<div className="App__Contact-form app__flex">
          <h3>Thank you for getting in touch!</h3>
          </div>}
         

    </div>
  )
}

export default AppWrap(Contact,'Contact');