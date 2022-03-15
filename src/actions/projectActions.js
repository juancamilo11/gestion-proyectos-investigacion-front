import { urlBase } from "../environments/environment";
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

export const deleteProject = (projectId, memoriesList) => ({
  type: types.deleteProject,
  payload: { projectId, memoriesList },
});

const fetchAllUserMemories = (allUserMemories) => ({
  type: types.fetchAllUserMemories,
  payload: allUserMemories,
});
