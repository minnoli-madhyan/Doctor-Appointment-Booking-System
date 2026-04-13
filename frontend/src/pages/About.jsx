import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-primary'>
        <p>ABOUT <span className='text-primary font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>docMeet is a cutting-edge healthcare platform designed to simplify the process of finding and connecting with medical professionals. Whether you're seeking a general physician or a specialist, docMeet helps users find the right doctor based on their needs and location. It offers a user-friendly interface that allows patients to easily book appointments, manage their health records, and access quality care from trusted healthcare providers.</p>
         
          <b className='text-primary'>Our Vision</b>
          <p>docMeet is to create a seamless, accessible, and efficient healthcare experience for everyone. We aim to bridge the gap between patients and healthcare professionals, empowering individuals to take charge of their health by providing easy access to trusted medical services. Through continuous innovation and personalized care solutions, docMeet strives to be the leading platform that enhances the way people manage their healthcare, ensuring timely, convenient, and high-quality treatment for all.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-primary font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About
