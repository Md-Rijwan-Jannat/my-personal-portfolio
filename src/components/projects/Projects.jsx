import React from "react";
import ProjectsCard from "./ProjectsCard";
import { Title } from "../ui/Title/Title";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full py-5 pt-10 border-b-[1px] border-b-black relative"
    >
      <div className="flex justify-center items-center text-center">
        <Title title1={"My Projects"} title2={"My Projects"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
       {
          projects.map(project=>(
              <ProjectsCard
                   key={project.id}
                   project={project}
              ></ProjectsCard>
            ))
       }
      </div>
    </div>
  );
};

export default Projects;
