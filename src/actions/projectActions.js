import { urlBase } from "../environments/environment";
import { v4 as uuidv4 } from "uuid";
import { sweetAlertForRequestResponseError } from "../helpers/sweet-alert/sweetAlertBuilder";
import types from "../types/types";
import { async } from "@firebase/util";

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

export const loadProjects = (projects) => ({
  type: types.loadProjects,
  payload: projects,
});

export const projectsLogoutCleaning = () => ({
  type: types.projectsLogoutCleaning,
  payload: null,
});

export const startFetchProjectsByResearcherId = (researcherId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${urlBase}/get/projects/user/${researcherId}`
      );
      if (response.ok) {
        const projectsList = await response.json();
        dispatch(loadProjects(projectsList));
      }
      throw await response.json();
    } catch (error) {}
  };
};

export const startFetchAllResearchersByProjectId = async (projectId) => {
  try {
    const response = await fetch(`${urlBase}/get/users/project/${projectId}`);
    if (response.ok) {
      return await response.json();
    }
    throw await response.json();
  } catch (error) {}
};

export const fetchResearchInfoByEmail = async (newUserEmail) => {
  try {
    const response = await fetch(`${urlBase}/get/user/email/${newUserEmail}`);
    if (response.ok) {
      return await response.json();
    }
    throw await response.json();
  } catch (error) {}
};

export const startFetchAllEnrolledResearchersInProject = async (projectId) => {
  try {
    const response = await fetch(`${urlBase}/get/users/${projectId}`);
    if (response.ok) {
      return await response.json();
    }
    throw await response.json();
  } catch (error) {}
};

export const startPostNewResearchProject = async (researchProject) => {
  try {
    const response = await fetch(`${urlBase}/post/project`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(researchProject),
    });
    if (response.ok) {
      return await response.json();
    }
    throw await response.json();
  } catch (error) {}
};

export const startFetchAllProjects = async () => {
  try {
    const response = await fetch(`${urlBase}/get/projects/`);
    if (response.ok) {
      return await response.json();
    }
    throw await response.json();
  } catch (error) {}
};

export const startFetchAllPeople = async () => {
  try {
    const response = await fetch(`${urlBase}/get/users`);
    if (response.ok) {
      return await response.json();
    }
    throw await response.json();
  } catch (error) {}
};

export const startDeleteResearchProjectById = async (projectId) => {
  try {
    const response = await fetch(`${urlBase}/delete/project/${projectId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return await response.json();
    }
    throw await response.json();
  } catch (error) {}
};

export const startDeleteUserById = async (userId) => {
  try {
    const response = await fetch(`${urlBase}/delete/user/${userId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return await response.json();
    }
    throw await response.json();
  } catch (error) {}
};
