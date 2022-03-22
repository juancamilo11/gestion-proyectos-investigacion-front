import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { startGoogleLogout } from "../../../actions/authActions";
import ProjectEntries from "./ProjectEntries";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { auth, projects } = useSelector((state) => state);
  const [projectListToShow, setProjectListToShow] = useState(
    projects.projectsList
  );

  useEffect(() => {
    setProjectListToShow(projects.projectsList);
  });

  const [filterValue, setFilterValue] = useState("");
  const [hasFilters, setHasFilters] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(startGoogleLogout());
  };

  const handleDeleteFilters = (e) => {
    e.preventDefault();
    setProjectListToShow(projects.projectsList);
    setHasFilters(false);
    setFilterValue("");
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
            className="project-catalog__logout-button"
            onClick={handleLogout}
          >
            Salir
          </button>
        </div>
      </div>
      <ProjectEntries projectListToShow={projectListToShow} />
    </aside>
  );
};

export default Sidebar;
