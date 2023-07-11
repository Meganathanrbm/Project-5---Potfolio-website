import React, { useEffect, useState } from 'react';
import './Home.scss';
import images from '../../Constant/images';
import { AppWrap } from '../../Wrapper';
import AOS from 'aos';
import "aos/dist/aos.css";
import { client,urlFor } from '../../client';



function Home() {
   const  [testimonials, setTestimonials] = useState([]);

  
  useEffect(() => {

    const query = '*[_type == "testimonials"]';
    client.fetch(query)
    .then((data)=> {
      data.map(dt => setTestimonials(dt))
    })

    AOS.init({
      duration : 1000,
    });
  }, []);

  return (
 
      <div className='App__Header-container app_flex  app__container '>
        <div className="row breakpoint-home">
          <div className='col-lg-6'>
            <div className="left"  data-aos="fade-right" >
                <h3>Hello, I'm</h3>
                <h1>{testimonials.name}</h1>
                <p>{testimonials.feedback}</p>
                <button className='btn home-btn btn-primary'><a href="#Contact">Get in touch</a></button>
                <button className='btn home-btn btn-success'><a href={testimonials.resume}  target="_blank">Download CV</a></button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right_row"  data-aos="fade-right">
              <div className="profile-img" >
                <img src={images.profile} alt="profile" ></img>
              </div>
            </div>
          </div>
        </div>      
      </div>
 
  )
}

export default AppWrap(Home,'Home');