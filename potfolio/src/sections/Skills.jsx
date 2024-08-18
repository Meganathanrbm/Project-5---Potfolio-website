import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { client, urlFor } from "../client";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  console.log(skills);
  useEffect(() => {
    const query = '*[_type == "skills"]';
    client.fetch(query).then((data) => setSkills(data));

    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section id="Skills" className="app">
      <div className="row skills-row">
        <div className="skill-top">
          <h1
            data-aos="fade-right"
            className="sm:text-4xl text-3xl dark:text-white text-black capitalize"
          >
            Skills <span className="text-blue-500">&</span> experience
          </h1>
          <p data-aos="fade-up" className="para">
            I bring a youthful perspective and fresh ideas to create visually
            appealing and user-friendly interfaces. I am equipped to build
            robust web applications. Throughout my career, I have successfully
            completed numerous projects, demonstrating my ability to transform
            ideas into reality.
          </p>
        </div>
        <div className=" flex-col">
          {skills.map(
            (
              item,
              i //for skills title
            ) => (
              <div className="sm:my-6 my-4" key={i}>
                <h4
                  data-aos="fade-up"
                  className="sm:text-2xl my-1 text-xl font-medium capitalize text-[#176B87] dark:text-[#EEF5FF]"
                >
                  {item.title}
                </h4>
                <div className="flex flex-wrap">
                  {item.skills.map(
                    (
                      skill,
                      j // for indivudual skills and name
                    ) => (
                      <div
                        data-aos="fade-up"
                        className="center flex-nowrap rounded-md  shadow-md bg-[#FBF9F1] p-2 px-3 m-2 sm:m-3 gap-2 sm:gap-3"
                        key={j}
                      >
                        <img
                          className="sm:h-10 sm:w-10 h-8 w-8 object-cover object-center"
                          src={urlFor(skill?.imageSrc)}
                          alt={skill?.imageSrc}
                        />
                        <h2 className="text-base  md:text-lg  font-semibold ">
                          {skill?.name}
                        </h2>
                      </div>
                    )
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;

{
  /* <div key={i} className="center flex-col p-2">
              <img
                className="h-14 w-14 md:h-28 md:w-28 lg:w-36 lg:h-36 object-cover object-center"
                src={urlFor(items.imageurl)}
                alt={items.name}
              />
              <h2 className="text-base dark:text-white md:text-xl mt-2 font-semibold">
                {items.name}
              </h2>
            </div> */
}
