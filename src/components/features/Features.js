import React, { useState } from "react";
import { Title } from "../ui/Title/Title";
import { featuresData } from "../../data/data";
import Card from "./Card";

// Add this line to initialize AOS

const Features = () => {
  const itemsPerPage = 8;
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
      className="w-full py-16 border-b-[1px] border-b-black mt-[100px] md:-mt-[200px] lg:-mt-[100px] xl:-mt-[300px]"
    >
      <Title title1={"Skills"} title2={"Skills"} />
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {paginatedData.map((item, index) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({
          length: Math.ceil(featuresData.length / itemsPerPage),
        }).map((_, index) => (
          <div
            className="flex items-center justify-center w-[80px] gap-3"
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
