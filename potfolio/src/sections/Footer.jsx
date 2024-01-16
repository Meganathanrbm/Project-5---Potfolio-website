import React, { useEffect, useState } from "react";
import { client } from "../client";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    client.fetch(query).then((data) => {
      data.map((dt) => setTestimonials(dt));
    });
  }, []);

  const year = new Date().getFullYear();
  return (
    <footer className="padding w-screen bg-[#25262b]">
      <div className="center flex-col">
        <h4 className="text-center text-3xl font-semibold text-white border-b-4 rounded-sm border-blue-500 inline-block">Follow us</h4>
        <div className="center my-3">
          <a className="footer_icon" href={testimonials.facebook} target="_blank">
            <FaFacebookF />
          </a>
          <a className="footer_icon" href={testimonials.instagram} target="_blank">
            <BsInstagram />
          </a>
          <a className="footer_icon" href={testimonials.twitter} target="_blank">
            <BsTwitter />
          </a>
          <a className="footer_icon" href={testimonials.linkedin} target="_blank">
            <BsLinkedin />
          </a>
        </div>
      </div>
      <p className="text-white mt-1 text-base  text-center">Copyright &copy; {year} | ❤️ | By Meganathan.</p>
    </footer>
  );
};

export default Footer;
