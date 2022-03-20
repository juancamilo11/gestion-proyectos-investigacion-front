import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { startFetchAllEnrolledResearchersInProject } from "../../actions/projectActions";
import ProjectProgressBar from "./ProjectProgressBar";
import ProjectResearcherListReadOnly from "./ProjectResearcherListReadOnly";
import ProjectSpecificObjectiveListReadOnly from "./ProjectSpecificObjectiveListReadOnly";
const ProjectView = () => {
  const { activeProjectToShow } = useSelector((state) => state.projects);
  const [researcherList, setResearcherList] = useState([]);
  const { projectId, name, budget, objective, duration, description } =
    activeProjectToShow;

  useEffect(() => {
    startFetchAllEnrolledResearchersInProject(projectId).then(
      (enrolledResearchers) => {
        setResearcherList(enrolledResearchers);
      }
    );
  }, []);

  return (
    <div className="project-view__main-container">
      <h2 className="project-view__name">{name}</h2>

      <small className="project-view__item-title">Descripción</small>
      <p className="project-view__description">
        {description ||
          `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
      sunt ad dolorem minus labore repellendus mollitia ratione porro, est modi
      iure. Perspiciatis repudiandae dolor doloribus molestiae illo? Sequi, at
      excepturi pariatur necessitatibus praesentium ex architecto eum tempore
      maxime laudantium? Ipsa dicta quam laboriosam architecto adipisci pariatur
      quasi dolorem error fugiat tenetur incidunt, repellat, asperiores soluta
      itaque ea provident dolorum eos expedita veritatis perferendis illo? Optio
      eveniet vero totam architecto nulla doloribus sapiente laborum ex
      voluptatibus, excepturi culpa officiis aliquid, autem possimus. Libero,
      illum nam. Harum, esse velit? Pariatur magni quia adipisci, id impedit
      tempore minima! Impedit quidem ab quaerat voluptate.`}
      </p>

      <small className="project-view__item-title">Presupuesto</small>
      <p className="project-view__budget">{budget}</p>

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
          specificObjectives={objective.specificObjectives}
        />
      </div>

      <small className="project-view__item-title">Avance del proyecto</small>
      <ProjectProgressBar specificObjectives={objective.specificObjectives} />

      <small className="project-view__item-title">
        Lista de estudiantes investigadores en el proyecto
      </small>
      <ProjectResearcherListReadOnly researcherList={researcherList || []} />
    </div>
  );
};

export default ProjectView;

