import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { skillsData } from "../../data/skillsData";

// ... (other imports)

const Skills = () => {
  const [frontend, setFrontend] = useState([]);
  const [backend, setBackend] = useState([]);

  useEffect(() => {
    const frontendData = skillsData[0].frontendData;
    const backendData = skillsData[0].backendData;
    setFrontend(frontendData);
    setBackend(backendData);
  }, []);
  console.log(skillsData);

  console.log(frontend);
  console.log(backend);
  return (
    <motion.div
      data-aos="fade-down"
      data-aos-once="true"
      data-aos-easing="linear"
      data-aos-duration="1000"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 overflow-x-hidden"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Basic Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Front-End Development Skills
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          {frontend.map((data) => (
            <div key={data.id} className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">{data.name}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  style={{ width: `${data.percent}` }}
                  className={` h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}
                >
                  <span className="absolute -top-7 right-0">
                    {data.percent}
                  </span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Back-End Development Skills
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          {backend.map((data) => (
            <div key={data.id} className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">{data.name}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  style={{ width: `${data.percent}` }}
                  className={`h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}
                >
                  <span className="absolute -top-7 right-0">
                    {data.percent}
                  </span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
