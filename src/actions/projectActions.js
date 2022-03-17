import { urlBase } from "../environments/environment";
import { sweetAlertForRequestResponseError } from "../helpers/sweet-alert/sweetAlertBuilder";
import types from "../types/types";

export const activeProjectToShow = (projectId, project) => ({
  type: types.setActiveProjectToShow,
  payload: { projectId, ...project },
});

export const activeProjectToUpdate = (projectId, project) => ({
  type: types.setActiveProjectToUpdate,
  payload: { projectId, ...project },
});

export const activeSearchPanel = () => ({
  type: types.setActiveSearchPanel,
  payload: null,
});

export const activeNothingToShow = () => ({
  type: types.setNothingToShow,
  payload: null,
});

export const activeNewProject = () => ({
  type: types.setNewProjectForm,
  payload: null,
});

export const modifyProject = (projectId, project) => ({
  type: types.modifyProject,
  payload: { projectId, ...project },
});

export const deleteProject = (projectId, projectsList) => ({
  type: types.deleteProject,
  payload: { projectId, projectsList },
});

const fetchAllUserProjects = (allUserProjects) => ({
  type: types.fetchAllUserProjects,
  payload: allUserProjects,
});

export const startFetchAllResearchersByProjectId = async (projectId) => {
  try {
    const response = await fetch(`${urlBase}/get/users/project/${projectId}`);
    if (response.ok) {
      return await response.json();
    }
    throw await response.json();
  } catch (error) {
    sweetAlertForRequestResponseError();
  }
};
