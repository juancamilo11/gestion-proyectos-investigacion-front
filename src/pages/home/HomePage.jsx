import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleLogout } from "../../actions/authActions";
import NoProjectSelected from "../../components/home-components/NoProjectSelected";
import ProjectActualizationForm from "../../components/home-components/ProjectActualizationForm";
import ProjectSearchPanel from "../../components/home-components/ProjectSearchPanel";
import ProjectView from "../../components/home-components/ProjectView";
import Sidebar from "../../components/home-components/Sidebar";

const HomePage = () => {
  const dispatch = useDispatch();

  const { projects } = useSelector((state) => state);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(startGoogleLogout());
  };
  return (
    <div className="project-catalog__main-content">
      <Sidebar />
      {projects.activeProjectToShow && <ProjectView />}
      {projects.activeProjectToUpdate && <ProjectActualizationForm />}
      {projects.activeSearchPanel && <ProjectSearchPanel />}
      {projects.activeEmptyFormForNewProject && <ProjectActualizationForm />}

      {!projects.activeProjectToShow &&
        !projects.activeProjectToUpdate &&
        !projects.activeSearchPanel &&
        !projects.activeEmptyFormForNewProject && <NoProjectSelected />}
    </div>
  );
};

export default HomePage;
