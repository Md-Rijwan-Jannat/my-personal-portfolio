import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "MERN Stack Developer.",
      "Front-End Developer.",
      "Back-End Developer.",
      "React / Next.js develoepr.",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Rijwan Jannat</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          "As a MERN stack developer, I have the privilege of creating digital
          wonders. My code serves as the brush, delicately crafting web
          experiences that both innovate and inspire. Persistence is my guiding
          light, for it's through dedication that I mold the future. I continue
          to code, I continue to evolve, and with each line, my journey adds to
          the ever-changing canvas of possibilities."
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
