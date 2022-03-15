import types from "../types/types";

const initialState = {
  projectsList: [],
  activeProjectToShow: null,
  activeProjectToUpdate: null,
  activeSearchPanel: false,
  activeEmptyFormForNewProject: false,
};

export const ProjectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setActiveProjectToShow:
      return {
        ...state,
        activeProjectToShow: {
          ...action.payload,
        },
        activeProjectToUpdate: null,
        activeSearchPanel: false,
        activeEmptyFormForNewProject: false,
      };

    case types.setActiveProjectToUpdate:
      return {
        ...state,
        activeProjectToShow: null,
        activeProjectToUpdate: {
          ...action.payload,
        },
        activeSearchPanel: false,
        activeEmptyFormForNewProject: false,
      };

    case types.setActiveSearchPanel:
      return {
        ...state,
        activeProjectToShow: null,
        activeProjectToUpdate: null,
        activeSearchPanel: true,
        activeEmptyFormForNewProject: false,
      };

    case types.setNothingToShow:
      return {
        ...state,
        activeProjectToShow: null,
        activeProjectToUpdate: null,
        activeSearchPanel: false,
        activeEmptyFormForNewProject: false,
      };

    case types.setNewProjectForm:
      return {
        ...state,
        activeProjectToShow: null,
        activeProjectToUpdate: null,
        activeSearchPanel: false,
        activeEmptyFormForNewProject: true,
      };

    case types.loadProjects:
      return {
        ...state,
        projectsList: [...action.payload],
      };

    case types.projectsLogoutCleaning:
      return { ...state, activeProject: null, projectsList: [] };

    case types.deleteProject:
      return {
        ...state,
        projectsList: action.payload.projectsList.filter(
          (Project) => Project.id !== action.payload.ProjectId
        ),
      };

    case types.registerProjectView:
      const { viewsCount } = action.payload.Projects.find(
        (Project) => Project.id === action.payload.ProjectId
      );
      return {
        ...state,
        projectsList: action.payload.Projects.map((Project) =>
          Project.id === action.payload.ProjectId
            ? { ...Project, viewsCount: viewsCount + 1 }
            : Project
        ),
      };

    case types.addProjectToProjectsList:
      return {
        ...state,
        projectsList: [
          action.payload.updatedProject,
          ...action.payload.projectsList,
        ],
      };

    case types.fetchAllUserProjects:
      return {
        ...state,
        projectsList: action.payload,
      };

    default:
      return state;
  }
};

export default ProjectsReducer;
