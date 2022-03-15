import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleLogout } from "../../actions/authActions";
import NoProjectSelected from "../../components/home-components/NoProjectSelected";
import ProjectActualizationForm from "../../components/home-components/ProjectActualizationForm";
import UserDataActualizationForm from "../../components/home-components/UserDataActualizationForm";
import ProjectView from "../../components/home-components/ProjectView";
import Sidebar from "../../components/home-components/sidebar/Sidebar";

const HomePage = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state);

  return (
    <div className="project-catalog__main-content">
      <Sidebar />
      {projects.activeProjectToShow && <ProjectView />}
      {projects.activeProjectToUpdate && <ProjectActualizationForm />}
      {projects.activeSearchPanel && <UserDataActualizationForm />}
      {projects.activeEmptyFormForNewProject && <ProjectActualizationForm />}

      {!projects.activeProjectToShow &&
        !projects.activeProjectToUpdate &&
        !projects.activeSearchPanel &&
        !projects.activeEmptyFormForNewProject && <NoProjectSelected />}
    </div>
  );
};

export default HomePage;
