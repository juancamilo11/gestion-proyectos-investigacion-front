import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  activeNothingToShow,
  startUpdateUserInfo,
} from "../../actions/projectActions";
import { sweetAlertForFormSubmitWithErrors } from "../../helpers/sweet-alert/sweetAlertBuilder";
import buildUser from "../../helpers/userForm/formSubmitHelpers";
import userFormValidation from "../../helpers/userForm/formValidationHelpers";
import { udeaCareers } from "../../helpers/userForm/udeaCareers";
import {
  formInitialErrorState,
  userFormInitialValues,
} from "../../helpers/userForm/userFormHelpers";
import useForm from "../../hooks/useForm";
import ErrorFlag from "../ui/ErrorFlag";

const UserDataActualizationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const [errorsState, setErrorsState] = useState(formInitialErrorState);

  const [formValues, handleInputChange, resetForm] = useForm(
    userFormInitialValues(auth)
  );

  const {
    id,
    displayName,
    email,
    photoURL,
    role,
    phoneNumber,
    dateOfEntry,
    careerCode,
  } = formValues;

  const handleUserFormSubmit = (e) => {
    e.preventDefault();
    const areTheFormValuesCorrect = userFormValidation(
      {
        phoneNumber,
        dateOfEntry,
        careerCode,
      },
      setErrorsState
    );
    if (!areTheFormValuesCorrect) {
      sweetAlertForFormSubmitWithErrors();
      return;
    }
    const userObject = buildUser(
      id,
      displayName,
      email,
      photoURL,
      role,
      phoneNumber,
      dateOfEntry,
      careerCode
    );

    dispatch(startUpdateUserInfo(userObject));
  };

  const handleInputValidation = (e) => {
    handleInputChange(e);
  };

  return (
    <div className="project-form__main-container">
      <form onSubmit={handleUserFormSubmit}>
        <div className="project-form__save-btn-container">
          <button
            className="project-form__command-button project-catalog__search-button"
            type="submit"
          >
            Guardar
          </button>
        </div>
        <div className="project-form__form-container">
          <h2 className="project-form__form-title">
            Formulario de actualización de datos de usuario
          </h2>
          <div className="project-form__inputs-container">
            <div className="project-form__input-container">
              <label
                htmlFor="displayName"
                className="project-form__input-label"
              >
                Nombre
              </label>
              <input
                type="text"
                readOnly
                name="displayName"
                id="displayName"
                className="project-form__input"
                value={displayName}
              />
            </div>
            <div className="project-form__input-container">
              <label htmlFor="email" className="project-form__input-label">
                Email
              </label>
              <textarea
                name="email"
                id="email"
                className="project-form__input project-form__textarea"
                autoComplete="off"
                value={email}
              />
            </div>
            <div className="project-form__input-container">
              <label htmlFor="role" className="project-form__input-label">
                Rol
              </label>
              <input
                type="text"
                name="role"
                id="role"
                readOnly
                className="project-form__input"
                autoComplete="off"
                value={
                  role === "RESEARCHER"
                    ? "Investigador"
                    : "Líder de Investigación"
                }
              />
            </div>
            <div className="project-form__input-container">
              <label
                htmlFor="phoneNumber"
                className="project-form__input-label"
              >
                Celular
              </label>

              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                autoFocus
                className="project-form__input"
                autoComplete="off"
                value={phoneNumber}
                onChange={handleInputValidation}
              />
            </div>
            <div className="project-form__error-flag mt-2 mb-4">
              {errorsState.phoneNumber.hasErrors && (
                <ErrorFlag
                  message={errorsState.phoneNumber.message}
                  color="red"
                />
              )}
            </div>
            <div className="project-form__input-container">
              <label
                htmlFor="dateOfEntry"
                className="project-form__input-label"
              >
                Fecha de ingreso a la U
              </label>
              <input
                type="date"
                name="dateOfEntry"
                id="dateOfEntry"
                className="project-form__input"
                autoComplete="off"
                value={dateOfEntry}
                onChange={handleInputValidation}
              />
            </div>
            <div className="project-form__error-flag mt-2 mb-4">
              {errorsState.dateOfEntry.hasErrors && (
                <ErrorFlag
                  message={errorsState.dateOfEntry.message}
                  color="red"
                />
              )}
            </div>
            <div className="project-form__input-container">
              <label htmlFor="careerCode" className="project-form__input-label">
                Carrera
              </label>
              <select
                className="project-form__input"
                name="careerCode"
                id="careerCode"
                value={careerCode}
                onChange={handleInputValidation}
              >
                {udeaCareers.map((faculty) => (
                  <optgroup label={faculty.facultyName}>
                    {faculty.careers.map((career) => (
                      <option value={career.code}>
                        {`${career.name} - ${career.code}`}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
            <div className="project-form__error-flag mt-2 mb-4">
              {errorsState.careerCode.hasErrors && (
                <ErrorFlag
                  message={errorsState.careerCode.message}
                  color="red"
                />
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserDataActualizationForm;
