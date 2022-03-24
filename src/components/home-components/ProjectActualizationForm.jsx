import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import {
  activeProjectToShow,
  fetchResearchInfoByEmail,
  loadProjects,
  startFetchAllResearchersByProjectId,
  startFetchProjectsByResearcherId,
  startPostNewResearchProject,
} from "../../actions/projectActions";
import buildResearchProject from "../../helpers/projectForm/formSubmitHelpers";
import projectFormValidation, {
  isTheResearcherEmailAlreadyDefined,
  isTheSpecificObjectiveAlreadyDefined,
  validateNewResearcherEmail,
} from "../../helpers/projectForm/formValidationHelpers";
import {
  formInitialErrorState,
  formInitialValues,
  getInitialFormValuesForUpdating,
} from "../../helpers/projectForm/projectFormHelpers";
import {
  sweetAlertForFormSubmitWithErrors,
  sweetAlertForInvalidEmailInput,
  sweetAlertForInvalidRoleInProject,
  sweetAlertForResearcherEmailAlreadyDefined,
  sweetAlertForSpecificObjectiveAlreadyDefined,
} from "../../helpers/sweet-alert/sweetAlertBuilder";
import useForm from "../../hooks/useForm";
import ErrorFlag from "../ui/ErrorFlag";
import ProjectResearcherList from "./ProjectResearcherList";
import ProjectSpecificObjectiveList from "./ProjectSpecificObjectiveList";

const ProjectActualizationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const { projectsList } = useSelector((state) => state.projects);

  const [formValues, handleInputChange, resetForm] = useForm({});
  const [errorsState, setErrorsState] = useState(formInitialErrorState);
  const { activeProjectToUpdate } = useSelector((state) => state.projects);
  const [specificObjectives, setSpecificObjectives] = useState([]);
  const [researcherList, setResearcherList] = useState([]);

  const {
    projectId,
    name,
    budget,
    generalObjective,
    startingDate,
    endingDate,
    description,

    currentEmail,
    currentSpecificObjective,
  } = formValues;

  const handleProjectFormSubmit = (e) => {
    e.preventDefault();
    const areTheFormValuesCorrect = projectFormValidation(
      {
        projectId,
        name,
        budget,
        generalObjective,
        startingDate,
        endingDate,
        description,
      },
      setErrorsState
    );
    if (!areTheFormValuesCorrect) {
      sweetAlertForFormSubmitWithErrors();
      return;
    }
    const researchProjectObject = buildResearchProject(
      formValues,
      specificObjectives,
      researcherList
    );
    console.log(JSON.stringify(researchProjectObject));
    startPostNewResearchProject(researchProjectObject).then((projectResult) => {
      dispatch(startFetchProjectsByResearcherId(auth.uid));
      resetForm(formInitialValues);
      setResearcherList([getProjectLeaderInfo()]);
      setSpecificObjectives([]);
    });
  };

  const handleAddNewSpecificObjective = (e) => {
    e.preventDefault();
    const newObjective = document
      .getElementById("currentSpecificObjective")
      .value.trim();
    const cleanEvent = {
      target: { name: "currentSpecificObjective", value: "" },
    };
    if (newObjective === "" || newObjective.length > 100) return;
    if (
      isTheSpecificObjectiveAlreadyDefined(newObjective, specificObjectives)
    ) {
      sweetAlertForSpecificObjectiveAlreadyDefined(newObjective);
      return;
    }
    setSpecificObjectives([
      { description: newObjective, completed: false },
      ...specificObjectives,
    ]);
    handleInputChange(cleanEvent);
  };

  const getEmailListOfEnrolledResearchers = () =>
    researcherList.map((researcher) => researcher.basicResearcherInfo.email);

  const handleAddNewResearcherByEmail = (e) => {
    e.preventDefault();
    const newEmail = document.getElementById("currentEmail").value.trim();
    const cleanEvent = {
      target: { name: "currentEmail", value: "" },
    };
    if (newEmail === "") return;
    if (!validateNewResearcherEmail(newEmail)) {
      sweetAlertForInvalidEmailInput(newEmail);
      return;
    }
    if (
      isTheResearcherEmailAlreadyDefined(
        newEmail,
        getEmailListOfEnrolledResearchers()
      )
    ) {
      sweetAlertForResearcherEmailAlreadyDefined(newEmail);
      return;
    }
    fetchResearchInfoByEmail(newEmail)
      .then((newResearcherInfo) => {
        if (newResearcherInfo.role === "RESEARCHER") {
          setResearcherList((researcherList) => [
            ...researcherList,
            newResearcherInfo,
          ]);
        } else {
          sweetAlertForInvalidRoleInProject(newEmail);
        }
        handleInputChange(cleanEvent);
      })
      .catch((err) => {
        handleInputChange(cleanEvent);
      });
  };

  const handleInputValidation = (e) => {
    handleInputChange(e);
  };

  const getProjectLeaderInfo = () => ({
    basicResearcherInfo: {
      id: auth.uid,
      displayName: auth.name,
      email: auth.email,
      photoURL: auth.photoURL,
    },
    phoneNumber: auth.phoneNumber,
    role: auth.role,
    career: auth.career,
    dateOfEntry: auth.dateOfEntry,
  });

  useEffect(() => {
    if (activeProjectToUpdate) {
      resetForm(getInitialFormValuesForUpdating(activeProjectToUpdate));
      setSpecificObjectives(
        activeProjectToUpdate.objective.specificObjectiveList
      );
      setResearcherList(activeProjectToUpdate.researcherList);
    } else {
      resetForm(formInitialValues);
      setSpecificObjectives([]);
      const creatorInfo = getProjectLeaderInfo();
      setResearcherList([creatorInfo]);
    }
  }, [activeProjectToUpdate]);

  return (
    <div className="project-form__main-container">
      <form onSubmit={handleProjectFormSubmit}>
        <div className="project-form__save-btn-container">
          <button
            className="project-form__command-button project-catalog__search-button"
            type="submit"
          >
            Guardar
          </button>
        </div>
        <div className="project-form__form-container">
          <h1 className="project-form__form-title">
            {name || "Nombre del Proyecto de investigación"}
          </h1>
          <div className="project-form__inputs-container">
            <div className="project-form__input-container">
              <label htmlFor="name" className="project-form__input-label">
                Nombre
              </label>
              <input
                type="text"
                autoFocus="true"
                name="name"
                id="name"
                className="project-form__input"
                autoComplete="off"
                value={name}
                onChange={handleInputValidation}
              />
            </div>
            <div className="project-form__error-flag mt-2 mb-4">
              {errorsState.name.hasErrors && (
                <ErrorFlag message={errorsState.name.message} color="red" />
              )}
            </div>

            <div className="project-form__input-container">
              <label
                htmlFor="description"
                className="project-form__input-label"
              >
                Descripción
              </label>
              <textarea
                name="description"
                id="description"
                className="project-form__input project-form__textarea"
                autoComplete="off"
                value={description}
                onChange={handleInputValidation}
              />
            </div>
            <div className="project-form__error-flag mt-2 mb-4">
              {errorsState.description.hasErrors && (
                <ErrorFlag
                  message={errorsState.description.message}
                  color="red"
                />
              )}
            </div>

            <div className="project-form__input-container">
              <label
                htmlFor="startingDate"
                className="project-form__input-label"
              >
                Duración
              </label>
              <input
                type="date"
                name="startingDate"
                id="startingDate"
                className="project-form__input project-form__input--middle"
                autoComplete="off"
                value={startingDate}
                onChange={handleInputValidation}
              />
              <div className="project-form__input-separator"> - </div>
              <input
                type="date"
                name="endingDate"
                id="endingDate"
                className="project-form__input project-form__input--middle"
                autoComplete="off"
                value={endingDate}
                onChange={handleInputValidation}
              />
            </div>
            <div className="project-form__error-flag mt-2 mb-4">
              {errorsState.duration.startingDate.hasErrors && (
                <ErrorFlag
                  message={errorsState.duration.startingDate.message}
                  color="red"
                />
              )}
            </div>
            <div className="project-form__error-flag mt-2 mb-4">
              {errorsState.duration.endingDate.hasErrors && (
                <ErrorFlag
                  message={errorsState.duration.endingDate.message}
                  color="red"
                />
              )}
            </div>

            <div className="project-form__input-container">
              <label htmlFor="budget" className="project-form__input-label">
                Presupuesto
              </label>
              <input
                type="number"
                name="budget"
                id="budget"
                className="project-form__input"
                autoComplete="off"
                value={budget}
                onChange={handleInputValidation}
              />
            </div>
            <div className="project-form__error-flag mt-2 mb-4">
              {errorsState.budget.hasErrors && (
                <ErrorFlag message={errorsState.budget.message} color="red" />
              )}
            </div>

            <div className="project-form__input-container">
              <label
                htmlFor="generalObjective"
                className="project-form__input-label"
              >
                Objetivo General
              </label>
              <textarea
                name="generalObjective"
                id="generalObjective"
                className="project-form__input project-form__textarea"
                autoComplete="off"
                value={generalObjective}
                onChange={handleInputValidation}
              />
            </div>
            <div className="project-form__error-flag mt-2 mb-4">
              {errorsState.objective.generalObjective.hasErrors && (
                <ErrorFlag
                  message={errorsState.objective.generalObjective.message}
                  color="red"
                />
              )}
            </div>

            <div className="project-form__input-container">
              <label
                htmlFor="currentSpecificObjective"
                className="project-form__input-label"
              >
                Objetivo específico
              </label>
              <input
                type="text"
                name="currentSpecificObjective"
                id="currentSpecificObjective"
                className="project-form__input project-form__input-specific-objective"
                autoComplete="off"
                value={currentSpecificObjective}
                onChange={handleInputValidation}
              />
              <button
                onClick={handleAddNewSpecificObjective}
                className="project-form__input project-form__button-input btn btn-primary"
                type="button"
              >
                Ingresar
              </button>
            </div>
            <div className="project-form__error-flag mt-2 mb-4">
              {errorsState.currentSpecificObjective.hasErrors && (
                <ErrorFlag
                  message={errorsState.currentSpecificObjective.message}
                  color="red"
                />
              )}
            </div>

            <ProjectSpecificObjectiveList
              specificObjectives={specificObjectives}
              setSpecificObjectives={setSpecificObjectives}
            />

            <div className="project-form__input-container">
              <label
                htmlFor="currentEmail"
                className="project-form__input-label"
              >
                Matricular estudiante
              </label>
              <input
                type="text"
                name="currentEmail"
                id="currentEmail"
                placeholder="Correo del estudiante a matricular"
                className="project-form__input project-form__input-specific-objective"
                autoComplete="off"
                value={currentEmail}
                onChange={handleInputValidation}
              />
              <button
                onClick={handleAddNewResearcherByEmail}
                className="project-form__input project-form__button-input btn btn-primary"
                type="button"
              >
                Ingresar
              </button>
            </div>
            <div className="project-form__error-flag mt-2 mb-4">
              {errorsState.currentEmail.hasErrors && (
                <ErrorFlag
                  message={errorsState.currentEmail.message}
                  color="red"
                />
              )}
            </div>
            <ProjectResearcherList
              researcherList={researcherList}
              setResearcherList={setResearcherList}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProjectActualizationForm;
