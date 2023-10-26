import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
const Banner = () => {
  return (
    <section
      id="home"
      className="my-10 flex flex-col lg:flex-row gap-5 justify-between items-center"
    >
      <RightBanner />
      <LeftBanner />
    </section>
  );
};

export default Banner;
