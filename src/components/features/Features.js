import React, { useState } from "react";
import Card from "./Card";
import { featuresData } from "../../data/features";
import { Title } from "../ui/Title/Title";

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
      className="w-full py-16 border-b-[1px] border-b-black"
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
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-2 p-2 cursor-pointer mt-10 ${
              currentPage === index + 1 ? "text-blue-500" : "text-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Features;
