import React, { useState } from "react";
import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";
import emailIcon from "../assets/mail.svg";
import inclinedArrow from '../assets/inclineArrow.svg'
import linkedinWhite from '../assets/linkedinWhite.svg';
import githubWhite from '../assets/githubWhite.svg';
import mailWhite from '../assets/mailWhite.svg';
import whatsappIcon from '../assets/whatsapp.svg';
import whatsappWhiteIcon from '../assets/whatsappWhite.svg';


const Footer = () => {
    const [isHovered, setIsHovered] = useState(false);
    const openWhatsApp = () => {
        const phoneNumber = '+21699235749';
        const whatsappURL = `https://wa.me/${phoneNumber}`;
        window.open(whatsappURL, '_blank', 'noopener noreferrer');
      };

  return (
    <footer className="bg-[#101010] text-[#8A8A8A] py-10 text-center font-montserrat">
        <div className="mx-20">
      {/* Footer Description */}
      <p className="text-[20px] mb-2">
        Caught your interest? Let's keep the spark going!
      </p>
      <h2 className="text-white text-[30px] font-semibold animate-pulse">
        Let's connect!
      </h2>

      {/* Contact Links */}
      <div className="flex justify-between items-center mt-16 px-20">
      <div className="flex space-x-1">
        <a
          href="https://drive.google.com/file/d/1cvL5TGWQMxJYyZp56Y_yIDoT6pepaXia/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-[18px] text-[#D7D7D7] hover:text-white transition-colors duration-200 "
        >
          Resume
        </a>
        <img src={inclinedArrow} alt="Mail" className="w-3 " />
       
        </div>

       {/* Social Icons */}
<div className="flex space-x-6">
<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group">
        <img src={linkedinIcon} alt="LinkedIn" className="h-6 w-6 group-hover:hidden" />
        <img src={linkedinWhite} alt="LinkedIn White" className="h-6 w-6 hidden group-hover:inline" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group">
        <img src={githubIcon} alt="GitHub" className="h-6 w-6 group-hover:hidden" />
        <img src={githubWhite} alt="GitHub White" className="h-6 w-6 hidden group-hover:inline" />
      </a>
      <a href="mailto:youremail@example.com" className="group">
        <img src={emailIcon} alt="Email" className="h-6 w-6 group-hover:hidden" />
        <img src={mailWhite} alt="Email White" className="h-6 w-6 hidden group-hover:inline" />
      </a>
</div>

<img
          src={isHovered ? whatsappWhiteIcon : whatsappIcon}
          alt="WhatsApp"
          className="w-6 h-6 cursor-pointer ml-[80px]"
          onClick={openWhatsApp}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />

      </div>
      </div>
    </footer>
  );
};

export default Footer;
