import React, { useEffect, useState } from "react";
import { client } from "../client";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

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
        <h4 className="text-center text-3xl font-semibold text-white border-b-4 rounded-sm border-blue-500 inline-block">
          Follow us
        </h4>
        <div className="center my-3">
          <a
            className="footer_icon"
            href={testimonials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode />
          </a>
          <a
            className="footer_icon"
            href={testimonials.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </a>
          <a
            className="footer_icon"
            href={testimonials.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitter />
          </a>
          <a
            className="footer_icon"
            href={testimonials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            rel="noopener noreferrer"
            className="footer_icon"
            href={testimonials.github}
            target="_blank"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <p className="text-white mt-1 text-base  text-center">
        Copyright &copy; {year} | ❤️ | By Meganathan.
      </p>
    </footer>
  );
};

export default Footer;
