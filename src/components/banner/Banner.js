import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
import bannerVideos from "../../assets/videos/banner.mp4";

const Banner = () => {
  const videoUrl = bannerVideos;

  return (
    <section id="home" className="w-full">
      {/* Create a div for the video background */}
      <div
        className=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        {/* Place the video inside the div */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "auto",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>

      <div className="-mb-20 relative py-10 w-full flex flex-col lg:flex-row gap-5 justify-around items-center">
        <RightBanner />
        <LeftBanner />
      </div>
    </section>
  );
};

export default Banner;
