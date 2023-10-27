import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center">
      <div className="wave">
        <div className="wave__container">
          <div className="wave__circle"></div>
          <div className="wave__circle"></div>
          <div className="wave__circle"></div>
        </div>
      </div>
      <img
        className="w-[300px] h-[300px] lg:w-[400px] lg:h-[450px] relative"
        src={bannerImg}
        alt="bannerImg"
      />
    </div>
  );
};

export default RightBanner;
