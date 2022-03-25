import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  startChangeUserRole,
  startDeleteUserById,
} from "../../../actions/projectActions";
import {
  sweetAlertForChangeRoleToUser,
  sweetAlertForDeleteAPersonFromApplication,
  sweetAlertForDeleteAResearchFromAProject,
} from "../../../helpers/sweet-alert/sweetAlertBuilder";
import { appRoles } from "../../../helpers/user-info/userRoles";

const PersonInfoItem = ({
  basicResearcherInfo,
  phoneNumber,
  dateOfEntry,
  role,
  career,
  setPeopleList,
}) => {
  const navigate = useNavigate();
  const { id, displayName, email, photoURL } = basicResearcherInfo;
  const [newRole, setNewRole] = useState(role);
  const handleDeletePersonFromApplication = (e) => {
    e.preventDefault();
    sweetAlertForDeleteAPersonFromApplication(displayName, photoURL, role).then(
      (res) => {
        if (res.isConfirmed) {
          startDeleteUserById(id).then((res) => {
            navigate("/");
          });
        }
      }
    );
  };

  const handleRoleChange = (e) => {
    const { value: selectedRole } = e.target;
    e.preventDefault();
    sweetAlertForChangeRoleToUser(displayName, photoURL, selectedRole).then(
      (res) => {
        if (res.isConfirmed) {
          startChangeUserRole(id, selectedRole).then((updatedUser) => {
            setNewRole(selectedRole);
          });
        }
      }
    );
  };

  return (
    <div>
      <div className="project-form__objective-item">
        <img src={photoURL} className="project-form__researcher-photo" />
        <div className="admin-console__user-info-item admin-console__user-name">
          <small className="project-form__info-value">Nombre Completo</small>
          <p className="project-form__info-value">{displayName}</p>
        </div>

        <div className="admin-console__user-info-item admin-console__user-email">
          <small className="project-form__info-value">
            Correo institucional
          </small>
          <p className="project-form__info-value">{email}</p>
        </div>

        <div className="admin-console__user-info-item admin-console__user-career">
          <small className="project-form__info-value">
            Carrera universitaria
          </small>
          <p className="project-form__info-value">{career?.name}</p>
          <span className="project-form__info-value">{career?.code}</span>
        </div>

        <div className="admin-console__user-info-item admin-console__user-phone">
          <small className="project-form__info-value">Teléfono</small>
          <p className="project-form__info-value">{phoneNumber}</p>
        </div>

        <div className="admin-console__user-info-item admin-console__user-dateOfEntry">
          <small className="project-form__info-value">
            Fecha de Ingreso a la U
          </small>
          <p className="project-form__info-value">{dateOfEntry}</p>
        </div>

        <small className="project-form__researcher-role admin-console__role">
          {role === "RESEARCHER" && "Líder Investigador"}
          {role === "RESEARCH_LEADER" && "Líder Investigador"}
          {role === "ADMINISTRATOR" && "Líder Administrador"}
        </small>

        {role !== "ADMINISTRATOR" && (
          <select
            value={newRole}
            onChange={handleRoleChange}
            className="admin-console__role-select"
          >
            {appRoles
              .filter((role) => role.value !== "ADMINISTRATOR")
              .map((role) => (
                <option value={role.value}>{role.label}</option>
              ))}
          </select>
        )}
        {role !== "ADMINISTRATOR" && (
          <div className="project-form-specific-objective-info admin-console__delete-btn">
            <button
              className="project-form__delete-specific-objective"
              onClick={handleDeletePersonFromApplication}
            >
              <i className="fas fa-trash-alt "></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonInfoItem;
