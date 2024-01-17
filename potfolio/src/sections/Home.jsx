import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { client } from "../client";
import images from "../Constant/images";
import CButton from "../components/CButton";

function Home() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    client.fetch(query).then((data) => {
      data.map((dt) => setTestimonials(dt));
    });

    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleClick = ()=>{
    
  }

  return (
    <section className="pt-[56px] overflow-hidden sm:pt-[70px] app" id="Home">
      <div className="center lg:flex-row py-3 pt-5 sm:py-8 flex-col">
        <div data-aos="fade-right" className="md:flex-1 p-2 mt-6 my-3 md:mt-4">
          <h3 className="h3 dark:text-white font-medium">Hello, I'm</h3>
          <h2 className="title_text dark:border-white  border-r-[3px] border-black  font-medium h2 text-blue-500 py-1 font-basefont">
            Meganathan R
          </h2>
          <p className="para  max-w-lg">{testimonials.feedback}</p>
          <div className="flex gap-4 md:gap-5 mt-4">
          <a href="#About"> <CButton title="Get in touch" variant="contained" /></a>
          <a href={testimonials.resume}><CButton title="Download" variant="contained" color="success" /></a>
          </div>
        </div>
        <div className="md:flex-1 center">
          <div data-aos="fade-left" className="lg:w-[610px] md:w-[75%] sm:w-[85%] w-full my-4  md:my-0 h-auto">
            <img
              src={images.feelingProud}
              className="object-cover object-center w-full h-full"
              alt="profile"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
