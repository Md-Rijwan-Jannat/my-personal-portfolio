import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Links from "../SocialMedia/Links";

const Footer = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-once="true"
      data-aos-easing="linear"
      data-aos-duration="500"
      className="w-full overflow-x-hidden py-20 h-auto border-b-[1px] border-b-black "
    >
      <div className="flex items-center gap-">
        <h2 className="bg-designColor text-sm lg:text-xl uppercase px-1 md:px-1 py-2 md:py-2 text-black font-[700]">
          {" "}
          Rijwan
        </h2>
        <h2
          className="text-sm lg:text-xl uppercase px-2 py-2
           text-designColor font-[700]"
        >
          Jannat
        </h2>
      </div>
      <div className="flex items-center justify-center w-full mt-5">
        <Links />
      </div>
    </div>
  );
};

export default Footer;
