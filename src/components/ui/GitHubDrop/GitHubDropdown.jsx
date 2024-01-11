import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

const GitHubDropdown = ({ icon1, icon2, icon3, gitHubLink1, gitHubLink2 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sec-center">
      <div
        className="relative z-10 block"
        id="dropdown"
        name="dropdown"
        onClick={toggleDropdown}
      >
        <div>{icon1}</div>
      </div>
      {isOpen && (
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="bg-[#202223] px-2 py-2 absolute z-20 w-[100px] md:w-28 mt-4 rounded-md space-y-3"
          ref={dropdownRef}
        >
          <a
            className="text-white text-[10px] font-semibold w-full hover:bg-gray-500 shadow shadow-gray-900 hover:bg-opacity-20 flex items-center p-1 rounded"
            href={`${gitHubLink1}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeDropdown} // Close the dropdown when this link is clicked
          >
            <span className="mr-2">{icon2}</span> Front-End
          </a>
          <a
            className="text-white text-[10px] font-semibold w-full hover:bg-gray-500 shadow shadow-gray-900 hover:bg-opacity-20 flex items-center p-1 rounded"
            href={`${gitHubLink2}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeDropdown} // Close the dropdown when this link is clicked
          >
            <span className="mr-2">{icon3}</span> Back-End
          </a>
        </div>
      )}
    </div>
  );
};

export default GitHubDropdown;
