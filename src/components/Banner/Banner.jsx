import React from "react";
import { Link } from 'react-scroll';
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion"
import img from '../../assets/img/avatar/hero.webp';
import wavingHand from '../../assets/img/icons/waving-hand.webp';
import pin from '../../assets/img/icons/pin.webp';


const Banner = () => {
  // Function to handle the activation of a link.
  const handleSetActive = (to) => {
    console.log(to);
  };
  // Motion
  const fade = {
    hidden: { y: -33, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: .3,
        duration: 1.5
      },
    },
  }

  return (
    <>
      <motion.section 
      variants={fade}
      initial='hidden'
      whileInView='visible'
      viewport={{once: true}}
      className="h-dvh flex items-center -mt-20">
        <div className="container mx-auto">
          {/* New Banner */}
          <div className="grid grid-cols-12 grid-flow-row flex-col-reverse justify-items-center items-center relative px-5 sm:px-0">
            {/* Banner Content */}
            <div className="col-span-12 md:col-span-7 lg:max-w-[40rem] flex flex-col gap-6 text-center md:text-left relative capitalize">
              <span className='text-xl text-subText font-medium relative before:content-[""] before:w-10 before:h-1 lg:before:bg-primary before:absolute before:top-3 before:-left-12'>hello, i'm a</span>
              <h2 className='font-bold text-3xl md:text-4xl lg:text-6xl'>Front-End <br /> Web Developer
              < src={wavingHand} alt="" style={{display: 'inline-block'}} className='w-12 lg:w-[70px] pl-1 animate-wave' />
              </h2>
              <p className='text-lg text-subText font-medium'>my name is Taher Ahmed Tanveer. A passionate Freelance Front-end & React Developer lives in Sylhet, Bangladesh.
              <img src={pin} alt="" style={{display: 'inline-block'}} className='w-8 lg:w-[33px] pl-1' />
              </p>
            </div>
            {/* Banner Image */}
            <div className="hidden md:block w-[400px] h-[400px] overflow-hidden col-span-12 md:col-span-5 border-2 border-secondary rounded-full p-7 mx-auto order-first md:order-none mb-10 md:mb-0">
            <img className='w-full h-full object-cover object-top mx-auto bg-subText rounded-full' src={img} alt="picture_of_mine" />
            </div>
            {/* Down to About Section */}
            <Link  
            to="about" //it catches id
            offset={-200}
            smooth={true} 
            duration={1200} 
            onSetActive={handleSetActive}
            className='absolute -bottom-24 left-1/2 animate-bounce cursor-pointer'>
              <FaChevronDown size={20}/>
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Banner
