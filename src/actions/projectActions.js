import { urlBase } from "../environments/environment";
import { v4 as uuidv4 } from "uuid";
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

export const fetchResearchInfoByEmail = async (newUserEmail) => {
  try {
    const response = {
      id: uuidv4(),
      displayName: "Random name" + parseInt(Math.random() * 100),
      email: "pedrito.perez@udea.edu.co",
      photoURL:
        "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
      phoneNumber: "3122555499",
      dateOfEntry: "2020-05-10",
      role: "RESEARCH_LEADER",
      career: {
        name: "Ing. Química",
        code: "513",
      },
    };

    return response;

    // const response = await fetch(`${urlBase}/get/user/email/${newUserEmail}`);
    // if (response.ok) {
    //   return await response.json();
    // }
    // throw await response.json();
  } catch (error) {
    sweetAlertForRequestResponseError();
  }
};
