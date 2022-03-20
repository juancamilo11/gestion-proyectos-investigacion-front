import React from "react";
import ErrorFlag from "../ui/ErrorFlag";
import ProjectSpecificObjectiveItemReadOnly from "./ProjectSpecificObjectiveItemReadOnly";

const ProjectSpecificObjectiveListReadOnly = ({ specificObjectives }) => {
  return (
    <div className="project-form__specific-objectives-container project-view__specific-objectives-container">
      <div>
        <div>
          {specificObjectives.length === 0 ? (
            <ErrorFlag
              message="Este proyecto aún no tiene objetivos específicos ingresados.
              uno"
              color="#f54d4d"
              fontColor="white"
              width="95%"
            />
          ) : (
            <h3 className="project-form__specific-objectives-title">
              Lista de objetivos específicos
            </h3>
          )}
        </div>
      </div>
      <div className="project-view__specific-objectives__main-container">
        {specificObjectives.map((specificObjective) => (
          <ProjectSpecificObjectiveItemReadOnly {...specificObjective} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSpecificObjectiveListReadOnly;
