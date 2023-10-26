import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import GitHubDropdown from "../ui/GitHubDrop/GitHubDropdown";
import SliderModal from "../ui/SliderModal/SliderModal";

const ProjectsCard = ({ project, title, des, src }) => {
  const { id, name, image, images, des1, des2, des3, link1, link2, link3 } =
    project;

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const closeToggleModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="w-full p-4 xl:px-12 h-auto rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div
        onClick={toggleModal}
        className="w-full h-60 bg-black bg-transparent overflow-hidden rounded-lg"
      >
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer rounded-lg"
          src={image}
          alt="home-page"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {name}
            </h3>
            <div className="flex gap-2">
              <button className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <GitHubDropdown
                  icon1={<BsGithub />}
                  icon2={<BsGithub />}
                  icon3={<BsGithub />}
                  gitHubLink1={link1}
                  gitHubLink2={link2}
                />
              </button>
              <button className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <a href={`${link3}`} target="_blank" rel="noopener noreferrer">
                  {" "}
                  <FaGlobe />
                </a>
              </button>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-400 hover:text-decoration-300 duration-300">
            {des1}
          </p>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-400 hover:text-decoration-300 duration-300">
            {des2}
          </p>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-400 hover:text-decoration-300 duration-300">
            {des3}
          </p>
        </div>
      </div>
      <SliderModal
        images={images}
        isOpen={isOpen}
        closeToggleModal={closeToggleModal}
      />
    </div>
  );
};

export default ProjectsCard;
