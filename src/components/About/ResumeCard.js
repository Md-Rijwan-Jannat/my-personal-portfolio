import React from "react";
import { FaGlobe } from "react-icons/fa";

const ResumeCard = ({ education }) => {
  const { name, title, type, result, des } = education;
  return (
    <div
      data-aos="fade-down"
      data-aos-once="true"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="w-full overflow-x-hidden"
    >
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              {name}
            </h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
              {title}
            </p>

            {education?.link && (
              <a
                href={`${education?.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm mt-2 text-gray-400 group-hover:text-white duration-300 hover:text-blue-400"
              >
                <button className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                  <FaGlobe />
                </button>
                {education.link}
              </a>
            )}
          </div>
          <div className="space-y-2">
            <p className="px-4 py-2 text-green-400 bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
              {type}
            </p>
            <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
              {result}
            </p>
          </div>
        </div>
        {education?.image && (
          <img
            className="rounded w-full h-full"
            src={`${education.image}`}
            alt="certificate"
          />
        )}
        <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
