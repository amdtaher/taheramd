import React from 'react'
import { motion } from "framer-motion"
import html from '../../assets/img/skills/html.webp'
import css from '../../assets/img/skills/css.webp'
import js from '../../assets/img/skills/js.webp'
import bootstrap from '../../assets/img/skills/bootstrap.webp'
import tailwind from '../../assets/img/skills/tailwind.webp'
import sass from '../../assets/img/skills/sass.webp'
import react from '../../assets/img/skills/react.webp'
import figma from '../../assets/img/skills/figma.webp'
import canva from '../../assets/img/skills/canva.webp'
import photoshop from '../../assets/img/skills/photoshop.webp'
import wordpress from '../../assets/img/skills/wordpress.webp'
import github from '../../assets/img/skills/github.webp'
import msOffice from '../../assets/img/skills/office.webp'
import win from '../../assets/img/skills/win10.webp'
import ytSeo from '../../assets/img/skills/ytseo.webp'
import git from '../../assets/img/skills/git.webp'
import gsap from '../../assets/img/skills/gsap.webp'

const Skills = () => {
  // Motion
  const fade = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: .2,
        duration: 1
      },
    },
  }
  return (
    <>
      {/* Skills Section */}
      <motion.div
      variants={fade}
      animate='hidden'
      whileInView='visible'
      className="container mx-auto py-16 md:py-20">
        <div className="grid grid-cols-12 grid-flow-row gap-5">
          {/* Section Title */}
          <div className="col-span-12 uppercase border-b border-grey md:border-none pb-2.5 mb-2.5">
            <h4 className='relative font-black text-3xl md:text-4xl lg:text-5xl mb-2'>my capability (still going) 
            <span className="text-6xl md:text-7xl lg:text-9xl md:top-[-40px] lg:top-[-66px] stroke">skills</span></h4>
          </div>
          {/* Skills */}
          <div className="col-span-12">
            <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-flow-row gap-5 text-center uppercase font-semibold">
              <li><img className='w-[64px] md:w-auto mx-auto duration-300 cursor-pointer hover:-translate-y-2.5' src={html} alt="" /> html5</li>
              <li><img className='w-[64px] md:w-auto mx-auto duration-300 cursor-pointer hover:-translate-y-2.5' src={css} alt="" /> css3</li>
              <li><img className='w-[64px] md:w-auto mx-auto duration-300 cursor-pointer hover:-translate-y-2.5' src={js} alt="" /> js6 <br /> (fundemental)</li>
              <li><img className='w-[64px] md:w-auto mx-auto duration-300 cursor-pointer hover:-translate-y-2.5' src={tailwind} alt="" /> tailwind</li>
              <li><img className='w-[64px] md:w-auto mx-auto duration-300 cursor-pointer hover:-translate-y-2.5' src={react} alt="" /> react</li>
              <li><img className='w-[64px] md:w-auto mx-auto duration-300 cursor-pointer hover:-translate-y-2.5' src={bootstrap} alt="" /> bootstrap5</li>
              <li><img className='w-[64px] md:w-auto mx-auto duration-300 cursor-pointer hover:-translate-y-2.5' src={sass} alt="" /> sass</li>
              <li><img className='w-[64px] md:w-auto mx-auto duration-300 cursor-pointer hover:-translate-y-2.5' src={gsap} alt="" /> gsap </li>
              <li><img className='w-[64px] md:w-auto mx-auto duration-300 cursor-pointer hover:-translate-y-2.5' src={figma} alt="" /> figma</li>
              <li><img className='w-[64px] md:w-auto mx-auto duration-300 cursor-pointer hover:-translate-y-2.5' src={canva} alt="" /> canva</li>
              <li><img className='w-[64px] md:w-auto mx-auto duration-300 cursor-pointer hover:-translate-y-2.5' src={photoshop} alt="" /> photoshop (basic)</li>
              <li><img className='w-[64px] md:w-auto mx-auto duration-300 cursor-pointer hover:-translate-y-2.5' src={wordpress} alt="" /> wordpress (basic)</li>
              <li><img className='w-[64px] md:w-auto mx-auto duration-300 cursor-pointer hover:-translate-y-2.5' src={git} alt="" /> git (basic)</li>
              <li><img className='w-[64px] md:w-auto mx-auto duration-300 cursor-pointer hover:-translate-y-2.5' src={github} alt="" /> github</li>
              <li><img className='w-[64px] md:w-auto mx-auto duration-300 cursor-pointer hover:-translate-y-2.5' src={msOffice} alt="" /> ms office</li>
              <li><img className='w-[64px] md:w-auto mx-auto duration-300 cursor-pointer hover:-translate-y-2.5' src={ytSeo} alt="" /> youtube <br /> seo</li>
              <li><img className='w-[64px] md:w-auto mx-auto duration-300 cursor-pointer hover:-translate-y-2.5' src={win} alt="" /> win 10</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Skills