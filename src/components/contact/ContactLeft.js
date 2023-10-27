import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import profile from "../../assets/images/profile.jpg";

const ContactLeft = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleTextVisibility = () => {
    setShowFullText(!showFullText);
  };

  const text =
    "I am a dedicated MERN Stack Developer with expertise in web development. I excel in building full-stack applications using MongoDB, Express, React, and Node.js, and I'm passionate about creating user-friendly, elegant web solutions. With a strong commitment to staying up-to-date with industry best practices, I'm ready to tackle new challenges and turn digital ideas into reality.";

  const displayedText = showFullText ? text : text.slice(0, 200);

  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0a0b0b] to-[#0b0e11] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <div className="relative">
        <div>
          <img
            className="w-full h-64 object-cover rounded-lg mb-2"
            src={"https://i.ibb.co/2NJrdGL/1698420881184-01.jpg"}
            alt="contactImg"
          />
        </div>
        <img
          className="w-24 h-24 rounded-full object-cover ring-2 ring-gray-600 mb-2 absolute -bottom-7 left-3"
          src={profile}
          alt="contactImg"
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">MD Rijwan Jannat</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          {displayedText}
          {text.length > 200 && !showFullText && (
            <span
              className="text-lightText cursor-pointer"
              onClick={toggleTextVisibility}
            >
              ...See More
            </span>
          )}
          {showFullText && (
            <span>
              <div
                className="text-lightText cursor-pointer"
                onClick={toggleTextVisibility}
              >
                Hide...
              </div>
            </span>
          )}
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">(+880) 1797660947</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">rijwanjannat36@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/profile.php?id=100086218014706"
            className="bannerIcon"
          >
            <FaFacebookF />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/rijwanjannat/"
            className="bannerIcon"
          >
            <FaInstagram />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/rijwanjannat/"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
