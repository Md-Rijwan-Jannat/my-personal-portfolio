import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
const Banner = () => {
  return (
    <section
      id="home"
      className="py-10 w-full flex flex-col lg:flex-row gap-5 justify-around items-center"
    >
      <RightBanner />
      <LeftBanner />
    </section>
  );
};

export default Banner;
