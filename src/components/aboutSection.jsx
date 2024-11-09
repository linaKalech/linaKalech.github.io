import React from "react";
import point from "../assets/point.svg";

const AboutSection = () => {
  return (
    <div className="flex flex-col pt-10 font-montserrat px-60 text-white">
      {/* Header */}
      <div className="flex items-center mb-2">
        <img src={point} alt="Point" className="w-12" />
        <h1 className="text-[18px] font-medium ml-2">About Me</h1>
      </div>

      {/* Description */}
      <p className="text-[#8A8A8A] text-[40px] font-regular mb-20 text-left">
      Let me take you through a little bit of my journey — from the lessons I've learned along the way to the passions that drive me today
      </p>
    </div>
  );
};

export default AboutSection;
