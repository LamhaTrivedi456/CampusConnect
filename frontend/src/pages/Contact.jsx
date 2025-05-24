import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.header_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>MIT-ADT</p>
          <p className=' text-gray-500'> <br /> </p>
          <p className=' text-gray-500'>Cont: 9664428271 <br /> Email: lamhatrivedi@gmail.com</p>
          <p className=' font-semibold text-lg text-gray-600'></p>
          <p className=' text-gray-500'>Feedback</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>FeedbackForm</button>
        </div>
      </div>

    </div>
  )
}

export default Contact
