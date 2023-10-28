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
    <div className="w-full lgl:w-1/2 flex flex-col gap-20 z-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl lg:text-5xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Rijwan Jannat</span>
        </h1>
        <h2 className="text-xl lg:text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#C0C0C0"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          As a MERN stack developer, I craft digital marvels with my code,
          forging web experiences that inspire innovation. Persistence is my
          compass, guiding me to shape the future. I code, I evolve, and with
          each line, I paint on the canvas of endless possibilities. 🚀🎨💻
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
