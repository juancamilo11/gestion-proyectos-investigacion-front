import React from "react";
import ErrorFlag from "../ui/ErrorFlag";
import ProjectSpecificObjectiveItem from "./ProjectSpecificObjectiveItem";

const ProjectSpecificObjectiveList = ({
  specificObjectives,
  setSpecificObjectives,
}) => {
  return (
    <div className="project-form__specific-objectives-container">
      <div>
        <h3>
          {specificObjectives.length === 0 ? (
            <ErrorFlag
              message="Aún no tienes objetivos específicos ingresados, ingresa al menos
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
        </h3>
      </div>
      {specificObjectives.map((objective) => (
        <ProjectSpecificObjectiveItem
          {...objective}
          setSpecificObjectives={setSpecificObjectives}
        />
      ))}
    </div>
  );
};

export default ProjectSpecificObjectiveList;
