import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-primary'>
        <p>CONTACT <span className='text-primary font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-primary'>OUR OFFICE</p>
          <p className=' text-gray-500'>Dadar, Mumbai <br /> Maharastra, India</p>
          <p className=' text-gray-500'>Tel: (415) 555-0132 <br /> Email: onlinebooking@gmail.com</p>
          
          <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-primary hover:text-white transition-all duration-500'>Explore</button>
        </div>
      </div>

    </div>
  )
}

export default Contact
