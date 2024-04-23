import React, { useState } from "react";
import profile from "../../assets/images/profile.png";

const ContactLeft = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleTextVisibility = () => {
    setShowFullText(!showFullText);
  };

  const text =
    "I am a dedicated MERN Stack Developer with expertise in web development. I excel in building full-stack applications using MongoDB, Express, React, and Node.js, and I'm passionate about creating user-friendly, elegant web solutions. With a strong commitment to staying up-to-date with industry best practices, I'm ready to tackle new challenges and turn digital ideas into reality.";

  const displayedText = showFullText ? text : text.slice(0, 200);

  return (
    <div className="w-full lgl:w-[35%] h-full p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <div className="relative">
        <div>
          <img
            className="w-full h-64 object-cover rounded-lg mb-2"
            src={"https://i.ibb.co/2NJrdGL/1698420881184-01.jpg"}
            alt="contactImg"
          />
        </div>
        <img
          className="w-32 h-32 rounded-full object-cover ring-2 ring-gray-600 mb-2 absolute -bottom-7 left-3"
          src={profile}
          alt="contactImg"
        />
      </div>

      <div
        data-aos="fade-right"
        data-aos-once="true"
        className="flex flex-col gap-4"
      >
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
    </div>
  );
};

export default ContactLeft;
