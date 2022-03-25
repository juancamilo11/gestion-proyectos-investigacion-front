import React from "react";
import { useNavigate } from "react-router-dom";
import { startDeleteResearchProjectById } from "../../../actions/projectActions";
import {
  sweetAlertForDeleteAProjectFromApplication,
  sweetAlertForDisplayProjectObjectives,
} from "../../../helpers/sweet-alert/sweetAlertBuilder";

const ProjectInfoItem = ({
  id: projectId,
  name,
  budget,
  projectObjective: objective,
  projectDuration: duration,
  setProjectList,
}) => {
  const navigate = useNavigate();

  const handleDeleteProjectFromApplication = (e) => {
    e.preventDefault();
    sweetAlertForDeleteAProjectFromApplication(name, budget, duration).then(
      (res) => {
        if (res.isConfirmed) {
          startDeleteResearchProjectById(projectId).then((res) => {
            navigate("/user-administration");
          });
        }
      }
    );
  };

  const handleDisplayProjectObjectives = (e) => {
    e.preventDefault();
    sweetAlertForDisplayProjectObjectives(name, objective);
  };

  return (
    <div>
      <div className="project-form__objective-item">
        <div className="admin-console__user-info-item project-console__project-name">
          <small>Nombre del proyecto</small>
          <h3>{name}</h3>
        </div>

        <div className="admin-console__user-info-item project-console__project-budget">
          <small>Presupuesto</small>
          <p>${budget} COP</p>
        </div>
        <div className="admin-console__user-info-item project-console__project-duration">
          <small>Duración</small>
          <p>
            {duration.startingDate} - {duration.endingDate}
          </p>
        </div>
        <div className="admin-console__user-info-item project-console__project-objectives">
          <small>Objetivos</small>
          <button
            onClick={handleDisplayProjectObjectives}
            className="admin-console__display-objectives-btn"
          >
            Ver objetivos
          </button>
        </div>
        <div className="project-form-specific-objective-info">
          <button
            className="project-form__delete-specific-objective"
            onClick={handleDeleteProjectFromApplication}
          >
            <i className="fas fa-trash-alt "></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoItem;
