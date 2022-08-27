import React from 'react';
import {BsInstagram , BsTwitter} from 'react-icons/bs'
import {FaFacebookF } from 'react-icons/fa'

const Socialmedia = () => {
  return (
    <div className='app__social'>
        <div>
        <a href='https://instagram.com/emy_ga_?igshid=YmMyMTA2M2Y='>
            <BsTwitter/>
          </a>
        </div>

        <div>
        <a href='https://instagram.com/emy_ga_?igshid=YmMyMTA2M2Y='>
            <FaFacebookF/>
          </a>
        </div>
        
        <div>
          <a href='https://instagram.com/emy_ga_?igshid=YmMyMTA2M2Y='>
            <BsInstagram/>
          </a>
           
        </div>

    </div>
  )
}

export default Socialmedia;