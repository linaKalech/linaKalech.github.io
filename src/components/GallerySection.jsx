import React from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import signature from "../assets/signature.png"

const GallerySection = () => {
  return (
    <div className="flex flex-col space-y-12 px-60 mt-10 mx-[120px] text-white">
      {/* Item 1 */}
      <div className="flex items-center space-x-10">
        <img
          src={img1}
          alt="Gallery Image 1"
          className="h-auto rounded-[20px] outline outline-white"
        />
        <p className="text-[18px] font-regular font-montserrat text-center pl-[40px] leading-relaxed">
        A night in the wilderness, gathered around the campfire with friends, playing Loup Garou. That was where I learned some of my most valuable life lessons. The game, with its twists and turns, taught me how to control my reactions, think strategically and listen carefully to others. It's not just about winning; it's about understanding people, reading between the lines and communicating wisely. These skills have carried over into my work as an iOS developer, where understanding the user’s needs and responding thoughtfully is key.
        </p>
      </div>

      {/* Item 2 */}
      <div className="flex flex-row-reverse items-center space-x-10 space-x-reverse">
        <img
          src={img2}
          alt="Gallery Image 2"
          className="w-[440px] h-auto rounded-[20px] outline outline-white"
        />
        <p className="text-[20px] font-regular font-montserrat text-center max-w-[440px] pr-[100px leading-relaxed">
        Graduating this year and finishing my internship was a big moment for me. Don't get me wrong, I'm grateful for my time at university, but I couldn't shake the feeling that things were moving too slowly. The freedom and free time were great, but I wanted more. I was already freelancing, managing a team and working on personal projects and bring them into reality. That desire for more is what made me fall in love with iOS development.
        </p>
      </div>

     
      <div className="flex items-center space-x-10">
        <img
          src={img3}
          alt="Gallery Image 3"
          className="w-[440px] h-auto rounded-[20px] outline outline-white"
        />
        <div className='flex flex-col items-center pl-[100px]'>
        <p className="text-[20px] font-regular font-montserrat text-center max-w-[440px]">
        In my spare time, you'll likely find me tweaking my portfolio or hanging out on Discord with friends. When I'm not doing that, I'm either playing football, hitting the gym, gaming, or checking crypto market updates. I’m always looking for ways to learn and grow and I appreciate every opportunity that helps me move forward.
        </p>
        <p className="text-[20px] font-regular font-montserrat text-center max-w-[440px] mt-14">
        Thanks for stopping by!
        </p>
        <img
          src={signature}
          className="h-20 mt-4"
        />
        </div>
       
      </div>
    </div>
  );
};

export default GallerySection;
