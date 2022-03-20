import React, { useState } from "react";
import {
  sweetAlertForChangeRoleToUser,
  sweetAlertForDeleteAPersonFromApplication,
  sweetAlertForDeleteAResearchFromAProject,
} from "../../../helpers/sweet-alert/sweetAlertBuilder";
import { appRoles } from "../../../helpers/user-info/userRoles";

const PersonInfoItem = ({
  id,
  displayName,
  email,
  photoURL,
  phoneNumber,
  dateOfEntry,
  role,
  career,
  setPeopleList,
}) => {
  const [newRole, setNewRole] = useState(role);
  const handleDeletePersonFromApplication = (e) => {
    e.preventDefault();
    sweetAlertForDeleteAPersonFromApplication(displayName, photoURL).then(
      (res) => {
        if (res.isConfirmed) {
          //FALTA ELIMINAR AQUÍ LA PERSONA, ENVIAR PETICIÓN AL BACK
          setPeopleList((peopleList) =>
            peopleList.filter((person) => person.id !== id)
          );
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
          //FALTA ENVIAR PETICIÓN AL BACK PARA EL CAMBIO DE ROL
          setNewRole(selectedRole);
          window.alert("el nuevo rol de " + displayName + " es " + newRole);
        }
      }
    );
  };

  return (
    <div>
      <div className="project-form__objective-item">
        <img src={photoURL} className="project-form__researcher-photo" />
        <div className="admin-console_user-info-item admin-console_user-name">
          <small>Nombre Completo</small>
          <p>{displayName}</p>
        </div>

        <div className="admin-console_user-info-item admin-console_user-email">
          <small>Correo institucional</small>
          <p>{email}</p>
        </div>

        <div className="admin-console_user-info-item admin-console_user-career">
          <small>Carrera universitaria</small>
          <p>{career?.name}</p>
          <span>{career?.code}</span>
        </div>

        <div className="admin-console_user-info-item admin-console_user-phone">
          <small>Teléfono</small>
          <p>{phoneNumber}</p>
        </div>

        <div className="admin-console_user-info-item admin-console_user-dateOfEntry">
          <small>Fecha de Ingreso a la U</small>
          <p>{dateOfEntry}</p>
        </div>

        <small className="project-form__researcher-role">
          {role === "RESEARCH_LEADER" ? "Líder Investigador" : "Investigador"}
        </small>

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
        <div className="project-form-specific-objective-info admin-console__delete-btn">
          <button
            className="project-form__delete-specific-objective"
            onClick={handleDeletePersonFromApplication}
          >
            <i className="fas fa-trash-alt "></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonInfoItem;