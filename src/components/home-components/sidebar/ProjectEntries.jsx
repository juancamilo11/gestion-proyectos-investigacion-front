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
        {/* {auth.role === "RESEARCH_LEADER" && <NewProjectEntry />} */}

        {/* //---------PRUEBA_______ */}
        {auth.role === "RESEARCH_LEADER" && <NewProjectEntry />}
        {/* //---------PRUEBA_______ */}
        {projectListToShow.map((project) => (
          <ProjectEntry {...project} />
        ))}
      </div>
    );
  }
};

export default ProjectEntries;
