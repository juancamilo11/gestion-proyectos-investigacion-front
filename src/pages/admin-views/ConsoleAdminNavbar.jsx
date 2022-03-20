import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startGoogleLogout } from "../../actions/authActions";

const ConsoleAdminNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((state) => state);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(startGoogleLogout());
  };

  const handleGoToResearchersView = (e) => {
    e.preventDefault();
    navigate("/user-administration");
  };
  const handleGoToProjectsView = (e) => {
    e.preventDefault();
    navigate("/project-administration");
  };

  return (
    <div className="project-catalog__sidebar-navbar admin-console__navbar">
      <div className="project-catalog__sidebar-user-info admin-console__user-info">
        {auth?.photoURL ? (
          <img
            // src={auth.photoURL}
            src={
              "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"
            }
            alt="profile pic"
            className="project-catalog__img-profile"
          />
        ) : (
          <i className="fas fa fa-user-circle project-catalog__logo-profile"></i>
        )}
        <span className="project-catalog__display-name"> {auth.name}</span>
      </div>
      <div className="project-catalog__sidebar-buttons admin-console__sidebar-buttons">

        <p>Vista de administrador de plataforma</p>
        <button
          className="project-catalog__logout-button"
          onClick={handleGoToResearchersView}
        >
          Personas
        </button>
        <button
          className="project-catalog__logout-button"
          onClick={handleGoToProjectsView}
        >
          Proyectos
        </button>
        <button
          className="project-catalog__logout-button"
          onClick={handleLogout}
        >
          Salir
        </button>
      </div>
    </div>
  );
};

export default ConsoleAdminNavbar;
