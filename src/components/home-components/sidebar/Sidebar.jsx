import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleLogout } from "../../../actions/authActions";
import { activeSearchPanel } from "../../../actions/projectActions";
import ProjectEntries from "./ProjectEntries";

const Sidebar = () => {
  const { projects, auth } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleOpenSearchPanel = (e) => {
    e.preventDefault();
    dispatch(activeSearchPanel());
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(startGoogleLogout());
  };

  const handleChangeRole = (e) => {
    e.preventDefault();
  };

  return (
    <aside className="project-catalog__sidebar">
      <div className="project-catalog__sidebar-navbar">
        <div className="project-catalog__sidebar-user-info">
          {auth?.photoURL ? (
            <img
              src={auth.photoURL}
              alt="profile pic"
              className="project-catalog__img-profile"
            />
          ) : (
            <i className="fas fa fa-user-circle project-catalog__logo-profile"></i>
          )}
          <span className="project-catalog__display-name"> {auth.name}</span>
        </div>
        <div className="project-catalog__sidebar-buttons">
          <button
            className="project-catalog__search-button"
            onClick={handleOpenSearchPanel}
          >
            Buscar y filtrar
          </button>
          <button
            className="project-catalog__logout-button"
            onClick={handleLogout}
          >
            Salir
          </button>
        </div>
      </div>
      <ProjectEntries projects={projects} />
    </aside>
  );
};

export default Sidebar;
