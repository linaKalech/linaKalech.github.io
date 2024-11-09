import React from 'react';
import CloseIcon from '../assets/close.svg';

const Modal = ({ interfacesImages, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-[10px]"
      onClick={onClose} // Close modal when clicking on the background
    >
      <div
        className="relative bg-[#1E1E1E] p-8 rounded-[20px] max-w-[1600px] max-h-[100vh] overflow-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the modal content
      >
        {/* Close button with icon */}
        <div
  onClick={onClose}
  role="button"
  tabIndex="0"
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onClose();
    }
  }}
  className="absolute top-0 right-2 p-2 text-white text-4xl font-bold cursor-pointer"
>
  <img src={CloseIcon} alt="Close" className="w-8 h-8" /> {/* Replace with your close icon */}
</div>


        {/* Container for interfaces */}
        <div className="grid grid-cols-4 gap-x-20 gap-y-16 mt-4 max-h-[70vh] overflow-auto">
          {interfacesImages.map((image, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={image}
                alt={`Project Interface ${index + 1}`}
                className="w-full h-[500px] object-contain" // Fixed size for each image
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
