import React, { useEffect, useState } from 'react';
import './Footer.scss';
import {BsInstagram , BsLinkedin, BsTwitter} from 'react-icons/bs';
import {FaFacebookF } from 'react-icons/fa';
import { client } from '../../client';


function Footer() {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {

    const query = '*[_type == "testimonials"]';
    client.fetch(query)
    .then((data)=> {
      data.map(dt => setTestimonials(dt))
    })
  }, []);

	const year = new Date().getFullYear();

  return (
    <footer className="App__Footer	app__flex">
		<div className="container-fluid app__flex footer-row">
				<h4>Follow us</h4>
				<div className="fmedia app__flex">
					<a href={testimonials.facebook}	target="_blank"><FaFacebookF/></a>
					<a href={testimonials.instagram}	target="_blank"> <BsInstagram/></a>
					<a href={testimonials.twitter}	target="_blank">  <BsTwitter/></a>
					<a href={testimonials.linkedin}	target="_blank"> <BsLinkedin/></a>
				</div>	
		</div>
		<p>Copyright &copy; {year} | ❤️ | By Meganathan.</p>	
	</footer>
  )
}

export default Footer