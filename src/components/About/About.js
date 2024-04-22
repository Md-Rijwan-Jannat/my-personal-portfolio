import React from "react";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import Experience from "./Experience";
import { Title } from "../ui/Title/Title";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const About = () => {
  return (
    <section id="about">
      <div className="flex justify-center pt-16 items-center text-center">
        <Title title1={"About"} title2={"About"} />
      </div>
      <Tabs
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-once="true"
        className="overflow-x-hidden w-full"
        selectedClassName="bg-designColor"
      >
        <TabList className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Tab className="border border-gray-600 rounded-md font-semibold py-4 px-2 mx-1 text-center cursor-pointer hover:text-black hover:bg-designColor">
            <div>Education</div>
          </Tab>
          <Tab className="border border-gray-600 rounded-md font-semibold py-4 px-2 mx-1 text-center cursor-pointer hover:text-black hover:bg-designColor">
            <div>Professional Skills</div>
          </Tab>
          <Tab className="border border-gray-600 rounded-md font-semibold py-4 px-2 mx-1 text-center cursor-pointer hover:text-black hover:bg-designColor">
            <div>Experience</div>
          </Tab>
          <Tab className="border border-gray-600 rounded-md font-semibold py-4 px-2 mx-1 text-center cursor-pointer hover:text-black hover:bg-designColor">
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

export default About;
