import React, { useState } from "react";
import point from "../assets/point.svg";
import macScreen from "../assets/macScreen.png";
import phoneMockup from "../assets/mockup.png";
import projectImage from "../assets/machinestalkscreen.png";
import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";
import arrowIcon from "../assets/inclineArrow.svg";
import blackArrow from "../assets/blackArrow.svg";
import demoInl from "../assets/demoInl.mov";
import porsche from "../assets/porsche.mov";
import matchmate from "../assets/matchmate.mov";
import PorscheImg from "../assets/porsche.png";
import img2 from "../assets/inl/2D.png";
import Modal from "./Modal";
import img3 from "../assets/inl/pan-after.png";
import img4 from "../assets/inl/pan-before.png";
import img5 from "../assets/inl/pathfinding_result.png";
import img6 from "../assets/inl/poi-info.png";
import img7 from "../assets/inl/saved-pois.png";
import img8 from "../assets/inl/search-bar.png";
import Porsche1 from "../assets/porsche/porsche1.png";
import Porsche2 from "../assets/porsche/porsche2.png";
import Porsche3 from "../assets/porsche/porsche3.png";
import matchmate1 from "../assets/matchmate/screenshot1.png";
import matchmate2 from "../assets/matchmate/screenshot2.png";
import matchmate3 from "../assets/matchmate/screenshot3.png";
import matchmate4 from "../assets/matchmate/screenshot4.png";
import matchmate5 from "../assets/matchmate/screenshot5.png";
import matchmate6 from "../assets/matchmate/screenshot6.png";
import matchmate7 from "../assets/matchmate/screenshot7.png";

import tripVision1 from "../assets/tripVision/1.png";
import tripVision2 from "../assets/tripVision/2.png";
import tripVision3 from "../assets/tripVision/3.png";
import tripVision4 from "../assets/tripVision/4.png";
import tripVision5 from "../assets/tripVision/5.png";
import tripVision6 from "../assets/tripVision/6.png";
import tripVision7 from "../assets/tripVision/8.png";
import tripVision8 from "../assets/tripVision/9.png";
import tripVision9 from "../assets/tripVision/10.png";
import tripVision10 from "../assets/tripVision/11.png";
import tripVision11 from "../assets/tripVision/12.png";
import tripVision12 from "../assets/tripVision/13.png";
import tripVision13 from "../assets/tripVision/14.png";
import tripVision14 from "../assets/tripVision/16.png";
import tripVision15 from "../assets/tripVision/18.png";
import tripVision16 from "../assets/tripVision/19.png";
import tripVision17 from "../assets/tripVision/20.png";
import tripVision18 from "../assets/tripVision/21.png";
import tripVision19 from "../assets/tripVision/22.png";
import tripVision20 from "../assets/tripVision/23.png";
import tripVision21 from "../assets/tripVision/25.png";
import tripVision22 from "../assets/tripVision/26.png";
import tripVision23 from "../assets/tripVision/27.png";
import tripVision24 from "../assets/tripVision/30.png";
import tripVision25 from "../assets/tripVision/31.png";
import tripVision26 from "../assets/tripVision/32.png";
import tripVision27 from "../assets/tripVision/33.png";
import tripVision28 from "../assets/tripVision/34.png";
import tripVision29 from "../assets/tripVision/39.png";
import tripVision30 from "../assets/tripVision/42.png";
import tripVision31 from "../assets/tripVision/43.png";


import aviaCare1 from "../assets/aviaCare/1.png";
import aviaCare2 from "../assets/aviaCare/2.png";
import aviaCare3 from "../assets/aviaCare/3.png";
import aviaCare4 from "../assets/aviaCare/4.png";
import aviaCare5 from "../assets/aviaCare/5.png";
import aviaCare6 from "../assets/aviaCare/6.png";
import aviaCare7 from "../assets/aviaCare/7.png";
import aviaCare8 from "../assets/aviaCare/8.png";
import aviaCare9 from "../assets/aviaCare/9.png";

import weather1 from "../assets/weatherApp/1.png";
import weather2 from "../assets/weatherApp/2.png";
import weather3 from "../assets/weatherApp/3.png";
import weather4 from "../assets/weatherApp/4.png";



const projects = [
  {
    name: "Porsche Showcase App",
    description: "This Porsche app showcases a collection of Porsche car models, allowing users to explore them in an interactive 3D experience. Users can view detailed car information, rotate models for a better look, and enjoy realistic engine sounds, creating an engaging experience.",
    image: PorscheImg,
    demo: porsche,
    githubLink: "https://github.com/KalechMed/Porsche",
    interfacesImages: [
      Porsche1,Porsche2,Porsche3,
    ],
    tags: ["iOS 17","Swift","SwiftUI", "Scenekit", "AVFoundation", "URLSession","Figma"],
    bulletPoints: [
      "Built using Swift and SwiftUI to ensure a smooth and native iOS user experience.",
      "Enabled interactive gestures like panning, so users can rotate and view models from multiple angles.",
      "Followed the MVVM architecture, creating a clean separation between UI and data handling for better code organization.",
    ],
  },
  {
    name: "Indoor Navigation Library",
    description:
      "The Indoor Navigation Library is an iOS framework that uses BLE beacons and map JSON to provide real-time indoor navigation in complex spaces like malls, airports, and offices.",
    image: projectImage,
    demo: demoInl,
    githubLink: "",
    interfacesImages: [
      projectImage,
      img2, img4, img5, img6, img7, img8, img3,
    ],
    tags: ["iOS 17","Swift", "SwiftUI", "Scenekit", "Ble Beacons", "DocC","swiftData", "Core location","Firebase","XCtest","SPM","Bitbucket","Figma"],
    bulletPoints: [
      "Enabled dynamic rendering of floors, walls, and places with SceneKit.",
      "Implemented A* and Kalman filter algorithms for optimized, accurate pathfinding in complex environments.",
      "Configured Bitbucket pipeline for automated builds and Firebase App Distribution to testers.",
      "Created detailed guides and tutorials with DocC documentation for easy integration.",
    ],
  },
  {
    name: "Matchmate App",
    description:
      "Created an iOS memory game, MatchMate, designed to challenge and improve memory skills through card-pairing. At the start of each game, players have 15 seconds to study the card pairs and memorize their positions. The cards then shuffle back, and the player must reorder them correctly from memory. With three attempts and a timer, the game calculates a score based on speed and accuracy.",
    image: matchmate2,
    demo: matchmate,
    githubLink: "https://github.com/KalechMed/MatchMate",
    interfacesImages: [
      matchmate1,
      matchmate2, matchmate3, matchmate4, matchmate5, matchmate6, matchmate7,
    ],
    tags: ["iOS 16","Swift", "SwiftUI", "swift algorithms", "swift data", "XCtest","CocoaPods","Figma"],
    bulletPoints: [
      "Developed the game using Swift and SwiftUI, with custom Swift algorithms to calculate scores based on accuracy and time.",
      "Implemented card gestures for smooth interactions, enhancing the overall user experience and gameplay."
    ],
  },
  {
    name: "TripVision App",
    description:
      "TripVision helps users organize every trip aspect, from reservations and accommodations to flights and itinerary details. The app also offers personalized recommendations for activities and destinations tailored to the user’s age, budget, location, and current weather.",
    image: tripVision1,
    demo: null,
    githubLink: "",
    interfacesImages: [
      tripVision1,
      tripVision2, tripVision3, tripVision4, tripVision5, tripVision6, tripVision7,tripVision8,tripVision9,tripVision10,tripVision11,tripVision12,tripVision13,tripVision14,tripVision15,tripVision16,tripVision17,tripVision18,tripVision19,tripVision20,tripVision21,tripVision22,tripVision23,tripVision24,tripVision25,tripVision26,tripVision27,tripVision28,tripVision29,tripVision30,tripVision31,
    ],
    tags: ["iOS 16","Swift", "SwiftUI", "rahletApi", "weatherApi", "XCtest","CocoaPods","alamofire"],
    bulletPoints: [
      "Built an iOS Trip Advisor app using SwiftUI and MVVM architecture",
      "Integrated Weather and Rehlat APIs with Alamofire, providing real-time weather updates and access to travel agency services.",
      "Developed a smart trip recommendation algorithm using Node.js and Express.js, improving personalized travel suggestions by 20%."
    ],
  },
  {
    name: "AviaCare App",
    description:
      "Aviacare is a mobile app designed to connect older adults with experienced caregivers for daily assistance. It simplifies the process for seniors to find the right care provider while also helping caregivers find suitable job opportunities.",
    image: aviaCare1,
    demo: null,
    githubLink: "",
    interfacesImages: [
      aviaCare1,
      aviaCare2, aviaCare3, aviaCare4, aviaCare5, aviaCare6, aviaCare7,aviaCare8,aviaCare9,
    ],
    tags: ["iOS 15","Swift", "SwiftUI", "paypalSDK", "googleSDK", "facebookSDK","CocoaPods","URLSession","Figma"],
    bulletPoints: [
      "Developed the iOS version using SwiftUI and MVVM architecture for a modern interface.",
      "Integrated URLSession for data handling from backend and real-time updates.",
      "Incorporated Facebook and Facebook SDK for easy account setup and social login."
    ],
  },
  {
    name: "Atmosphere App",
    description:
      "Atmosphere is a weather app that offers an enhanced user interface, providing accurate weather forecasts and keeping users safe with alerts for potential natural disasters, such as floods, earthquakes, and more.",
    image: weather3,
    demo: null,
    githubLink: "https://github.com/KalechMed/Atmosphere",
    interfacesImages: [
      weather1,
      weather2, weather3, weather4
    ],
    tags: ["iOS 17","Swift", "SwiftUI","weather API","URLSession","Figma"],
    bulletPoints: [
      "Designed the app's user interface using Figma, focusing on modern UI elements and incorporating visually appealing weather images for an immersive experience.",
      "integrated the Weather API using URLSession to deliver real-time weather data and disaster alerts to users.",
     
    ],
  },
];

const ProjectSection = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex < projects.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : projects.length - 1
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { name, description, image, demo, githubLink, interfacesImages, bulletPoints, tags } =
    projects[currentProjectIndex];

  return (
    <div className="flex flex-col pt-10 font-montserrat px-[160px] text-white">
      <div className="px-[90px]">
      {/* Header Section */}
      <div className="flex items-center">
        <img src={point} alt="Point" className="w-12" />
        <h1 className="text-[18px] font-medium ml-2">Projects</h1>
      </div>

      <p className="text-[#8A8A8A] text-[40px] font-regular mb-20 text-left">
        I'm passionate about <span className="text-white">iOS</span> development. Here are some projects I've created.
      </p>
      </div>
      {/* Project List */}
      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <img
          src={leftArrow}
          alt="Previous Project"
          onClick={handlePrevProject}
          className="absolute left-0 w-10 h-10 cursor-pointer hover:scale-110 transition-transform z-10"
        />

        {/* Project Display */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-full flex-shrink-0 flex flex-col items-center transition-transform duration-300 group"
              >
                <div className="relative w-[1178px] h-[700px] bg-cover bg-center transition-transform transform group-hover:-translate-y-1" style={{ backgroundImage: `url(${macScreen})` }}>
                  {/* Phone Mockup */}
                  <img
                    src={phoneMockup}
                    alt="Phone Mockup"
                    className="absolute inset-0 left-[100px] top-[120px] w-[265px] h-[535px] object-contain "
                  />

<img
  src={project.image}
  alt="App Preview"
  className={`absolute left-[116px] top-[134px] w-[234px] h-[507px] object-cover rounded-[30px] transition-opacity duration-300 ${
    project.demo ? 'group-hover:opacity-0' : ''
  }`}
/>


                  {/* Demo Preview as Video */}
                  {project.demo && (
  <video
    src={project.demo}
    alt="Demo Preview"
    className="absolute left-[110px] top-[130px] w-[240px] h-[521px] object-cover rounded-[30px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    autoPlay
    loop
    muted
  />
)}
                  <div className="absolute top-5 right-10 flex">
                    <div className="flex flex-col -space-y-1">
                      <a className="text-[14px] text-white font-regular"> iOS</a>
                      <a className="text-[10px] text-[#A9A9A9] font-regular"> version</a>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="absolute left-[450px] top-[160px] w-[650px] text-left">
                    <h2
                      className="text-[24px] font-bold text-white"
                      style={{
                        textShadow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)",
                      }}
                    >
                      {project.name}
                    </h2>

                    <p className="text-[18px] font-regular text-white mt-8">{project.description}</p>

                    {/* Bullet Points */}
                    <ul className="list-disc list-inside mt-4 text-[16px] font-regular text-[#CCCCCC] space-y-1">
                      {project.bulletPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {tags.map((tag, index) => (
                        <span key={index} className="bg-[#1E1E1E] text-[#A3A3A3] px-2 py-1 rounded-lg text-[14px]">
                          {tag}
                        </span>
                      ))}
                    </div>

                   
                    <div className="flex items-center justify-center space-x-4 mt-8">
                      {interfacesImages.length > 0 && (
                        <button
                          onClick={openModal}
                          className="px-12 py-2 rounded-lg font-normal text-black bg-gradient-to-r from-[#D9D9D9] via-[#FFFFFF] to-[#ACACAC] hover:from-[#ACACAC] hover:via-[#D9D9D9] hover:to-[#FFFFFF] transition"
                        >
                          Interfaces
                        </button>
                      )}
                      {githubLink && (
  <a
    href={githubLink}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center px-6 py-2 bg-[#1D1D1D] text-white font-normal hover:bg-[#333333] rounded-lg transition"
  >
    GitHub
    <img src={arrowIcon} alt="GitHub Link" className="w-3 h-3 inline-block ml-2" />
  </a>
)}

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <img
          src={rightArrow}
          alt="Next Project"
          onClick={handleNextProject}
          className="absolute right-0 w-10 h-10 cursor-pointer hover:scale-110 transition-transform z-10"
        />
      </div>

      {/* Modal */}
      {isModalOpen && <Modal interfacesImages={interfacesImages} onClose={closeModal} />}
      <span className="text-white font-semibold text-[16px] flex justify-center mt-6 ">{currentProjectIndex + 1}/{projects.length}</span>
    </div>
  );
};

export default ProjectSection;
