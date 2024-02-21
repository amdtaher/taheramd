import React, { useState } from 'react';
import contactImg from '../../assets/img/contact/contactImg.svg'
import { FaConciergeBell } from "react-icons/fa";
import ContactUs from '../ContactUs/ContactUs';

const Contact = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      {/* Contact Section */}
      <section className='bg-dimLight'>
        <div className="container mx-auto py-32 md:py-20" id='contact'>
          <div className="grid grid-cols-12 grid-flow-row gap-5 px-5 sm:px-0">
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
                  {/* Contact Me button */}
                  <div>
                    <button className='btn capitalize group' onClick={toggleShowMore}>
                      contact me <FaConciergeBell className='group-hover:scale-110 duration-300 inline-block ml-1.5'/>
                    </button>                
                  </div>
                </div>
                {/* Contact Right */}
                <div className="col-span-12 md:col-span-5 lg:col-span-6 mx-auto">
                  <img src={contactImg} alt="Contact-Image" />
                </div>

              {/* Contact Us Component */}
              {showMore && (
                <div className="col-span-12 mx-auto">
                  <ContactUs/>
                </div>
              )}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact