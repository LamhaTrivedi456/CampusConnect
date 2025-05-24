import React from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImage from '../assets/banner-image.png'; // Save the uploaded image as 'banner-image.png' in your assets folder

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#4f81ff] rounded-2xl overflow-hidden p-6 sm:p-10 md:p-14 my-12 md:mx-10 text-white">
      
      {/* Left Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Stay in the loop
          <br />
          connect with teachers & campus life
        </h1>
        <button
          onClick={() => {
            navigate('/login');
            scrollTo(0, 0);
          }}
          className="mt-8 bg-white text-[#333] text-base sm:text-lg px-6 py-3 rounded-full hover:scale-105 transition-transform"
        >
          Create account
        </button>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src={bannerImage}
          alt="Campus Connect Banner"
          className="w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default Banner;
