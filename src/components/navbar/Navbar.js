import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const [fadeRight, setFadeRight] = useState(false);

  const [backgroundTransition, setBackgroundTransition] =
    useState("background 0.4s");

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarBackground("bg-bodyColor");
      setBackgroundTransition("background 0.4s");
    } else {
      setNavbarBackground("transparent");
      setBackgroundTransition("background 0.4s");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full h-[130px] px-2 py-5 lg:px-5 sticky top-0 z-50 mx-auto flex justify-between items-center font-titleFont ${navbarBackground}`}
      style={{
        transition: backgroundTransition,
      }}
    >
      <div className="flex items-center gap-">
        <h2 className="bg-white text-lg lg:text-2xl uppercase px-1 md:px-1 py-2 md:py-3 text-black font-[700]">
          {" "}
          Rijwan
        </h2>
        <h2 className="text-lg lg:text-2xl uppercase px-2 py-3 text-designColor font-[700]">
          Jannat
        </h2>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li className="link-btn" key={_id}>
              <Link
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={() => setActiveLink(link)}
                className={
                  activeLink === link
                    ? "active border-t-4 border-designColor"
                    : ""
                }
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div
            data-aos="fade-right"
            className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-bodyColor p-4 scrollbar-hide"
          >
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                  A developer is a tech professional who writes code and creates
                  software applications and websites.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li key={item._id} className="link-btn">
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onSetActive={() => setActiveLink(item.link)}
                      className={activeLink === item.link ? "active" : ""}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/profile.php?id=100086218014706"
                    className="bannerIcon"
                  >
                    <FaFacebookF className="text-designColor" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/rijwanjannat/"
                    className="bannerIcon"
                  >
                    <FaInstagram className="text-designColor" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/rijwanjannat/"
                    className="bannerIcon"
                  >
                    <FaLinkedinIn className="text-designColor" />
                  </a>
                </div>
              </div>
              <span
                data-aos="fade-right"
                onClick={() => {
                  setFadeRight(true);
                  setTimeout(() => {
                    setShowMenu(false);
                    setFadeRight(false);
                  }, 300); // Adjust the duration to match your CSS animation duration
                }}
                className="absolute top-4 right-4 text-gray-400 hover-text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
