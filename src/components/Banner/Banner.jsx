import React from "react";
import { Link } from 'react-scroll';
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion"
import img from '../../assets/img/Taher-Ahmed.png';
import wavingHand from '../../assets/img/icons/waving-hand.png';
import pin from '../../assets/img/icons/pin.png';


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
          <div className="grid grid-cols-12 grid-flow-row flex-col-reverse justify-items-center items-center relative px-5 sm:px-0">
            {/* About Content */}
            <div className="col-span-12 md:col-span-7 lg:max-w-[40rem] flex flex-col gap-6 text-center md:text-left relative capitalize">
              <span className='text-xl text-subText font-medium relative before:content-[""] before:w-10 before:h-1 lg:before:bg-primary before:absolute before:top-3 before:-left-12'>hello, i'm a</span>
              <h2 className='font-bold text-3xl md:text-4xl lg:text-6xl'>Front-End <br /> Web Developer
              <img src={wavingHand} alt="" style={{display: 'inline-block'}} className='w-12 lg:w-[70px] pl-1 animate-wave' />
              </h2>
              <p className='text-lg text-subText font-medium'>my name is Taher Ahmed Tanveer. A passionate Front-end & React Developer (Fresher) lives in Sylhet, Bangladesh.
              <img src={pin} alt="" style={{display: 'inline-block'}} className='w-8 lg:w-[33px] pl-1' />
              </p>
            </div>
            {/* About Image */}
            <div className="col-span-12 md:col-span-5 max-w-[300px] lg:max-w-[360px] mx-auto order-first md:order-none mb-10 md:mb-0">
            <img className='hidden md:block w-auto mx-auto bg-subText image-radius animate-wiggle' src={img} alt="picture_of_mine" />
            </div>
            {/* Down to Services Button */}
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