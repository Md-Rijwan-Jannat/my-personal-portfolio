import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import GitHubDropdown from "../ui/GitHubDrop/GitHubDropdown";
import SliderModal from "../ui/SliderModal/SliderModal";

const ProjectsCard = ({ project, title, des, src }) => {
  const { name, image, images, details, link1, link2, link3, technology } =
    project;

  const [isOpen, setIsOpen] = useState(false);
  const [showFullDetails, setShowFullDetails] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const closeToggleModal = () => {
    setIsOpen(false);
  };

  const toggleShowFullDetails = () => {
    setShowFullDetails(!showFullDetails);
  };

  const truncatedDetails = details.slice(0, 110);

  // Predefined colors for technology items
  const technologyColors = [
    "#FF5733", // Red
    "#FFBD33", // Yellow
    "#33FF57", // Green
    "#3366FF", // Blue
    "#B233FF", // Purple
    "#FF33FF", // Pink
    "#33FFFF", // Cyan
  ];

  return (
    <div
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-easing="linear"
      data-aos-duration="900"
      className="w-full overflow-x-hidden p-4 h-auto rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
    >
      <div
        onClick={toggleModal}
        className="w-full h-60 bg-black bg-transparent overflow-hidden rounded-lg"
      >
        <img
          className="w-full h-full object-fill group-hover:scale-110 duration-300 cursor-pointer rounded-lg"
          src={image}
          alt="home-page"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-cyan-100 font-normal">
              {name}
            </h3>
            <div className="flex gap-2">
              <button className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-cyan-100 text-designColor duration-300 cursor-pointer">
                <GitHubDropdown
                  icon1={<BsGithub />}
                  icon2={<BsGithub />}
                  icon3={<BsGithub />}
                  gitHubLink1={link1}
                  gitHubLink2={link2}
                />
              </button>
              <button className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-designColor hover:text-cyan-100 duration-300 cursor-pointer">
                <a href={`${link3}`} target="_blank" rel="noopener noreferrer">
                  {" "}
                  <FaGlobe />
                </a>
              </button>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-400 hover:text-decoration-300 duration-300">
            {showFullDetails ? details : truncatedDetails}{" "}
            {details.length > 110 && (
              <span
                className="text-cyan-100 cursor-pointer"
                onClick={toggleShowFullDetails}
              >
                {showFullDetails ? " See Less" : " See More"}
              </span>
            )}
          </p>
        </div>
      </div>
      <SliderModal
        images={images}
        isOpen={isOpen}
        closeToggleModal={closeToggleModal}
      />
      <div className="mt-5 flex flex-wrap gap-3 md:gap-5">
        {technology.map((item, index) => (
          <div
            className=""
            key={index}
            style={{ color: technologyColors[index % technologyColors.length] }} // Assign colors from the predefined list
          >
            {"#" + item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
