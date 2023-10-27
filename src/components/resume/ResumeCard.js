import React from "react";

const ResumeCard = ({ education }) => {
  const { name, title, type, result, des } = education;
  return (
    <div className="w-full">
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              {name}
            </h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
              {title}
            </p>
          </div>
          <div className="space-y-3">
            <p className="px-4 py-2 text-green-400 bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow shadow-green-300 text-sm font-medium">
              {type}
            </p>
            <p className="px-4 py-2 text-blue-400 bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow shadow-blue-300 text-sm font-medium">
              {result}
            </p>
          </div>
        </div>
        <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
