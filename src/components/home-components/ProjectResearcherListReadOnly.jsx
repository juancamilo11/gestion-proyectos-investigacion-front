import React from "react";
import ErrorFlag from "../ui/ErrorFlag";
import ProjectResearcherItemReadOnly from "./ProjectResearcherItemReadOnly";

const ProjectResearcherListReadOnly = ({ researcherList }) => {
  return (
    <div className="project-form__researcher-list-container">
      <div>
        <h3>
          {researcherList.length === 0 ? (
            <ErrorFlag
              message="Aún no hay investigadores agregados al proyecto"
              color="#f54d4d"
              fontColor="white"
              width="85%"
            />
          ) : (
            <h3 className="project-form__specific-objectives-title">
              Lista de investigadores
            </h3>
          )}
        </h3>
      </div>
      {researcherList.map((researcher) => (
        <ProjectResearcherItemReadOnly {...researcher} />
      ))}
    </div>
  );
};

export default ProjectResearcherListReadOnly;
