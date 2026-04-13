import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-purple-200 mb-5 rounded-lg px-6 md:px-10  lg:px-20 '>

            {/* --------- Header Left --------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[7vw] md:mb-[-30px]'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-primary font-semibold leading-tight md:leading-tight lg:leading-tight'>
                   Find a Doctor &  Book Appointment <br />  With Trusted Doctors
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-black text-sm font-light'>
                    <img className='w-28' src={assets.group_profiles} alt="" />
                    <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
                </div>
                <a href='/doctors' className='flex items-center gap-2 bg-primary px-9 py-3 rounded-full text-white text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                    Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
                </a>
            </div>

            {/* --------- Header Right --------- */}
            <div className='md:w-1/2 relative'>
            <img 
  className="w-50 h-auto md:absolute bottom-0 rounded-lg pt-4"
  src={assets.header_img} 
  alt="Header Image"
/>

            </div>
        </div>
    )
}

export default Header