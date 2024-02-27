import React from 'react'
import { motion } from "framer-motion"
import contactImg1 from '../../assets/img/contact/contactImg.svg'
import contactImg2 from '../../assets/img/contact/contactImg0.png'

const ContactUs = () => {
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
      initial='hidden'
      whileInView='visible'>
        <div className="container mx-auto py-32 md:py-20" id='contactUs'>
          {/* Contact Info */}
          <div className="grid grid-cols-12 grid-flow-row gap-5 mt-10 mb-32 px-5 sm:px-0">
            {/* Section Title */}
            <div className="col-span-12 pb-2.5 mb-2.5">
              <h4 className='uppercase relative font-black text-3xl md:text-4xl lg:text-5xl mb-2'>get in touch
              <span className="text-6xl md:text-7xl lg:text-9xl md:top-[-40px] lg:top-[-66px] uppercase stroke">contact</span></h4>
            </div>
            {/* Contact */}
            <div className="col-span-12">
              <div className="grid grid-cols-12 grid-flow-row gap-5 capitalize">
                {/* Contact Left */}
                <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center gap-5">
                  <h4 className='text-7xl font-extrabold'>Let's Work <br /> Together.</h4>
                  <p className='text-lg text-subText my-6'>Prepared to make your ideas into reality? <br /> I'm here to help you bring your visions to life and achieve your goals.</p>
                </div>
                {/* Contact Right */}
                <div className="col-span-12 md:col-span-5 lg:col-span-6 mx-auto">
                  <img src={contactImg1} alt="Contact-Image" />
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="grid grid-cols-12 grid-flow-row gap-5 mt-10 px-5 sm:px-0">
            {/* Section Title */}
            <div className="col-span-12 uppercase pb-2.5 mb-2.5">
              <h4 className='relative font-black text-3xl md:text-4xl lg:text-5xl mb-2'>massage me (not working yet)</h4>
            </div>
            {/* Contact Us */}
            <div className="col-span-12 capitalize">
              <div className="grid grid-cols-12 grid-flow-row gap-5 md:gap-10">
                {/* Contact Left */}
                <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center">
                  <div className="flex flex-col gap-5">
                    <p className='text-base text-subText'>Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
                    <input className='border border-grey font-medium italic rounded-md py-2.5 pl-2.5' type="text" name="text" placeholder="Name"/>
                    <input className='border border-grey font-medium italic rounded-md py-2.5 pl-2.5' type="email" name="email" placeholder="Email"/>
                    <input className='border border-grey font-medium italic rounded-md py-2.5 pl-2.5' type="tel" name="number" placeholder="Mobile Number"/>
                    <textarea className='border border-grey font-medium italic rounded-md py-2.5 pl-2.5' name="massage" placeholder="Massage"></textarea>
                    <input className='btn cursor-pointer' type="submit" value="Send Massage" id="send"/>
                  </div>
                </div>
                {/* Contact Right */}
                <div className="col-span-12 md:col-span-5 lg:col-span-6  mx-auto hidden md:block">
                  <img src={contactImg2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default ContactUs