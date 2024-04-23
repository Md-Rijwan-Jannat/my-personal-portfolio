import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ item: { title, des, icon } }) => {
  return (
    <div
      data-aos="zoom-in-down"
      data-aos-delay="200"
      data-aos-once="true"
      data-aos-mirror="false"
      className="w-full border-2 border-designColor px-3 py-4 rounded-lg shadow-shadowTwo flex items-center group hover:bg-gradient-to-b hover:from-black hover:to-[#1e202484] transition-colors duration-100 group"
    >
      <div className="h-[220px] md:h-[190px] overflow-y-hidden">
        <div className="flex h-full flex-col translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex flex-row gap-2 justify-start items-center mb-3">
            {icon ? (
              <span className="text-2xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
            <h2 className="text-sm md:text-lg font-bold text-gray-300">
              {title}
            </h2>
          </div>
          <div className="flex flex-col">
            <p className="base text-sm">{des}</p>
            <span className="text-2xl mt-7 text-designColor">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
