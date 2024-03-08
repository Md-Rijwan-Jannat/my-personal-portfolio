import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center overflow-x-hidden">
      <img
        data-aos="fade-right"
        data-aos-once="true"
        className="w-[240px] h-[300px] lg:w-[350px] lg:h-[450px] relative mb-10"
        src={bannerImg}
        alt="bannerImg"
      />
    </div>
  );
};

export default RightBanner;
