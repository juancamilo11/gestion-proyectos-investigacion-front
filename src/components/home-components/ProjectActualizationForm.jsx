import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startFetchAllResearchersByProjectId } from "../../actions/projectActions";
import {
  formInitialErrorState,
  formInitialValues,
  getInitialFormValuesForUpdating,
} from "../../helpers/projectFormHelpers";
import useForm from "../../hooks/useForm";
import ErrorFlag from "../ui/ErrorFlag";
import ProjectResearcherList, {
  fakeResearcherList,
} from "./ProjectResearcherList";
import ProjectSpecificObjectiveList from "./ProjectSpecificObjectiveList";

const ProjectActualizationForm = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const { projectsList } = useSelector((state) => state.projects);

  const [formValues, handleInputChange, resetForm] = useForm({});
  const [errorsState, setErrorsState] = useState(formInitialErrorState);
  const { activeProjectToUpdate } = useSelector((state) => state.projects);
  const [specificObjectives, setSpecificObjectives] = useState([]);
  const [researcherList, setResearcherList] = useState(fakeResearcherList);

  const {
    id,
    description,
    name,
    budget,
    objective,
    duration,
    currentEmail,
    currentSpecificObjective,
  } = formValues;

  const handleProjectFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleAddNewSpecificObjective = (e) => {
    e.preventDefault();
    const newObjective = document
      .getElementById("currentSpecificObjective")
      .value.trim();
    const cleanEvent = {
      target: { name: "currentSpecificObjective", value: "" },
    };
    if (newObjective === "" || newObjective.length > 300) return;
    setSpecificObjectives([
      { name: newObjective, completed: false },
      ...specificObjectives,
    ]);
    handleInputChange(cleanEvent);
  };

  const handleAddNewResearcherByEmail = (e) => {
    e.preventDefault();
    const newEmail = document.getElementById("currentEmail").value.trim();
    const cleanEvent = {
      target: { name: "v", value: "" },
    };
    if (newEmail === "") return;
    fetchResearchInfoByEmail(newEmail).then((newResearcherInfo) => {
      setResearcherList((researcherList) => [
        newResearcherInfo,
        ...researcherList,
      ]);
      handleInputChange(cleanEvent);
    });
  };

  const handleInputValidation = (e) => {
    handleInputChange(e);
  };

  useEffect(() => {
    if (activeProjectToUpdate) {
      resetForm(getInitialFormValuesForUpdating(activeProjectToUpdate));
      setSpecificObjectives(
        activeProjectToUpdate.objective.specificObjectives || []
      );
      //Fetch todos los investigadores de un proyecto de investigación
      startFetchAllResearchersByProjectId(id).then((researcherList) => {
        setResearcherList(researcherList);
      });
    } else {
      resetForm(formInitialValues);
      setSpecificObjectives([]);
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
              {errorsState.objective.hasErrors && (
                <ErrorFlag
                  message={errorsState.objective.message}
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
                value={duration?.startingDate}
                onChange={handleInputValidation}
              />
              <div className="project-form__input-separator"> - </div>
              <input
                type="date"
                name="endingDate"
                id="endingDate"
                className="project-form__input project-form__input--middle"
                autoComplete="off"
                value={duration?.endingDate}
                onChange={handleInputValidation}
              />
            </div>
            <div className="project-form__error-flag mt-2 mb-4">
              {errorsState?.startingDate?.hasErrors && (
                <ErrorFlag
                  message={errorsState?.startingDate?.message}
                  color="red"
                />
              )}
            </div>
            <div className="project-form__error-flag mt-2 mb-4">
              {errorsState?.endingDate?.hasErrors && (
                <ErrorFlag
                  message={errorsState?.endingDate?.message}
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
                value={objective?.generalObjective}
                onChange={handleInputValidation}
              />
            </div>
            <div className="project-form__error-flag mt-2 mb-4">
              {errorsState?.generalObjective?.hasErrors && (
                <ErrorFlag
                  message={errorsState?.generalObjective?.message}
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

            <ProjectSpecificObjectiveList
              specificObjectives={specificObjectives}
              setSpecificObjectives={setSpecificObjectives}
            />

            <div className="project-form__input-container">
              <label
                htmlFor="currentEmail"
                className="project-form__input-label"
              >
                Objetivo específico
              </label>
              <input
                type="text"
                name="currentEmail"
                id="currentEmail"
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
