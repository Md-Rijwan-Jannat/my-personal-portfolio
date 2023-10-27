import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { achievementData } from "../../data/education";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className=""
    >
      <div className="py-5 lgl:pt-16 font-titleFont flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
      </div>
      <div className="mt-6 lgl:mt-7 w-full h-full border-l-[6px] border-l-black border-opacity-30">
        <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {achievementData.map((data) => (
            <ResumeCard key={data.id} education={data}></ResumeCard>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
