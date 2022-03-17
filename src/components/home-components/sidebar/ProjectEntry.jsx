import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  activeProjectToShow,
  activeProjectToUpdate,
} from "../../../actions/projectActions";

const ProjectEntry = ({ id, name, budget, objective, duration }) => {
  const dispatch = useDispatch();
  const { projects, auth } = useSelector((state) => state);
  const activeProject = projects.activeProjectToShow;
  const activeProjectUpdating = projects.activeProjectToUpdate;

  const handleWatchProject = (e) => {
    e.preventDefault();
    dispatch(
      activeProjectToShow(id, {
        name,
        budget,
        objective,
        duration,
      })
    );
  };

  const handleModifyProject = (e) => {
    e.preventDefault();
    dispatch(
      activeProjectToUpdate(id, {
        name,
        budget,
        objective,
        duration,
      })
    );
  };

  return (
    <div
      className="project-catalog__project-entry"
      style={{
        backgroundColor:
          (activeProject?.projectId === id && "#94DAFF") ||
          (activeProjectUpdating?.projectId === id && "#94DAAA"),
      }}
    >
      <div>
        <h2 className="project-catalog__project-entry-title text-center">
          {name}
        </h2>
        <div className="project-catalog__decoration-line">
          <hr />
        </div>
      </div>

      <div>
        <p className="project-catalog__project-entry-content">
          <i className="fas fa-calendar-alt project-catalog__icon-entry-value"></i>
          <span className="bold-text">
            Habilitado desde el {duration.startingDate} hasta el{" "}
            {duration.endingDate}
          </span>
        </p>
        <p className="project-catalog__project-entry-content">
          <i className="fa fa-dollar project-catalog__icon-entry-value"></i>
          <span className="bold-text">{budget} COP</span>
        </p>
        <p className="project-catalog__project-entry-content">
          <i class="fa fa-bullseye project-catalog__icon-entry-value"></i>
          <i class="fa-solid fa-bullseye-arrow"></i>
          <span className="bold-text">{objective.generalObjective}</span>
        </p>
      </div>
      {/* <p className="project-catalog__project-entry-content">
          <i className="fas fa-tags project-catalog__icon-entry-value"></i>
          {tagList
            .slice(0, MAX_NUM_TAGS_DISPLAYED)
            .toString()
            .replaceAll(",", ", ")}
          ...
        </p> */}
      <div className="project-catalog__project-entry-buttons">
        <button
          className="project-catalog__visit-project-button mt-1"
          onClick={handleWatchProject}
        >
          Ver Proyecto
        </button>
      </div>
    </div>
  );
};

export default ProjectEntry;
