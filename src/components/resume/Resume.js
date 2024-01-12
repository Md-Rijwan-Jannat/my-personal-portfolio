import React from "react";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import Experience from "./Experience";
import { Title } from "../ui/Title/Title";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Resume = () => {
  return (
    <section id="resume">
      <div className="flex justify-center pt-16 items-center text-center">
        <Title title1={"About"} title2={"About"}></Title>
      </div>
      <Tabs
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className={"overflow-x-hidden w-full"}
      >
        <TabList className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Tab className="border border-gray-600 rounded-md font-semibold py-4 px-2 mx-1 text-center cursor-pointer hover:text-black hover:bg-gray-200 active:bg-gray-300">
            <div>Education</div>
          </Tab>
          <Tab className="border border-gray-600 rounded-md font-semibold py-4 px-2 mx-1 text-center cursor-pointer hover:text-black hover:bg-gray-200 active:bg-gray-300">
            <div>Professional Skills</div>
          </Tab>
          <Tab className="border border-gray-600 rounded-md font-semibold py-4 px-2 mx-1 text-center cursor-pointer hover:text-black hover:bg-gray-200 active:bg-gray-300">
            <div>Experience</div>
          </Tab>
          <Tab className="border border-gray-600 rounded-md font-semibold py-4 px-2 mx-1 text-center cursor-pointer hover:text-black hover:bg-gray-200 active:bg-gray-300">
            <div>Certificate</div>
          </Tab>
        </TabList>

        <TabPanel>
          <Education />
        </TabPanel>
        <TabPanel>
          <Skills />
        </TabPanel>
        <TabPanel>
          <Experience />
        </TabPanel>
        <TabPanel>
          <Achievement />
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default Resume;
