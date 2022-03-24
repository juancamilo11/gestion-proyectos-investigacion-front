const types = {
  authLogin: "[auth] login",
  authLogout: "[auth] logout",
  updateUserInfo: "[auth] UpdateUserInfo",

  setActiveProjectToShow: "[Projects] setActiveProjectToShow",
  setActiveProjectToUpdate: "[Projects] setActiveProjectToUpdate",
  setActiveSearchPanel: "[Projects] setActiveSearchPanel",
  setNothingToShow: "[Projects] setNothingToShow",
  setNewProjectForm: "[Projects] setNewProjectForm",
  setActiveUserForm: "[Projects] setNewUserForm",

  loadProjects: "[Projects] loadProjects",
  projectsLogoutCleaning: "[Projects] projectsLogoutCleaning",
  deleteProject: "[Projects] deleteProject",
  registerProjectView: "[Projects] registerProjectView",
  addProjectToProjectsList: "[Projects] addProjectToProjectsList",
  fetchAllUserProjects: "[Projects] fetchAllUserProjects",
};

export default types;
