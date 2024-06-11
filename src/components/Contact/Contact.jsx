import React from 'react';
import { motion } from "framer-motion"
import { IoMdContact } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Contact = () => {
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
      {/* Contact Section */}
      <motion.section
      variants={fade}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      className='bg-primaryLight'>
        <div className="container mx-auto py-32 md:py-20" id='contact'>
          <div className="grid grid-cols-12 grid-flow-row gap-5 text-center px-5 sm:px-0">
            {/* Content  */}
            <div className="col-span-12 pb-2.5 mb-2.5 ">
              <h4 className='capitalize font-bold text-xl md:text-3xl mb-5'>Ready to make your site ideas into reality? <br /> I'm here to help you.</h4>
              <NavLink to='/contact' className='btn !rounded-full capitalize group'>
                contact me <IoMdContact size={22} className='group-hover:scale-110 duration-300 inline-block ml-1.5'/>
              </NavLink>                
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Contact