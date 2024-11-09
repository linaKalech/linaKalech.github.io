import React from "react";

const IntroductionSection = () => {
  return (
    
    <div className="flex items-center justify-center h-screen font-montserrat">
      <div className="text-left space-y-2">
        {/* Name */}
        <h1 className="text-5xl font-regular text-white">Mohamed Kalech</h1>

        {/* Pronunciation */}
        <p className="text-2xl text-[#E1E1E1] font-extralight ">
          /mʊˈhæmɛd kæˈlɛʃ/
        </p>

        {/* Noun */}
        <p className="text-lg text-gray-500">noun</p>

        {/* iOS Engineer */}
        <p className="text-2xl text-[#E1E1E1] font-light">iOS Engineer</p>

        {/* Verb */}
        <p className="text-lg text-gray-500 font-extralight">verb</p>
        {/* iOS Engineer */}
        <p className="text-2xl text-[#E1E1E1] font-light">
          1. Create and innovate
        </p>
        <p className="text-2xl text-[#E1E1E1] font-light">
          2. Collaborate and Integrate
        </p>

        {/* adjective */}
        <p className="text-lg text-gray-500 font-extralight">adjective</p>
        <p className="text-2xl text-[#E1E1E1] font-light">1. Dynamic</p>
        <p className="text-2xl text-[#E1E1E1] font-light">2. Creative</p>
      </div>
    </div>
  );
};

export default IntroductionSection;
