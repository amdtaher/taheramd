import React, { useState } from 'react'
import { FaGithub, FaLink } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import projectImg1 from '../../assets/img/projects/project1.jpg'
import projectImg2 from '../../assets/img/projects/project3.jpg'
import projectImg3 from '../../assets/img/projects/project4.jpg'
import projectImg4 from '../../assets/img/projects/project1.jpg'
import projectImg5 from '../../assets/img/projects/project3.jpg'
import projectImg6 from '../../assets/img/projects/project4.jpg'
import projectImg7 from '../../assets/img/projects/project1.jpg'
import projectImg8 from '../../assets/img/projects/project3.jpg'

const AllProjects = () => {
  const [active, setactive] = useState('catagory1');

  const handle = (exe) => {
    setactive(exe);
  };
  return (
    <>
      {/* Projects Section */}
      <div className="container mx-auto py-32">
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
            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-5 text-center uppercase font-semibold'>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg1} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>react</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 z-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1]">
                  <h4 className='text-xl'>Cherry Blossom</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="#" className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="#" className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                </div>
                </div>
              </li>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg2} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>react</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                  <h4 className='text-xl'>Cherry Blossom</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="#" className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="#" className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg3} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>react</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                  <h4 className='text-xl'>Cherry Blossom</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="#" className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="#" className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg4} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>react</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                  <h4 className='text-xl'>Cherry Blossom</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="#" className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="#" className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* Catagory 2 / React Projects */}
          <div class={`col-span-12 ${active === 'catagory2' ? 'block' : 'hidden'}`}>
            {/* Single Catagory */}
            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-5 text-center uppercase font-semibold'>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg3} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>react</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 z-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1]">
                  <h4 className='text-xl'>strawberry Blossom</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="#" className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="#" className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                </div>
                </div>
              </li>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg4} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>react</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                  <h4 className='text-xl'>strwbery Blossom</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="#" className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="#" className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* Catagory 3 / Tailwind Projects */}
          <div class={`col-span-12 ${active === 'catagory3' ? 'block' : 'hidden'}`}>
            {/* Single Catagory */}
            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-5 text-center uppercase font-semibold'>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg5} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>react</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 z-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1]">
                  <h4 className='text-xl'>mango Blossom</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="#" className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="#" className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                </div>
                </div>
              </li>
              {/* Single Project */}
              <li class="group relative overflow-hidden ">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg6} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>react</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                  <h4 className='text-xl'>mango Blossom</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="#" className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="#" className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* Catagory 4 / Others Projects */}
          <div class={`col-span-12 ${active === 'catagory4' ? 'block' : 'hidden'}`}>
            {/* Single Catagory */}
            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-5 text-center uppercase font-semibold'>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg7} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>react</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 z-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1]">
                  <h4 className='text-xl'>pine Blossom</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="#" className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="#" className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                </div>
                </div>
              </li>
              {/* Single Project */}
              <li class="group relative overflow-hidden">
                <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg8} alt="my-work"/>
                <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-dark text-white py-0.5 px-4'>react</span>
                {/* Project Content */}
                <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-dark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                  <h4 className='text-xl'>pine Blossom</h4>
                  {/* Project Links */}
                  <div className="flex justify-center gap-5 mt-2.5">
                    <a href="#" className='hover:text-primary duration-200'><FaLink size={30}/></a>
                    <a href="#" className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllProjects