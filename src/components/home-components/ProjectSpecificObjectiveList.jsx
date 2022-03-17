import React from "react";
import ProjectSpecificObjectiveItem from "./ProjectSpecificObjectiveItem";

const ProjectSpecificObjectiveList = ({
  specificObjectives,
  setSpecificObjectives,
}) => {
  return (
    <div className="project-form__specific-objectives-container">
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
