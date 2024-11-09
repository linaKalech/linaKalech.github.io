import IntroductionSection from "../components/IntroductionSection";
import arrow from "../assets/arrowDown.svg";
import React, { useEffect, useState } from "react";
import BouncingArrow from "../components/BouncingArrow";
import ProjectSection from "../components/projectSection";
import ExperienceSection from "../components/experienceSection";
import Footer from "../components/footer";

const WorkPage = () => {
  return (
    <div className="relative z-10 h-screen overflow-y-auto">
      <IntroductionSection />
      <div className="flex justify-center -mt-32">
        <BouncingArrow />
        <div className="h-[20vh]"></div>
      </div>
      <ProjectSection />
      <ExperienceSection />
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
      <div className="mt-[200px]">
      <Footer/>
      </div>
    </div>
  );
};

export default WorkPage;
