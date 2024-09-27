import React, { useState } from 'react'
import { FaGithub, FaLink } from "react-icons/fa";
import { motion } from 'framer-motion';
import projectImg1 from '../../assets/img/projects/fruitcart.webp'
import projectImg2 from '../../assets/img/projects/microsoft-clone.webp'
import projectImg3 from '../../assets/img/projects/evnia.webp'
import projectImg4 from '../../assets/img/projects/portfolio.webp'
import projectImg5 from '../../assets/img/projects/cuisine.webp'
import projectImg6 from '../../assets/img/projects/servicers.webp'
import projectImg7 from '../../assets/img/projects/old-portfolio.webp'
import projectImg8 from '../../assets/img/projects/foodx.webp'
import projectImg9 from '../../assets/img/projects/cakezone.webp'
import projectImg10 from '../../assets/img/projects/halim.webp'
import projectImg11 from '../../assets/img/projects/chips.webp'
import projectImg12 from '../../assets/img/projects/tracksite.webp'
import projectImg13 from '../../assets/img/projects/getpay.webp'

const AllProjects = () => {
  const [active, setactive] = useState('catagory1');

  const handle = (exe) => {
    setactive(exe);
  };

  // Motion
  const fade = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: .1,
        duration: 1
      },
    },
  }
  return (
    <>
      {/* Projects Section */}
      <motion.div
      variants={fade}
      initial='hidden'
      whileInView='visible'
      viewport={{once: true}}
      className="container mx-auto py-32">
        <div className="grid grid-cols-12 grid-flow-row gap-5 px-5 sm:px-0">
          {/* Section Title */}
          <div className="col-span-12 border-b border-grey md:border-none pb-2.5 mb-2.5">
            <h4 className='uppercase relative font-black text-3xl md:text-4xl lg:text-5xl mb-2'>my works
            <span className="text-6xl md:text-7xl lg:text-9xl md:top-[-40px] lg:top-[-66px] uppercase stroke">projects</span></h4>
          </div>
          {/* Category Tabs */}
          <ul className="col-span-12 w-[330px] sm:w-[500px] flex justify-between items-center text-base sm:text-lg font-medium sm:font-semibold capitalize text-center border-2 border-black rounded-xl mx-auto mb-5">
            <li className={`w-full cursor-pointer duration-300 py-2.5 rounded-l-lg ${active === 'catagory1' ? 'activeTab' : ''}`} id='catagory1' onClick={() => handle('catagory1')}><a>All</a></li>
            <li className={`w-full cursor-pointer duration-300 py-2.5 ${active === 'catagory2' ? 'activeTab' : ''}`} id='catagory2' onClick={() => handle('catagory2')}><a>React</a></li>
            <li className={`w-full cursor-pointer duration-300 py-2.5 ${active === 'catagory3' ? 'activeTab' : ''}`} id='catagory3' onClick={() => handle('catagory3')}><a>Tailwind</a></li>
            <li className={`w-full cursor-pointer duration-300 py-2.5 rounded-r-lg ${active === 'catagory4' ? 'activeTab' : ''}`} id='catagory4' onClick={() => handle('catagory4')}><a>Others</a></li>
          </ul>
          {/* Catagory 1 / All Projects */}
          <div class={`col-span-12 ${active === 'catagory1' ? 'block' : 'hidden'}`}>
            {/* Single Catagory */}
            <motion.ul
            variants={fade}
            initial='hidden'
            whileInView='visible'
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-5 text-center uppercase font-semibold'>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg1} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>react</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 z-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1]">
                  <h4 className='text-xl'>fruitcart</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="https://fruitscart-react.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="https://github.com/amdtaher/FruitCart-React" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                </div>
                </div>
              </li>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg2} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>tailwind</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                  <h4 className='text-xl'>microsoft clone</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="https://microsoft-tailwind.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="https://github.com/amdtaher/microsoft-clone-tailwind" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg11} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-lightDark text-white py-0.5 px-4'>Tailwind</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-lightDark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                  <h4 className='text-xl'>chips</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="https://chips-tailwind.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="https://github.com/amdtaher/chips-tailwind" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
              {/*Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg3} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>react</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                  <h4 className='text-xl'>evnia</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="https://evnia-react.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="https://github.com/amdtaher/evnia-react" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg4} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>core</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                  <h4 className='text-xl'>portfolio</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="https://tamd.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="https://github.com/amdtaher/tamd-Portfolio" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg5} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>sass</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                  <h4 className='text-xl'>cuisine</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="https://cuisinesass.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="https://github.com/amdtaher/Cuisine-Sass" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg6} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>core</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                  <h4 className='text-xl'>servicers</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="https://servicers-flex.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="https://github.com/amdtaher/Servicers-Flex-Responsive" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg7} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>core</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                  <h4 className='text-xl'>old portfolio</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="https://portfolio-site-ft.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="https://github.com/amdtaher/Portfolio-Float-Responsive" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg8} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>core</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                  <h4 className='text-xl'>foodX</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="https://foodx-ft-f2html.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="https://github.com/amdtaher/foodx-float" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg9} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>sass</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                  <h4 className='text-xl'>cakezone</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="https://cakezone-sass.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="https://github.com/amdtaher/Cakezone-Sass" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg10} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>core</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                  <h4 className='text-xl'>halim</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="https://halim-ft-f2html.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="https://github.com/amdtaher/Halim-Float-Figma" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg12} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>core</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                  <h4 className='text-xl'>tracksite</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="https://tracksite-row.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="https://github.com/amdtaher/Tracksite-row" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg13} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>core</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                  <h4 className='text-xl'>getpay</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="https://getpay-raw.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="https://github.com/amdtaher/getPay" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
            </motion.ul>
          </div>
          {/* Catagory 2 / React Projects */}
          <div class={`col-span-12 ${active === 'catagory2' ? 'block' : 'hidden'}`}>
            {/* Single Catagory */}
            <motion.ul
            variants={fade}
            initial='hidden'
            whileInView='visible'
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-5 text-center uppercase font-semibold'>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg1} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>react</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 z-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1]">
                  <h4 className='text-xl'>fruitcart</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="https://fruitscart-react.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="https://github.com/amdtaher/FruitCart-React" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                </div>
                </div>
              </li>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg3} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>react</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                  <h4 className='text-xl'>evnia</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="https://evnia-react.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="https://github.com/amdtaher/evnia-react" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
            </motion.ul>
          </div>
          {/* Catagory 3 / Tailwind Projects */}
          <div class={`col-span-12 ${active === 'catagory3' ? 'block' : 'hidden'}`}>
            {/* Single Catagory */}
            <motion.ul
            variants={fade}
            initial='hidden'
            whileInView='visible'
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-5 text-center uppercase font-semibold'>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg11} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>tailwind</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 z-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1]">
                  <h4 className='text-xl'>chips</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="https://chips-tailwind.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="https://github.com/amdtaher/chips-tailwind" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
              {/* Single Project */}
              <li class="group relative overflow-hidden ">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg2} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>tailwind</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                  <h4 className='text-xl'>microsoft clone</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="https://microsoft-tailwind.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="https://github.com/amdtaher/microsoft-clone-tailwind" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
            </motion.ul>
          </div>
          {/* Catagory 4 / Others Projects */}
          <div class={`col-span-12 ${active === 'catagory4' ? 'block' : 'hidden'}`}>
            {/* Single Catagory */}
            <motion.ul
            variants={fade}
            initial='hidden'
            whileInView='visible'
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-5 text-center uppercase font-semibold'>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg4} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>core</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 z-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1]">
                  <h4 className='text-xl'>portfolio</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="https://tamd.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="https://github.com/amdtaher/tamd-Portfolio" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg5} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>sass</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                  <h4 className='text-xl'>cuisine</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="https://cuisinesass.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="https://github.com/amdtaher/Cuisine-Sass" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg6} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>core</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                  <h4 className='text-xl'>servicers</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="https://servicers-flex.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="https://github.com/amdtaher/Servicers-Flex-Responsive" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg7} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>core</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                  <h4 className='text-xl'>old portfolio</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="https://portfolio-site-ft.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="https://github.com/amdtaher/Portfolio-Float-Responsive" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg8} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>core</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                  <h4 className='text-xl'>foodX</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="https://foodx-ft-f2html.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="https://github.com/amdtaher/foodx-float" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg9} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>sass</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                  <h4 className='text-xl'>cakezone</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="https://cakezone-sass.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="https://github.com/amdtaher/Cakezone-Sass" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg10} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>core</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                  <a href='https://halim-ft-f2html.netlify.app/' className='hover:text-primary duration-200 text-xl'>halim</a>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="https://halim-ft-f2html.netlify.app/" target='_blank' className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="https://github.com/amdtaher/Halim-Float-Figma" target='_blank' className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
            </motion.ul>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default AllProjects
