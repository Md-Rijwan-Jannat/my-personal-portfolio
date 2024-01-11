import React from "react";

const FooterBottom = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full pb-10">
      <p className="text-center text-gray-500 text-base">
        © {currentYear} All rights reserved by Md Rijwan Jannat
      </p>
    </div>
  );
};

export default FooterBottom;
