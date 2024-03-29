import React, { useState } from "react";
import { Title } from "../ui/Title/Title";
import { featuresData } from "../../data/data";
import Card from "./Card";

const Features = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = featuresData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section
      id="features"
      className="w-full py-16 border-b-[1px] border-b-black md:h-[1400px] xl:h-[1200px] md:relative"
    >
      <Title title1={"Features and Skills"} title2={"Features and Skills"} />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {paginatedData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({
          length: Math.ceil(featuresData.length / itemsPerPage),
        }).map((_, index) => (
          <div
            className="flex items-center justify-center w-[100px] gap-3 md:gap-5"
            key={index}
            onClick={() => handlePageChange(index + 1)}
          >
            <button
              className={`w-10 h-10 cursor-pointer mt-10 rounded-full bg-[#22222f] ${
                currentPage === index + 1
                  ? "text-[#A24E20] font-bold ring-2 ring-[#a24e20]"
                  : "text-gray-100"
              }`}
            >
              {index + 1}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
