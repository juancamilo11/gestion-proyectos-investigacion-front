import React from "react";

const ProjectSpecificObjectiveItemReadOnly = ({ description, completed }) => {
  return (
    <div className="project-form__objective-item">
      <p>
        <b>-</b> {description}
      </p>
      <div className="project-form-specific-objective-info">
        {completed ? (
          <span className="project-form__label-completed">Completado</span>
        ) : (
          <span className="project-form__label-no-completed">
            No completado
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectSpecificObjectiveItemReadOnly;
