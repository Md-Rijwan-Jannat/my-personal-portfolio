import React, { useState } from "react";
import ProjectsCard from "./ProjectsCard";
import { Title } from "../ui/Title/Title";
import { projects } from "../../data/projects";

const Projects = () => {
  const projectsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleLoadLess = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div
      id="projects"
      className="w-full py-5 pt-10 border-b-[1px] border-b-black relative xl:h-[1350px]"
    >
      <div className="flex justify-center items-center text-center">
        <Title title1={"My Projects"} title2={"My Projects"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {currentProjects.map((project) => (
          <ProjectsCard key={project.id} project={project}></ProjectsCard>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {currentPage > 1 && (
          <button
            className="mr-4 bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleLoadLess}
          >
            Back
          </button>
        )}
        {currentPage < totalPages && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
