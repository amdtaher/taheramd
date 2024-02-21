import React from 'react'
import contactImage from '../../assets/img/contact/contactImg0.png'

const ContactUs = () => {
  return (
    <>
      {/* Contact Us Section */}
      <div className="container mx-auto py-16 md:py-20">
        <div className="grid grid-cols-12 grid-flow-row gap-5 px-5 sm:px-0">
          {/* Section Title */}
          <div className="col-span-12 uppercase pb-2.5 mb-2.5">
            <h4 className='relative font-black text-3xl md:text-4xl lg:text-5xl mb-2'>let's work (not working yet)
            <span className="text-6xl md:text-7xl lg:text-9xl md:top-[-40px] lg:top-[-66px] stroke">contact</span></h4>
          </div>
          {/* Contact Us */}
          <div className="col-span-12 capitalize">
            <div className="grid grid-cols-12 grid-flow-row gap-5 md:gap-10">
              {/* Contact Left */}
              <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
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
              <div className="col-span-12 md:col-span-6 mx-auto">
                <img src={contactImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs