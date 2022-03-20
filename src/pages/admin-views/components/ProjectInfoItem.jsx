import React from "react";
import {
  sweetAlertForDeleteAProjectFromApplication,
  sweetAlertForDisplayProjectObjectives,
} from "../../../helpers/sweet-alert/sweetAlertBuilder";

const ProjectInfoItem = ({
  projectId,
  name,
  budget,
  objective,
  duration,
  setProjectList,
}) => {
  const handleDeleteProjectFromApplication = (e) => {
    e.preventDefault();
    sweetAlertForDeleteAProjectFromApplication(name, budget, duration).then(
      (res) => {
        if (res.isConfirmed) {
          //FALTA ELIMINAR AQUÍ EL PROYECTO, ENVIAR PETICIÓN AL BACK
          setProjectList((projectList) =>
            projectList.filter((project) => project.projectId !== projectId)
          );
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
        <div className="admin-console__user-info-item">
          <small>Nombre del proyecto</small>
          <h3>{name}</h3>
        </div>

        <div className="admin-console__user-info-item">
          <small>Presupuesto</small>
          <p>${budget} COP</p>
        </div>

        <div className="admin-console__user-info-item">
          <small>Duración</small>
          <p>
            {duration.startingDate} - {duration.endingDate}
          </p>
        </div>

        <div className="admin-console__user-info-item">
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