import React from 'react';
import AboutSection from '../components/aboutSection';
import GallerySection from '../components/GallerySection';
import Footer from "../components/footer";

const InfoPage = () => {
  return (
    <div className="relative h-screen overflow-auto items-center justify-center text-white">
      <div className='mt-[200px]'>
       <AboutSection/>
       </div>
       <GallerySection />
       <div className="font-montserrat flex items-center justify-center font-semibold text-white mt-40 space-x-4">
      <a className="text-[26px]">✌️</a>
      <a 
  href="https://calendly.com/medkalech/30min" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-white text-[30px] transition duration-200 hover:text-gray-400"
>
  Book a Call
</a>

      </div>
       <div className='mt-[200px]'>
        
       <Footer/>
       
       </div>
     
    </div>
  );
};

export default InfoPage;

