import React, { useState } from "react";

const ProjectSpecificObjectiveItem = ({
  description,
  completed,
  setSpecificObjectives,
}) => {
  const [isCompleted, setIsCompleted] = useState(completed);
  const handleDeleteSpecificObjective = (e) => {
    e.preventDefault();
    setSpecificObjectives((specificObjectives) =>
      specificObjectives.filter(
        (objective) => objective.description !== description
      )
    );
  };

  const handleChangeCompletedStatus = (e) => {
    e.preventDefault();
    setSpecificObjectives((specificObjectives) =>
      specificObjectives.map((objective) =>
        objective.description === description
          ? { ...objective, completed: !isCompleted }
          : objective
      )
    );
    setIsCompleted(!isCompleted);
  };

  return (
    <div>
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
          {isCompleted && (
            <input
              type="radio"
              checked={true}
              className="project-form__radio-completed"
              id="project-form__radio-completed"
              onClick={handleChangeCompletedStatus}
            />
          )}{" "}
          {!isCompleted && (
            <input
              type="radio"
              checked={false}
              className="project-form__radio-completed"
              id="project-form__radio-completed"
              onClick={handleChangeCompletedStatus}
            />
          )}
          <button
            className="project-form__delete-specific-objective"
            onClick={handleDeleteSpecificObjective}
          >
            <i className="fas fa-trash-alt "></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSpecificObjectiveItem;
