import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import avatar from '../assets/avatar.png';
import icon1 from '../assets/linkedin.svg';
import icon2 from '../assets/github.svg';
import icon3 from '../assets/mail.svg';
import linkedinWhite from '../assets/linkedinWhite.svg';
import githubWhite from '../assets/githubWhite.svg';
import mailWhite from '../assets/mailWhite.svg';

const Header = () => {
  const location = useLocation();
  const isWorkActive = location.pathname === '/';

  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <header className="flex items-center justify-between p-6 px-40 bg-transparent fixed w-full z-50">
      <img src={avatar} alt="Avatar" className="w-16 h-16 rounded-full" />

      <div className="relative flex space-x-4 pr-6 gap-x-4 pl-2 py-2 bg-[#2D2D2D]/60 rounded-[30px] w-fit mx-auto border border-[#313131] backdrop-blur-md">
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 w-[38%] h-[80%] rounded-[20px] bg-[#2D2D2D] transition-all duration-300 ease-in-out ${
            isWorkActive ? 'left-[8%]' : 'left-[54%]'
          }`}
        ></div>

        <NavLink
          to="/"
          className={`relative z-10 pr-3 pl-2 py-2 text-sm font-medium rounded-[20px] ${
            isWorkActive ? 'text-white glow-effect' : 'text-[#C1BFBF]'
          }`}
        >
          Work
        </NavLink>
        <NavLink
          to="/info"
          className={`relative z-10 px-3 py-2 text-sm font-medium rounded-[20px] ${
            !isWorkActive ? 'text-white glow-effect' : 'text-[#C1BFBF]'
          }`}
        >
          Info
        </NavLink>
      </div>

      <div className="flex items-center space-x-4">
        <a
          href="https://www.linkedin.com/in/medkalech/" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={hoveredIcon === 'linkedin' ? linkedinWhite : icon1}
            alt="LinkedIn"
            className="w-6 h-6 cursor-pointer"
            onMouseEnter={() => setHoveredIcon('linkedin')}
            onMouseLeave={() => setHoveredIcon(null)}
          />
        </a>
        <a
          href="https://github.com/KalechMed"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={hoveredIcon === 'github' ? githubWhite : icon2}
            alt="GitHub"
            className="w-6 h-6 cursor-pointer"
            onMouseEnter={() => setHoveredIcon('github')}
            onMouseLeave={() => setHoveredIcon(null)}
          />
        </a>
        <a
          href="mailto:medkalech@gmail.com" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={hoveredIcon === 'mail' ? mailWhite : icon3}
            alt="Mail"
            className="w-6 h-6 cursor-pointer"
            onMouseEnter={() => setHoveredIcon('mail')}
            onMouseLeave={() => setHoveredIcon(null)}
          />
        </a>

        <a
  href="https://drive.google.com/file/d/1cvL5TGWQMxJYyZp56Y_yIDoT6pepaXia/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#D7D7D7] hover:text-white font-medium"
>
  Resume
</a>

      </div>
    </header>
  );
};

export default Header;