import React from "react";
import CloseIcon from "../assets/Close.svg";

const CloseButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-0 right-2 p-2 text-white text-4xl font-bold"
  >
    <img src={CloseIcon} alt="Close" className="w-8 h-8" />
  </button>
);

export default CloseButton;
