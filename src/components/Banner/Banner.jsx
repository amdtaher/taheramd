import React from "react";
import { Link } from 'react-scroll';
import { FaChevronDown } from "react-icons/fa";
import { PiHandWavingFill } from "react-icons/pi";
import img from '../../assets/img/Taher-Ahmed.png';
import wavingHand from '../../assets/img/icons/waving-hand.png';
import pin from '../../assets/img/icons/pin.png';


const Banner = () => {
  // Function to handle the activation of a link.
  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <>
      <section>
        <div className="container mx-auto py-16 md:py-40">
          <div className="grid grid-cols-12 grid-flow-row flex-col-reverse justify-items-center items-center relative px-5 sm:px-0">
            {/* About Content */}
            <div className="col-span-12 md:col-span-7 flex flex-col gap-6 text-center md:text-left relative max-w-[40rem] capitalize">
              <span className='text-xl text-subText font-medium relative before:content-[""] before:w-10 before:h-1 before:bg-primary before:absolute before:top-3 before:left-20 md:before:-left-12'>hello, i'm a</span>
              <h2 className='font-bold text-3xl md:text-4xl lg:text-6xl'>Front-End <br /> Web Developer
              <img src={wavingHand} alt="" style={{display: 'inline-block'}} className='w-12 lg:w-[70px] pl-1' />
              </h2>
              <p className='text-lg text-subText font-medium'>Hi, I'm Taher Ahmed Tanveer. A passionate Front-end & React Developer (Fresher) lives in Sylhet, Bangladesh.
              <img src={pin} alt="" style={{display: 'inline-block'}} className='w-8 lg:w-[33px] pl-1' />
              </p>
            </div>
            {/* About Image */}
            <div className="col-span-12 md:col-span-5 max-w-[300px] lg:max-w-[350px] mx-auto order-first md:order-none mb-10 md:mb-0">
            <img className='w-auto mx-auto bg-subText image-radius animate-wiggle' src={img} alt="picture_of_mine" />
            </div>
            {/* Down to Services Button */}
            <Link  
            to="about" //it catches id
            offset={-100}
            smooth={true} 
            duration={200} 
            onSetActive={handleSetActive}
            className='absolute -bottom-24 left-1/2 animate-bounce cursor-pointer'>
              <FaChevronDown size={20}/>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner