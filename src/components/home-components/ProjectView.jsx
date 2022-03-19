import React from "react";
import { useSelector } from "react-redux";

const ProjectView = () => {
  const { activeProjectToShow } = useSelector((state) => state.projects);

  return (
    <div className="project-view__main-container">
      {/* // --> Guia, luego se borra */}
      {JSON.stringify(activeProjectToShow)}

      {/* // --> Aquí hacer petición para solicitar todos los investigadores de un proyecto de investigación */}
    </div>
  );
};

export default ProjectView;
