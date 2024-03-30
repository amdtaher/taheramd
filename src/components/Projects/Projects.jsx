import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLink, FaCode  } from "react-icons/fa";
import { motion } from "framer-motion"
import projectImg1 from '../../assets/img/projects/project1.jpg'
import projectImg2 from '../../assets/img/projects/project2.jpg'
import projectImg3 from '../../assets/img/projects/project3.jpg'
import projectImg4 from '../../assets/img/projects/project2.jpg'

const Projects = () => {
  // Motion
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: .2,
        duration: 1
      },
    },
    visible2: {
      y: 0,
      opacity: 1,
      transition: {
        delay: .5,
        duration: 1
      },
    },
    visible3: {
      y: 0,
      opacity: 1,
      transition: {
        delay: .8,
        duration: 1
      },
    },
    visible4: {
      y: 0,
      opacity: 1.1,
      transition: {
        delay: 1,
        duration: 1
      },
    },
    }

  return (
    <>
      {/* Projects Section */}
      <section>
        <div className="container mx-auto py-16 md:py-20" id='projects'>
          <div className="grid grid-cols-12 grid-flow-row gap-5 px-5 sm:px-0">
            {/* Section Title */}
            <div className="col-span-12 uppercase border-b border-grey md:border-none pb-2.5 mb-2.5">
              <h4 className='relative font-black text-3xl md:text-4xl lg:text-5xl mb-2'>my works
              <span className="text-6xl md:text-7xl lg:text-9xl md:top-[-40px] lg:top-[-66px] stroke">projects</span></h4>
            </div>
            {/* Projects */}
            <div className="col-span-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 grid-flow-row gap-5 text-center uppercase font-semibold">
                {/* Single Project */}
                <motion.div 
                variants={item}
                initial='hidden'
                whileInView='visible'
                viewport={{once: true}}
                className="group relative overflow-hidden">
                  <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg1} alt="my-work"/>
                  <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-lightDark text-white py-0.5 px-4'>react</span>
                  {/* Project Content */}
                  <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 z-0 before:content-[''] before:bg-lightDark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1]">
                    <h4 className='text-xl'>FruitCart</h4>
                    {/* Project Links */}
                    <div className="flex justify-center gap-5 mt-2.5">
                      <a href="https://fruitscart-react.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                      <a href="https://github.com/amdtaher/FruitCart-React" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                    </div>
                  </div>
                </motion.div>
                {/* Single Project */}
                <motion.div 
                variants={item}
                initial='hidden'
                whileInView='visible2'
                viewport={{once: true}}
                className="group relative overflow-hidden">
                  <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg2} alt="my-work"/>
                  <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-lightDark text-white py-0.5 px-4'>tailwind</span>
                  {/* Project Content */}
                  <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-lightDark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                    <h4 className='text-xl'>microsoft clone</h4>
                    {/* Project Links */}
                    <div className="flex justify-center gap-5 mt-2.5">
                      <a href="https://microsoft-tailwind.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                      <a href="https://github.com/amdtaher/microsoft-clone-tailwind" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                    </div>
                  </div>
                </motion.div>
                {/* Single Project */}
                <motion.div 
                variants={item}
                initial='hidden'
                whileInView='visible3'
                viewport={{once: true}}
                className="group relative overflow-hidden">
                  <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg3} alt="my-work"/>
                  <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-lightDark text-white py-0.5 px-4'>react</span>
                  {/* Project Content */}
                  <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-lightDark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                    <h4 className='text-xl'>evnia</h4>
                    {/* Project Links */}
                    <div className="flex justify-center gap-5 mt-2.5">
                      <a href="https://evnia-react.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                      <a href="https://github.com/amdtaher/evnia-react" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                    </div>
                  </div>
                </motion.div>
                {/* Single Project */}
                <motion.div 
                variants={item}
                initial='hidden'
                whileInView='visible4'
                viewport={{once: true}}
                className="group relative overflow-hidden">
                  <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg4} alt="my-work"/>
                  <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-lightDark text-white py-0.5 px-4'>core</span>
                  {/* Project Content */}
                  <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-lightDark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                    <h4 className='text-xl'>portfolio</h4>
                    {/* Project Links */}
                    <div className="flex justify-center gap-5 mt-2.5">
                      <a href="https://tamd.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                      <a href="https://github.com/amdtaher/tamd-Portfolio" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            {/* Show All */}
            <div className='col-span-12 mx-auto mt-2.5'>
              <NavLink to='/projects' className='btn capitalize group'>
                show all <FaCode  size={22} className='font-black group-hover:scale-110 duration-300 inline-block ml-1.5'/>
              </NavLink>  
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects