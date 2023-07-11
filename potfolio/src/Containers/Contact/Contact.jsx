import React, { useEffect, useState } from 'react';
import './Contact.scss';
import { AppWrap } from '../../Wrapper';
import images from '../../Constant/images';
import { motion } from 'framer-motion';
import AOS from 'aos';
import "aos/dist/aos.css";

function Contact() {
const [formSubmit, setFormSubmit] = useState(false);

useEffect(() => {

 //this is AOS
 AOS.init({
  duration : 1000,
});
}, [])

const formSubmitted=(e)=>{
  setFormSubmit(true)
  e.preventDefault();
}
  return (
    <div className='App__Contact app__container App__Content ' >
        <div className="contact-title">
            <h2 data-aos="fade-right" className='head-text'>take a <span >coffe</span> & chat with <span>me!</span></h2>
        </div>
        <div className="App__Contact-wrap app__flex">
        <motion.div 
            data-aos="fade-up"
            whileHover={{scale:1.1}}  
            className='wrap-item'>
          <div> <img src={images.email}/></div>
          <a href='mailto:meganathanrbm@gmail.com'>meganathanrbm@gmail.com</a>
        </motion.div>
        <motion.div 
            data-aos="fade-up"
            whileHover={{scale:1.1}}  
            className='wrap-item'>
          <div> <img src={images.mobile}/></div>
          <a href=''>+91 936-167-4727</a>
         
        </motion.div>
      </div>

      {!formSubmit?<form  action=""  onSubmit={formSubmitted}  data-aos="fade-in">
      <div className="form-group" >
        <label >Your name</label>
        <input type="text"   name='username' className="form-control" id="InputName"  placeholder="Enter your name" required/>
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input type="email" name='emailID' className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  required/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea placeholder='Enter Your Message' name='message' cols="30" rows="4" className="form-control" aria-label="With textarea" required></textarea>
      </div>

      <button type="submit"  className="btn btn-primary">Send message</button>
      </form>:<div className="thankyoufor app__flex">
          <h3>Thank you for getting in touch! 👍</h3>
          </div>}

    </div>
  )
}

export default AppWrap(Contact,'Contact');