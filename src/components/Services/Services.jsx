import React from 'react'
import serviceGif1 from '../../assets/img/services/service1.gif'
import serviceGif2 from '../../assets/img/services/service2.gif'
import serviceGif3 from '../../assets/img/services/service3.gif'

const Services = () => {
  return (
    <>
      {/* Services Section */}
      <section className='bg-dimLight'>
        <div className="container mx-auto py-16 md:py-20" id='services'>
          <div className="grid grid-cols-12 grid-flow-row gap-5 px-5 sm:px-0">
            {/* Section Title */}
            <div className="col-span-12 uppercase border-b border-grey md:border-none pb-2.5 mb-2.5">
              <h4 className='relative font-black text-3xl md:text-4xl lg:text-5xl mb-2'>what can i do
              <span className="text-6xl md:text-7xl lg:text-9xl md:top-[-40px] lg:top-[-66px] stroke">services</span></h4>
            </div>
            {/* Services */}
            <div className="col-span-12">
              <div className="grid grid-cols-12 grid-flow-row gap-5 px-5 md:px-0">
                {/* Single Service */}
                <div className="col-span-12 md:col-span-4 capitalize">
                  <img className='w-1/3 md:w-1/2 m-auto' src={serviceGif1} alt="service-image"/>
                  <div className="text-center">
                    <h4 className='text-lg lg:text-xl font-semibold lg:font-bold tracking-wide'>web development</h4>
                    <p className='text-sm lg:text-base text-center text-subText mt-2.5'>I deliver Dynamic and Responsive Websites from Scratch, with HTML, CSS & JavaScript...</p>
                  </div>
                </div>
                {/* Single Service */}
                <div className="col-span-12 md:col-span-4 capitalize">
                  <img className='w-1/3 md:w-2/4 m-auto' src={serviceGif2} alt="service-image"/>
                  <div className="text-center">
                    <h4 className='text-lg lg:text-xl font-semibold lg:font-bold tracking-wide'>web design</h4>
                    <p className='text-sm lg:text-base text-center text-subText mt-2.5'>Design is the main Beauty of a Site. Elevate your online presence with top-notch web design Using FIGMA...</p>
                  </div>
                </div>
                {/* Single Service */}
                <div className="col-span-12 md:col-span-4 capitalize">
                  <img className='w-1/3 md:w-2/4 m-auto' src={serviceGif3} alt="service-image"/>
                  <div className="text-center">
                    <h4 className='text-lg lg:text-xl font-semibold lg:font-bold tracking-wide'>Web Hosting</h4>
                    <p className='text-sm lg:text-base text-center text-subText mt-2.5'>I also provide hosting services, bringing your online vision to life and ensuring its smooth operation....</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services