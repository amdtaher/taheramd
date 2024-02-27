import React from 'react'
import { FaQuoteRight } from 'react-icons/fa';
import { motion } from "framer-motion"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import person1 from '../../assets/img/testimonials/person1.jpg'
import reviewImg from '../../assets/img/testimonial0.png'

const Testimonials = () => {
  // Motion
  const fade = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: .5,
        duration: 1
      },
    },
  }
  const child = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: .6,
        duration: 1
      },
    },
  }
  const child2 = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: .6,
        duration: 1
      },
    },
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <>
      {/* Testimonial Section */}
      <motion.section
      variants={fade}
      initial='hidden'
      whileInView='visible'
      viewport={{once: true}}>
        <div className="container mx-auto py-16 md:py-20" id='testimonial'>
          <div className="grid grid-cols-12 grid-flow-row gap-5 px-5 sm:px-0">
            {/* Section Title */}
            <div className="col-span-12 uppercase pb-2.5 mb-2.5">
              <h4 className='relative font-black text-3xl md:text-4xl lg:text-5xl mb-2'>what clients say
              <span className="text-6xl md:text-7xl lg:text-9xl md:top-[-40px] lg:top-[-66px] stroke">feedbacks</span></h4>
            </div>
            {/* Testimonials Content */}
            <div className="col-span-12 overflow-hidden">
              <div className="grid grid-cols-12 grid-flow-row gap-5 py-5 items-center">
                {/* Testimonial Banner Image */}
                <motion.div
                variants={child2}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                className="hidden col-span-12 lg:block lg:col-span-5">
                  <img src={reviewImg} alt="" />
                </motion.div>
                {/* Testimonial */}
                <motion.div
                variants={child}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                className="col-span-12 lg:col-span-7 gap-5 text-center capitalize">
                  <Slider {...settings}>
                    {/* Single Testimonial */}
                    <div className="rounded-lg mx-auto py-12 px-10">
                      <FaQuoteRight className='mx-auto mb-5' size={30}/>
                      <p className='text-sm lg:text-base text-subText font-normal text-center italic px-5 md:px-10'>Awesome template, well written code and looks great on any platform. The customer support is very helpful and as huge asset to this template. Overall a good design, that I am quite happy with.</p>
                      <div className="flex justify-center items-center gap-5 mt-5">
                          <img className='w-[60px] rounded-full' src={person1} alt="person"/>
                          <h4 className='text-base font-medium'>Gwen Stacy<span className='block'>UI/UX Designer</span></h4>
                      </div> 
                    </div>
                    {/* Single Testimonial */}
                    <div className="rounded-lg mx-auto py-12 px-10">
                      <FaQuoteRight className='mx-auto mb-5' size={30}/>
                      <p className='text-sm text-subText font-normal text-center italic'>Awesome template, well written code and looks great on any platform. The customer support is very helpful and as huge asset to this template. Overall a good design, that I am quite happy with.</p>
                        <div className="flex justify-center items-center gap-5 mt-5">
                            <img className='w-[60px] rounded-full' src={person1} alt="person"/>
                            <h4 className='text-base font-medium'>Gwen Stacy<span className='block'>UI/UX Designer</span></h4>
                        </div> 
                    </div>
                    {/* Single Testimonial */}
                    <div className="rounded-lg mx-auto py-12 px-10">
                      <FaQuoteRight className='mx-auto mb-5' size={30}/>
                      <p className='text-sm text-subText font-normal text-center italic'>Awesome template, well written code and looks great on any platform. The customer support is very helpful and as huge asset to this template. Overall a good design, that I am quite happy with.</p>
                        <div className="flex justify-center items-center gap-5 mt-5">
                            <img className='w-[60px] rounded-full' src={person1} alt="person"/>
                            <h4 className='text-base font-medium'>Gwen Stacy<span className='block'>UI/UX Designer</span></h4>
                        </div> 
                    </div>
                  </Slider>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Testimonials