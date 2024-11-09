import React from "react";
import point from "../assets/point.svg";
import machinestalkLogo from "../assets/machinestalkLogo.png";
import flowLogo from "../assets/flowLogo.png";
import barchaLogo from "../assets/barchaLogo.png";

const ExperienceSection = () => {
  return (
    <div className="flex flex-col pt-10 font-montserrat px-60 text-white mt-10">
      {/* Header */}
      <div className="flex items-center mb-10">
        <img src={point} alt="Point" className="w-12" />
        <h1 className="text-[18px] font-medium ml-2">Experience</h1>
      </div>

      <div className="flex pt-10 space-x-14 items-center justify-center ">
        {/* Experience Card for Machinestalk */}
        <div className="flex justify-center mb-6 container noselect bt-10">
          <div class="canvas">
            <div class="tracker tr-1"></div>
            <div class="tracker tr-2"></div>
            <div class="tracker tr-3"></div>
            <div class="tracker tr-4"></div>
            <div class="tracker tr-5"></div>
            <div class="tracker tr-6"></div>
            <div class="tracker tr-7"></div>
            <div class="tracker tr-8"></div>
            <div class="tracker tr-9"></div>
            <div class="tracker tr-10"></div>
            <div class="tracker tr-11"></div>
            <div class="tracker tr-12"></div>
            <div class="tracker tr-13"></div>
            <div class="tracker tr-14"></div>
            <div class="tracker tr-15"></div>
            <div class="tracker tr-16"></div>
            <div class="tracker tr-17"></div>
            <div class="tracker tr-18"></div>
            <div class="tracker tr-19"></div>
            <div class="tracker tr-20"></div>
            <div class="tracker tr-21"></div>
            <div class="tracker tr-22"></div>
            <div class="tracker tr-23"></div>
            <div class="tracker tr-24"></div>
            <div class="tracker tr-25"></div>
            <div id="card">
              <div className="flex flex-col justify-between rounded-[18px] bg-[#151517] p-6 transition-transform duration-300 transform hover:scale-105">
                {/* Company Logo */}
                <img
                  src={machinestalkLogo}
                  alt="Machinestalk logo"
                  className="h-[120px] mb-2"
                />
                {/* Company Info */}
                <div className="self-start mt-2">
                  <h2 className="text-[18px] font-semibold text-left">
                    Machinestalk
                  </h2>
                </div>
                <div className="flex justify-between items-center mt-10">
                  <p className="text-[14px] text-[#CCCCCC] max-w-[130px]">
                    iOS ENGINEER INTERN
                  </p>
                  <span className="text-[16px] text-[#8A8A8A]">/2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-6 container noselect mt-10">
          <div class="canvas">
            <div class="tracker tr-1"></div>
            <div class="tracker tr-2"></div>
            <div class="tracker tr-3"></div>
            <div class="tracker tr-4"></div>
            <div class="tracker tr-5"></div>
            <div class="tracker tr-6"></div>
            <div class="tracker tr-7"></div>
            <div class="tracker tr-8"></div>
            <div class="tracker tr-9"></div>
            <div class="tracker tr-10"></div>
            <div class="tracker tr-11"></div>
            <div class="tracker tr-12"></div>
            <div class="tracker tr-13"></div>
            <div class="tracker tr-14"></div>
            <div class="tracker tr-15"></div>
            <div class="tracker tr-16"></div>
            <div class="tracker tr-17"></div>
            <div class="tracker tr-18"></div>
            <div class="tracker tr-19"></div>
            <div class="tracker tr-20"></div>
            <div class="tracker tr-21"></div>
            <div class="tracker tr-22"></div>
            <div class="tracker tr-23"></div>
            <div class="tracker tr-24"></div>
            <div class="tracker tr-25"></div>
            <div id="card">
              <div className="flex flex-col justify-between bg-[#151517] rounded-[18px] p-6 transition-transform duration-300 transform hover:scale-105">
                {/* Company Logo */}
          <img
            src={flowLogo}
            alt="Flow logo"
            className="h-[120px] w-[260px] mb-2"
          />
          {/* Company Info */}
          <div className="self-start mt-2">
            <h2 className="text-[18px] font-semibold text-left">Flow</h2>
          </div>
          <div className="flex justify-between items-center mt-10">
            <p className="text-[14px] text-[#CCCCCC] max-w-[130px]">
              iOS DEVELOPER FREELANCER
            </p>
            <span className="text-[16px] text-[#8A8A8A]">/2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-6 container noselect bt-10">
          <div class="canvas">
            <div class="tracker tr-1"></div>
            <div class="tracker tr-2"></div>
            <div class="tracker tr-3"></div>
            <div class="tracker tr-4"></div>
            <div class="tracker tr-5"></div>
            <div class="tracker tr-6"></div>
            <div class="tracker tr-7"></div>
            <div class="tracker tr-8"></div>
            <div class="tracker tr-9"></div>
            <div class="tracker tr-10"></div>
            <div class="tracker tr-11"></div>
            <div class="tracker tr-12"></div>
            <div class="tracker tr-13"></div>
            <div class="tracker tr-14"></div>
            <div class="tracker tr-15"></div>
            <div class="tracker tr-16"></div>
            <div class="tracker tr-17"></div>
            <div class="tracker tr-18"></div>
            <div class="tracker tr-19"></div>
            <div class="tracker tr-20"></div>
            <div class="tracker tr-21"></div>
            <div class="tracker tr-22"></div>
            <div class="tracker tr-23"></div>
            <div class="tracker tr-24"></div>
            <div class="tracker tr-25"></div>
            <div id="card">
              <div className="flex flex-col justify-between bg-[#151517] rounded-[18px] p-6 transition-transform duration-300 transform hover:scale-105">
                  {/* Company Logo */}
          <img
            src={barchaLogo}
            alt="Barcha Technology logo"
            className="h-[120px] mb-2"
          />
          {/* Company Info */}
          <div className="self-start mt-2">
            <h2 className="text-[18px] font-semibold text-left">
              Barcha Technology
            </h2>
          </div>
          <div className="flex justify-between items-center mt-10">
            <p className="text-[14px] text-[#CCCCCC] max-w-[130px]">
              iOS DEVELOPER INTERN
            </p>
            <span className="text-[16px] text-[#8A8A8A]">/2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        

      </div>
    </div>
  );
};

export default ExperienceSection;
