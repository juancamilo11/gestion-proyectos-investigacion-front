import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  formInitialErrorState,
  formInitialValues,
  getInitialFormValuesForUpdating,
} from "../../helpers/projectFormHelpers";
import useForm from "../../hooks/useForm";
import ErrorFlag from "../ui/ErrorFlag";
import ProjectSpecificObjectiveList from "./ProjectSpecificObjectiveList";

const ProjectActualizationForm = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const { projectsList } = useSelector((state) => state.projects);

  const [formValues, handleInputChange, resetForm] = useForm({});
  const [errorsState, setErrorsState] = useState(formInitialErrorState);
  const { activeProjectToUpdate } = useSelector((state) => state.projects);
  const [currentSpecificObjectiveList, setCurrentSpecificObjectiveList] =
    useState([]);

  const {
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

  const handleAddNewTag = () => {};

  const handleInputValidation = (e) => {};

  useEffect(() => {
    if (activeProjectToUpdate) {
      resetForm(getInitialFormValuesForUpdating(activeProjectToUpdate));
      setCurrentSpecificObjectiveList(activeProjectToUpdate.tagList || []);
    } else {
      resetForm(formInitialValues);
    }
  }, [activeProjectToUpdate]);

  return (
    <div className="project-form__main-container">
      <form onSubmit={handleProjectFormSubmit}>
        <button className="project-form__command-button" type="submit">
          Guardar
        </button>
        <div className="project-form__form-container">
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
                className="project-form__input"
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
                onClick={handleAddNewTag}
                className="project-form__input project-form__button-input btn btn-primary"
                type="button"
                disabled={
                  currentSpecificObjectiveList.length >= 25 ||
                  errorsState.currentSpecificObjective.hasErrors
                }
              >
                Ingresar
              </button>
            </div>

            <ProjectSpecificObjectiveList
              currentSpecificObjectiveList={currentSpecificObjectiveList}
              setCurrentSpecificObjectiveList={setCurrentSpecificObjectiveList}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProjectActualizationForm;
