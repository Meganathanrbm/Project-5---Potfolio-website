import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import images from "../Constant/images";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formSubmit, setFormSubmit] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const formSubmitted = (e) => {
    setFormSubmit(true);
    e.preventDefault();
  };
  return (
    <section id="Contact" className="app">
      <h2
        data-aos="fade-right"
        className="text-3xl md:text-4xl text-center mt-4 sm:mt-0 capitalize font-medium dark:text-white text-black"
      >
        take a <span className="text-blue-500">coffe</span> & chat with{" "}
        <span className="text-blue-500">me!</span>
      </h2>
      <div className="center my-4 mt-6 md:gap-16 gap-8 md:flex-row flex-col">
        <motion.div
          data-aos="fade-right"
          whileHover={{ scale: 1.1 }}
          className="center w-[310px] md:w-[350px] p-3 rounded-md bg-[#fef4f5] gap-x-4 flex-nowrap"
        >
          <img
            src={images.email}
            className="object-contain w-11 h-11 md:w-12 md:h-12 object-center"
          />
          <a href="mailto:meganathanrbm@gmail.com">meganathanrbm@gmail.com</a>
        </motion.div>
        <motion.div
          data-aos="fade-left"
          whileHover={{ scale: 1.1 }}
          className="flex items-center w-[310px] md:w-[350px] p-3 justify-evenly rounded-md bg-[#f2f7fb] gap-x-4 flex-nowrap"
        >
          <img
            src={images.mobile}
            className="object-contain w-11 h-11 md:w-12 md:h-12 object-center"
          />
          <a href="">+91 936-167-4727</a>
        </motion.div>
      </div>

      {!formSubmit ? (
        <div className="center">
          <form
            action=""
            onSubmit={formSubmitted}
            className="w-[95%] md:w-[55%]"
          >
            <div data-aos="fade-up" className="form-group my-3">
              <label className="label">Your name</label>
              <input
                type="text"
                name="username"
                className="form-control label_input"
                id="InputName"
                placeholder="Enter your name"
                required
              />
            </div>
            <div data-aos="fade-up" className="form-group my-3">
              <label className="label">Email address</label>
              <input
                type="email"
                name="emailID"
                className="form-control label_input"
                id="InputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
              />
            </div>
            <div data-aos="fade-up" className="form-group my-3">
              <label className="label">Message</label>
              <textarea
                placeholder="Enter Your Message"
                name="message"
                cols="30"
                rows="4"
                className="form-control label_input"
                aria-label="With textarea"
                required
              ></textarea>
            </div>
            <button
              data-aos="fade-up"
              className="capitalize btn btn-primary md:mt-4 my-3 bg-blue-500"
              type="submit"
            >
              send message
            </button>
          </form>
        </div>
      ) : (
        <div className="center text-2xl my-2 text-black dark:text-white text-center font-medium capitalize">
          <h3>Thank you for getting in touch! 👍</h3>
        </div>
      )}
    </section>
  );
};

export default Contact;
