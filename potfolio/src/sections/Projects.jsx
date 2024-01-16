import React, { useEffect, useState } from "react";
import { client, urlFor } from "../client";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [projectsVisible, setProjectsVisible] = useState(true);

  useEffect(() => {
    const query = '*[_type == "projects"]';
    const query2 = '*[_type == "certificates"]';

    client.fetch(query).then((data) => setProjects(data));
    client.fetch(query2).then((data) => setCertificates(data));

    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="app" id="Projects">
      <div className="projects-top flex flex-col md:flex-row">
        <h3
          data-aos="fade-right"
          className="text-[32px] font-medium flex-1 dark:text-white text-black capitalize"
        >
          outwork and successful Projects
        </h3>
        <div data-aos="fade-left" className="flex-1">
          <p className="para md:mt-0  mb-3">
            Discover my diverse project showcase where passion meets
            functionality, representing unique journeys of growth, delivering
            impactful solutions.
          </p>
          <div className="flex flex-nowrap gap-x-6">
            <button
              onClick={() => setProjectsVisible(true)}
              type="button"
              className={projectsVisible ? "projects_btn" : "certificates_btn"}
            >
              projects
            </button>
            <button
              onClick={() => setProjectsVisible(false)}
              type="button"
              className={!projectsVisible ? "projects_btn" : "certificates_btn"}
            >
              certificates
            </button>
          </div>
        </div>
      </div>
      <div className="center gap-12 mt-8 flex-wrap">
        {projectsVisible &&
          projects.map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.08 }}>
              <div data-aos="fade-up" className=" shadow-lg dark:bg-slate-800 md:h-96 hover:shadow-blue-500/50 flex justify-center items-start flex-col p-3 rounded-md ">
                <img
                  className={`w-[290px] h-40   md:w-96 md:h-48  object-cover  img-fluid  ${item.name}`}
                  src={urlFor(item.imageurl)}
                  alt="Card image cap"
                />
                <div className="">
                  <h5 className="capitalize dark:text-white text-xl mt-3 mb-2 font-semibold">
                    {item.name}
                  </h5>
                  <p className="md:max-w-sm max-w-[280px] dark:text-slate-400 text-base leading-6 text-gray-500">
                    {item.description}
                  </p>
                  <div className="mt-3 flex flex-nowrap">
                    <a
                      href={item.livedemo}
                      target="_blank"
                      className="btn btn-primary text-base font-medium mr-4"
                    >
                      Live Demo
                    </a>
                    <a
                      href={item.github}
                      target="_blank"
                      className="btn btn-secondary text-base font-medium ml-4"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        {!projectsVisible &&
          certificates.map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.08 }}>
              <div data-aos="fade-up" className=" shadow-lg dark:bg-slate-800 h-auto hover:shadow-blue-500/50 flex justify-center items-start flex-col p-3 rounded-md ">
                <img
                  className={`w-[290px] h-auto   md:w-96 md:h-48  object-cover  img-fluid  ${item.name}`}
                  src={urlFor(item.imageUrl)}
                  alt="Card image cap"
                />
                <div className="">
                  <h5 className="capitalize max-w-[290px] dark:text-white text-lg mt-3 mb-2 font-medium leading-[25px]">
                    {item.name}
                  </h5>
                  <div className="mt-3 flex flex-nowrap">
                    <a
                      href={item.link}
                      target="_blank"
                      className="btn btn-primary text-base font-medium mr-4"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default Projects;
