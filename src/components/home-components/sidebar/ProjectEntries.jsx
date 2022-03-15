import React from "react";
import NewProjectEntry from "./NewProjectEntry";
import ProjectEntry from "./ProjectEntry";

const ProjectEntries = ({ projectListToShow }) => {
  if (projectListToShow.length == 0) {
    return (
      <div>
        <NewProjectEntry />
        <div className="project-catalog__empty-entries-container">
          <h3 className="text-center">
            Estamos buscando los proyectos de investigación en los que estás
            matriculado
          </h3>
          <h5 className="text-center">
            Click en el botón de arriba para crear uno nuevo
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
        <NewProjectEntry /> hacer distinción si es uin lider de inv, mostrar el
        botón
        {projectListToShow.map((project) => (
          <ProjectEntry />
        ))}
      </div>
    );
  }
};

export default ProjectEntries;
