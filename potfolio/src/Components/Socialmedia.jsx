import React, { useEffect, useState } from 'react';
import {BsInstagram , BsTwitter} from 'react-icons/bs'
import {FaFacebookF } from 'react-icons/fa'
import { client } from '../client';

const Socialmedia = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {

    const query = '*[_type == "testimonials"]';
    client.fetch(query)
    .then((data)=> {
      data.map(dt => setTestimonials(dt))
    })
  }, []);
  return (
    <div className='app__social'>
        <div>
        <a href={testimonials.twitter} target="_blank">
            <BsTwitter/>
          </a>
        </div>

        <div>
        <a href={testimonials.facebook} target="_blank">
            <FaFacebookF/>
          </a>
        </div>
        
        <div>
          <a href={testimonials.instagram} target="_blank">
            <BsInstagram/>
          </a>
           
        </div>

    </div>
  )
}

export default Socialmedia;