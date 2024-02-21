import React from 'react'
import html from '../../assets/img/skills/html.png'
import css from '../../assets/img/skills/css.png'
import js from '../../assets/img/skills/js.png'
import bootstrap from '../../assets/img/skills/bootstrap.png'
import tailwind from '../../assets/img/skills/tailwind.png'
import sass from '../../assets/img/skills/sass.png'
import react from '../../assets/img/skills/react.png'
import figma from '../../assets/img/skills/figma.png'
import canva from '../../assets/img/skills/canva.png'
import photoshop from '../../assets/img/skills/photoshop.png'
import wordpress from '../../assets/img/skills/wordpress.png'
import github from '../../assets/img/skills/github.png'
import msOffice from '../../assets/img/skills/office.png'
import win from '../../assets/img/skills/win10.png'
import ytSeo from '../../assets/img/skills/ytseo.png'

const Skills = () => {
  return (
    <>
      {/* Skills Section */}
      <div className="container mx-auto py-16 md:py-20">
        <div className="grid grid-cols-12 grid-flow-row gap-5">
          {/* Section Title */}
          <div className="col-span-12 uppercase border-b border-grey md:border-none pb-2.5 mb-2.5">
            <h4 className='relative font-black text-3xl md:text-4xl lg:text-5xl mb-2'>my capability (still going) 
            <span className="text-6xl md:text-7xl lg:text-9xl md:top-[-40px] lg:top-[-66px] stroke">skills</span></h4>
          </div>
          {/* Skills */}
          <div className="col-span-12">
            <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-flow-row gap-5 text-center uppercase font-semibold">
              <li><img className='w-[64px] md:w-auto mx-auto' src={html} alt="" /> html5</li>
              <li><img className='w-[64px] md:w-auto mx-auto' src={css} alt="" /> css3</li>
              <li><img className='w-[64px] md:w-auto mx-auto' src={js} alt="" /> js <br /> (essentials)</li>
              <li><img className='w-[64px] md:w-auto mx-auto' src={tailwind} alt="" /> tailwind</li>
              <li><img className='w-[64px] md:w-auto mx-auto' src={react} alt="" /> react</li>
              <li><img className='w-[64px] md:w-auto mx-auto' src={bootstrap} alt="" /> bootstrap</li>
              <li><img className='w-[64px] md:w-auto mx-auto' src={sass} alt="" /> sass</li>
              <li><img className='w-[64px] md:w-auto mx-auto' src={figma} alt="" /> figma</li>
              <li><img className='w-[64px] md:w-auto mx-auto' src={canva} alt="" /> canva</li>
              <li><img className='w-[64px] md:w-auto mx-auto' src={photoshop} alt="" /> photoshop</li>
              <li><img className='w-[64px] md:w-auto mx-auto' src={wordpress} alt="" /> wordpress</li>
              <li><img className='w-[64px] md:w-auto mx-auto' src={github} alt="" /> github <br /> (basics)</li>
              <li><img className='w-[64px] md:w-auto mx-auto' src={msOffice} alt="" /> ms office</li>
              <li><img className='w-[64px] md:w-auto mx-auto' src={win} alt="" /> computer <br /> literate</li>
              <li><img className='w-[64px] md:w-auto mx-auto' src={ytSeo} alt="" /> youtube <br /> seo</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills