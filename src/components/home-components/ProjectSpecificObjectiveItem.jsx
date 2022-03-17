import React from "react";

const ProjectSpecificObjectiveItem = ({
  name,
  completed,
  setSpecificObjectives,
}) => {
  const handleDeleteSpecificObjective = (e) => {
    e.preventDefault();
    setSpecificObjectives((specificObjectives) =>
      specificObjectives.filter((objective) => objective.name !== name)
    );
  };

  return (
    <div>
      <div className="project-form__objective-item">
        <p>- {name}</p>

        <div>
          {completed ? (
            <span className="project-form__label-completed">Completado</span>
          ) : (
            <span className="project-form__label-no-completed">
              No completado
            </span>
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
