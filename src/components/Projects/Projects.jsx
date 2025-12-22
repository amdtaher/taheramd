import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLink, FaCode  } from "react-icons/fa";
import { motion } from "framer-motion"

import projectImg1 from '../../assets/img/projects/fruitcart.webp'
import projectImg2 from '../../assets/img/projects/microsoft-clone.webp'
import projectImg3 from '../../assets/img/projects/chips.webp'
import projectImg4 from '../../assets/img/projects/portfolio.webp'

const Projects = () => {
const projects = [
  {
    title: "FruitccCart",
    tech: "react",
    img: projectImg1,
    live: "https://fruitscart-react.netlify.app/",
    github: "https://github.com/amdtaher/FruitCart-React",
    delay: 0.2,
  },
  {
    title: "Microsoft Cloneccc",
    tech: "tailwind",
    img: projectImg2,
    live: "https://microsoft-tailwind.netlify.app/",
    github: "https://github.com/amdtaher/microsoft-clone-tailwind",
    delay: 0.5,
  },
  {
    title: "Chips",
    tech: "tailwind",
    img: projectImg3,
    live: "https://chips-tailwind.netlify.app/",
    github: "https://github.com/amdtaher/chips-tailwind",
    delay: 0.8,
  },
  {
    title: "Portfolio",
    tech: "core",
    img: projectImg4,
    live: "https://tamd.netlify.app/",
    github: "https://github.com/amdtaher/tamd-Portfolio",
    delay: 1,
  },
];

// Motion
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: (delay) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 1,
    },
  }),
};

  return (
    <>
      {/* Projects Section */}
      <section>
        <div className="container mx-auto py-16 md:py-20" id="projects">
          <div className="grid grid-cols-12 grid-flow-row gap-5 px-5 sm:px-0">

            {/* Section Title */}
            <div className="col-span-12 uppercase border-b border-grey md:border-none pb-2.5 mb-2.5">
              <h4 className="relative font-black text-3xl md:text-4xl lg:text-5xl mb-2">
                my works
                <span className="text-6xl md:text-7xl lg:text-9xl md:top-[-40px] lg:top-[-66px] stroke">
                  projects
                </span>
              </h4>
            </div>

            {/* Projects Grid */}
            <div className="col-span-12">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 text-center uppercase font-semibold">

                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    initial="hidden"
                    whileInView="visible"
                    custom={project.delay}
                    viewport={{ once: true, amount: 0.3 }}
                    className="group relative overflow-hidden">
                    <img
                      className="w-full rounded-md group-hover:scale-110 duration-300"
                      src={project.img}
                      alt={project.title}
                    />

                    <span className="absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-lightDark text-white py-0.5 px-4">
                      {project.tech}
                    </span>

                    {/* Project Hover Content */}
                    <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-lightDark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0">
                      <h4 className="text-xl">{project.title}</h4>

                      <div className="flex justify-center gap-5 mt-2.5">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-primary duration-200"
                        >
                          <FaLink size={30} />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-primary duration-200"
                        >
                          <FaGithub size={30} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}

              </div>
            </div>

            {/* Show All */}
            <div className="col-span-12 mx-auto mt-2.5">
              <NavLink to="/projects" className="btn capitalize group">
                show all
                <FaCode
                  size={22}
                  className="font-black group-hover:scale-110 duration-300 inline-block ml-1.5"
                />
              </NavLink>
            </div>

          </div>
        </div>
      </section>
      
    </>
  )
}

export default Projects
