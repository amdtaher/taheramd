import React, { useState } from 'react';
import { FaGithub, FaLink, FaCaretUp, FaCaretDown } from "react-icons/fa";
import projectImg1 from '../../assets/img/projects/project1.jpg'
import projectImg2 from '../../assets/img/projects/project3.jpg'
import projectImg3 from '../../assets/img/projects/project4.jpg'
import projectImg4 from '../../assets/img/projects/project1.jpg'
import projectImg5 from '../../assets/img/projects/project3.jpg'
import projectImg6 from '../../assets/img/projects/project4.jpg'
import projectImg7 from '../../assets/img/projects/project1.jpg'
import projectImg8 from '../../assets/img/projects/project3.jpg'

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

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
                <div className="group relative overflow-hidden">
                  <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg1} alt="my-work"/>
                  <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-lightDark text-white py-0.5 px-4'>react</span>
                  {/* Project Content */}
                  <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 z-0 before:content-[''] before:bg-lightDark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1]">
                    <h4 className='text-xl'>Cherry Blossom</h4>
                    {/* Project Links */}
                    <div className="flex justify-center gap-5 mt-2.5">
                      <a href="#" className='hover:text-primary duration-200'><FaLink size={30}/></a>
                      <a href="#" className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                    </div>
                  </div>
                </div>
                {/* Single Project */}
                <div className="group relative overflow-hidden">
                  <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg2} alt="my-work"/>
                  <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-lightDark text-white py-0.5 px-4'>react</span>
                  {/* Project Content */}
                  <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-lightDark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                    <h4 className='text-xl'>Cherry Blossom</h4>
                    {/* Project Links */}
                    <div className="flex justify-center gap-5 mt-2.5">
                      <a href="#" className='hover:text-primary duration-200'><FaLink size={30}/></a>
                      <a href="#" className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                    </div>
                  </div>
                </div>
                {/* Single Project */}
                <div className="group relative overflow-hidden">
                  <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg3} alt="my-work"/>
                  <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-lightDark text-white py-0.5 px-4'>react</span>
                  {/* Project Content */}
                  <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-lightDark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                    <h4 className='text-xl'>Cherry Blossom</h4>
                    {/* Project Links */}
                    <div className="flex justify-center gap-5 mt-2.5">
                      <a href="#" className='hover:text-primary duration-200'><FaLink size={30}/></a>
                      <a href="#" className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                    </div>
                  </div>
                </div>
                {/* Single Project */}
                <div className="group relative overflow-hidden">
                  <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg4} alt="my-work"/>
                  <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-lightDark text-white py-0.5 px-4'>react</span>
                  {/* Project Content */}
                  <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-lightDark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                    <h4 className='text-xl'>Cherry Blossom</h4>
                    {/* Project Links */}
                    <div className="flex justify-center gap-5 mt-2.5">
                      <a href="#" className='hover:text-primary duration-200'><FaLink size={30}/></a>
                      <a href="#" className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                    </div>
                  </div>
                </div>

            {showMore && (
              <>
                {/* Single Project */}
                <div className="group relative overflow-hidden">
                  <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg6} alt="my-work"/>
                  <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-lightDark text-white py-0.5 px-4'>react</span>
                  {/* Project Content */}
                  <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-lightDark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                    <h4 className='text-xl'>Cherry Blossom</h4>
                    {/* Project Links */}
                    <div className="flex justify-center gap-5 mt-2.5">
                      <a href="#" className='hover:text-primary duration-200'><FaLink size={30}/></a>
                      <a href="#" className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                    </div>
                  </div>
                </div>
                {/* Single Project */}
                <div className="group relative overflow-hidden">
                  <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg7} alt="my-work"/>
                  <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-lightDark text-white py-0.5 px-4'>react</span>
                  {/* Project Content */}
                  <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-lightDark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                    <h4 className='text-xl'>Cherry Blossom</h4>
                    {/* Project Links */}
                    <div className="flex justify-center gap-5 mt-2.5">
                      <a href="#" className='hover:text-primary duration-200'><FaLink size={30}/></a>
                      <a href="#" className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                    </div>
                  </div>
                </div>
                {/* Single Project */}
                <div className="group relative overflow-hidden">
                  <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg8} alt="my-work"/>
                  <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-lightDark text-white py-0.5 px-4'>react</span>
                  {/* Project Content */}
                  <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-lightDark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                    <h4 className='text-xl'>Cherry Blossom</h4>
                    {/* Project Links */}
                    <div className="flex justify-center gap-5 mt-2.5">
                      <a href="#" className='hover:text-primary duration-200'><FaLink size={30}/></a>
                      <a href="#" className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                    </div>
                  </div>
                </div>
                {/* Single Project */}
                <div className="group relative overflow-hidden">
                  <img className='w-full rounded-md group-hover:scale-110 duration-300' src={projectImg1} alt="my-work"/>
                  <span className='absolute top-2.5 left-2.5 capitalize font-medium rounded-xl bg-lightDark text-white py-0.5 px-4'>react</span>
                  {/* Project Content */}
                  <div className="hidden group-hover:flex flex-col justify-center items-center text-center text-white absolute inset-0 before:content-[''] before:bg-lightDark before:rounded-md before:opacity-70 before:absolute before:inset-0 before:z-[-1] z-0 duration-300">
                    <h4 className='text-xl'>Cherry Blossom</h4>
                    {/* Project Links */}
                    <div className="flex justify-center gap-5 mt-2.5">
                      <a href="#" className='hover:text-primary duration-200'><FaLink size={30}/></a>
                      <a href="#" className='hover:text-primary duration-200'><FaGithub size={30}/></a>
                    </div>
                  </div>
                </div>
              </>
            )}
                
              </div>
            </div>
            {/* Show All Button */}
            <div className='col-span-12 mx-auto mt-2.5'>
            <button className='btn capitalize' style={{display: 'inline-flex', alignItems: 'center'}} onClick={toggleShowMore}>
              {showMore ? 'show less' : 'show all'}
              {showMore ? <FaCaretUp size={20} /> : <FaCaretDown size={20} />}
            </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects