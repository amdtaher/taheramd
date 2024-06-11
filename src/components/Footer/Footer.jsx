import React from 'react'
import { motion } from "framer-motion"
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
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
      {/* Footer Section */}
      <motion.section
      variants={fade}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      className='bg-secondary text-white'>
        <div className="container mx-auto py-16 md:py-20">
          <ul className="grid grid-cols-12 grid-flow-row gap-5 px-5 md:px-0">
              <li className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col justify-center font-semibold uppercase mb-2.5 lg:mb-0">
                  <span>The</span>
                  <span>Taher's Portfolio</span>
              </li>
              <li className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col justify-center font-semibold mb-2.5 lg:mb-0">
                  <span>Golapgonj</span>
                  <span>Sylhet, Bangladesh</span>
              </li>
              <li className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col justify-center font-semibold mb-2.5 lg:mb-0">
                  <a className='hover:underline' href="mailto:taherahmed6927@gmail.com"><span>taherahmed6927@gmail.com</span></a>
                  <a className='hover:underline' href="tel:+8801647101652"><span>+88 016 471 XXX XX</span></a>
              </li>
              <li className="col-span-12 md:col-span-6 lg:col-span-3 flex justify-center md:justify-start lg:justify-center gap-8 items-center font-semibold mb-2.5 lg:mb-0">
                  <a className='hover:scale-125 duration-200' href="https://github.com/amdtaher" target="_blank"><FaGithub size={25}/></a>
                  <a className='hover:scale-125 duration-200' href="https://web.facebook.com/profile.php?id=100015140653815" target="_blank"><FaFacebook size={25}/></a>
                  <a className='hover:scale-125 duration-200' href="https://twitter.com/DzSpyder" target="_blank"><FaTwitter size={25}/></a>
                  <a className='hover:scale-125 duration-200' href="https://www.linkedin.com/in/tanveer-ahmed7296/" target="_blank"><FaLinkedin size={25}/></a>
              </li>
          </ul>
        </div>
      </motion.section>
    </>
  )
}

export default Footer