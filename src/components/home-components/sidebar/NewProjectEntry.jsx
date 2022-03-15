import React from "react";
import { useDispatch } from "react-redux";
import { activeNewProject } from "../../../actions/projectActions";

const NewProjectEntry = () => {
  const dispatch = useDispatch();

  const handleOpenEmptyFormForNewProject = (e) => {
    e.preventDefault();
    dispatch(activeNewProject());
  };
  return (
    <div
      className="project-catalog__new-project-container"
      onClick={handleOpenEmptyFormForNewProject}
    >
      <button className="project-catalog__new-project-button">
        <img
          className="project-catalog__new-project-img"
          src={process.env.PUBLIC_URL + "/assets/img/home/new-project.png"}
          alt="new project button"
        />
        <p className="project-catalog__new-project-text">
          Nuevo Proyecto de Investigación
        </p>
      </button>
    </div>
  );
};

export default NewProjectEntry;
