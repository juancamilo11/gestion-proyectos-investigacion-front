import React from "react";
import { useSelector } from "react-redux";
import NewProjectEntry from "./NewProjectEntry";
import ProjectEntry from "./ProjectEntry";

const ProjectEntries = ({ projectListToShow }) => {
  const { auth } = useSelector((state) => state);
  if (projectListToShow.length == 0) {
    return (
      <div>
        {auth.role === "RESEARCH_LEADER" && <NewProjectEntry />}
        <div className="project-catalog__empty-entries-container">
          <h3 className="text-center">
            {auth.role === "RESEARCH_LEADER"
              ? "Estamos buscando los proyectos de investigación que estás liderando"
              : "Estamos buscando los proyectos de investigación en los que estás matriculado"}
          </h3>
          <h5 className="text-center">
            {auth.role === "RESEARCH_LEADER"
              ? "Click en el botón de arriba para crear uno nuevo"
              : "Debes esperar que algún líder de investigación te agregue a un proyecto"}
          </h5>
          <img
            src={
              process.env.PUBLIC_URL + "/assets/img/loader/projects-loading.svg"
            }
            alt="No results found"
            className="project-catalog__empty-entries-img"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="project-catalog__entries">
        {auth.role === "RESEARCH_LEADER" && <NewProjectEntry />}
        {projectListToShow.map((project) => (
          <ProjectEntry {...project} />
        ))}
      </div>
    );
  }
};

export default ProjectEntries;
