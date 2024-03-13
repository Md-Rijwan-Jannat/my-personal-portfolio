import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Links() {
  return (
    <div>
      {" "}
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
          href="https://www.linkedin.com/in/md-rijwan-developer-3353362ba?trk=contact-infos"
          className="bannerIcon"
        >
          <FaLinkedinIn className="text-designColor" />
        </a>
      </div>
    </div>
  );
}
