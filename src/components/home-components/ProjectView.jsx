import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  activeProjectToUpdate,
  startFetchAllEnrolledResearchersInProject,
} from "../../actions/projectActions";
import ProjectProgressBar from "./ProjectProgressBar";
import ProjectResearcherListReadOnly from "./ProjectResearcherListReadOnly";
import ProjectSpecificObjectiveListReadOnly from "./ProjectSpecificObjectiveListReadOnly";
const ProjectView = () => {
  const { activeProjectToShow } = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.auth);
  const [researcherList, setResearcherList] = useState([]);
  const {
    projectId,
    name,
    budget,
    objective,
    duration,
    description,
    researcherIdList,
  } = activeProjectToShow;

  useEffect(() => {
    startFetchAllEnrolledResearchersInProject(projectId).then(
      (enrolledResearchers) => {
        setResearcherList(enrolledResearchers);
      }
    );
  }, []);

  const handleModifyProject = (e) => {
    e.preventDefault();
    dispatch(
      activeProjectToUpdate(projectId, {
        name,
        budget,
        objective,
        duration,
        description,
        researcherList,
      })
    );
  };

  return (
    <div className="project-view__main-container">
      <h2 className="project-view__name">{name}</h2>
      <small className="project-view__item-title">Descripción</small>
      <p className="project-view__description">{description}</p>
      <small className="project-view__item-title">Presupuesto</small>
      <p className="project-view__budget"> ${budget} COP</p>
      <small className="project-view__item-title">Duración</small>
      <p className="project-view__budget">
        Desde el {duration.startingDate}, hasta el {duration.endingDate}
      </p>
      <small className="project-view__item-title">Objetivos del proyecto</small>
      <p className="project-view__item-title">Objetivo General</p>
      <h3 className="project-view__general-objective">
        - {objective.generalObjective}
      </h3>
      <div className="project-view__projects-container">
        <ProjectSpecificObjectiveListReadOnly
          specificObjectives={objective.specificObjectiveList}
        />
      </div>
      <small className="project-view__item-title">Avance del proyecto</small>
      <ProjectProgressBar
        specificObjectives={objective.specificObjectiveList}
      />
      <small className="project-view__item-title">
        Lista de estudiantes investigadores en el proyecto
      </small>
      <ProjectResearcherListReadOnly researcherList={researcherList} />

      {role === "RESEARCH_LEADER" && (
        <div
          className="project-view__edit-project-container"
          onClick={handleModifyProject}
        >
          <button
            className="project-view__edit-project-btn"
            onClick={handleModifyProject}
          >
            Editar
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectView;
