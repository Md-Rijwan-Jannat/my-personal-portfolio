import React from "react";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";
import Media from "./Media";
import resume from "../../assets/Resume/Fullstack developer.pdf";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineDownload,
} from "react-icons/ai";

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
    <div
      className="w-full lgl:w-1/2 flex flex-col gap-20 z-10 overflow-x-hidden"
      data-aos="fade-left"
      data-aos-once="true"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="800"
    >
      <div className=" w-full rounded-lg">
        <div className="max-w-[1300px] h-10 relative  border-b border-gray-600">
          <span className="w-3 absolute  top-3 rounded-full left-4 h-3 bg-red-600"></span>
          <span className="w-3 absolute  top-3 rounded-full left-8 h-3 bg-yellow-600"></span>
          <span className="w-3 absolute  left-12 rounded-full h-3 top-3 bg-green-600"></span>
        </div>
        <div className="w-full px-4 py-4 flex flex-col items-center gap-4 justify-center">
          <h1 className="md:text-xl text-sm font-semibold flex flex-col  text-center  w-full md:text-start">
            <div className="text-xs text-start w-full md:text-sm font-semibold mb-4">
              <span>{"<"}</span>
              <span className="text-red-400">{"name"}</span>
              <span className="pl-2 text-green-400">{"className"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-designColor ">{`
            text-white text-lg`}</span>
              <span>{">"}</span>
              <br></br>
              <span className="text-lg text-white">MD Rijwan Jannat</span>
              <br></br>
              <span>{"</"}</span>
              <span className="text-red-400">{"name"}</span>
              <span>{">"}</span>
            </div>
            <div className="text-xs text-start md:text-sm font-semibold">
              <span>{"<"}</span>
              <span className="text-red-400">{"passionate"}</span>
              <span className="pl-2 text-green-400">{"className"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-designColor ">{`'text-xl font-semibold flex    w-full md:text-start'`}</span>
              <span>{">"}</span>
            </div>
            <div className="flex">
              <p className="text-white"> Hello: I am</p>
              <span className="text-green-500 px-2">{text}</span>
            </div>
            <div className="text-xs md:text-sm text-start font-semibold">
              <span>{"</"}</span>
              <span className="text-red-400">{"passionate"}</span>

              <span>{">"}</span>
            </div>
          </h1>
          <p className="w-full text-start md:text-start text-xs  md:text-sm text-gray-300 font-semibold">
            <div className="text-xs md:text-sm font-semibold">
              <span>{"<"}</span>
              <span className="text-red-400">{"objective"}</span>
              <span className="pl-2 text-green-400">{"className"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-designColor">{`'text-sm'`}</span>
              <span>{">"}</span>
            </div>
            As a MERN stack developer, I craft digital marvels with my code,
            forging web experiences that inspire innovation. Persistence is my
            compass, guiding me to shape the future. I code, I evolve, and with
            each line, I paint on the canvas of endless possibilities. 🚀🎨💻
            <div className="text-xs md:text-sm font-semibold">
              <span>{"</"}</span>
              <span className="text-red-400">{"objective"}</span>

              <span>{">"}</span>
            </div>
          </p>
          <div className="hidden md:flex justify-start w-full items-center gap-2">
            <div className="text-xs  md:text-sm font-semibold">
              <span>{"<"}</span>
              <span className="text-blue-400">{"SocialButtons"}</span>
              <span className="pl-2 text-green-400">{"className"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-designColor">{`'icons'`}</span>
              <span>{">"}</span>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-4 ">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/md-rijwan-developer-3353362ba?trk=contact-info"
              >
                <AiFillLinkedin className=" text-3xl md:text-2xl text-gray-200  hover:text-red-400 cursor-pointer" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/mdrijwanjannat"
              >
                <AiFillFacebook className="text-3xl md:text-2xl cursor-pointer text-gray-200  hover:text-red-400" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Md-Rijwan-Jannat"
              >
                <AiFillGithub className="text-3xl md:text-2xl text-gray-200  hover:text-red-400 cursor-pointer" />{" "}
              </a>
            </div>
            <div className="text-xs md:text-sm font-semibold">
              <span>{"</"}</span>
              <span className="text-blue-400">{"SocialButtons"}</span>

              <span>{">"}</span>
            </div>
          </div>
        </div>
        <div className="flex pb-4 flex-col md:flex-row items-center">
          <div className="text-xs flex justify-start md:justify-normal md:w-fit w-full md:text-sm  ml-4 font-semibold">
            <span>{"<"}</span>
            <span className="text-red-400">{"a"}</span>

            <span className="pl-2 text-green-400">{"href"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-designColor">{`'../rijwan jannat resume.pdf'`}</span>
            <span className="pl-2 text-green-400">{"downlaod"}</span>

            <span>{">"}</span>
          </div>
          <a
            href={resume}
            className="flex  justify-start md:justify-normal md:w-fit w-full ml-4 gap-6 md:gap-4 "
            download
          >
            <span className="text-xs md:text-sm font-semibold w-fit flex animate-pulse items-center gap-2 py-2 cursor-pointer text-white">
              <AiOutlineDownload className="font-semibold md:text-2xl" />
              Download Resume
            </span>
          </a>
          <div className="text-xs flex justify-start md:justify-normal md:w-fit w-full md:text-sm ml-4  font-semibold">
            <span>{"</"}</span>
            <span className="text-red-400">{"a"}</span>

            <span>{">"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
