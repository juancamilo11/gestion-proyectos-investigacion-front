import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { startGoogleLogout } from "../../../actions/authActions";
import { activeSearchPanel } from "../../../actions/projectActions";
import { sweetAlertForSearchAndFilterProjectsBuilder } from "../../../helpers/sweet-alert/sweetAlertBuilder";
import ProjectEntries from "./ProjectEntries";

const Sidebar = () => {
  const { projects, auth } = useSelector((state) => state);
  const [projectListToShow, setProjectListToShow] = useState(
    projects.projectsList
  );
  const [filterValue, setFilterValue] = useState("");
  const [hasFilters, setHasFilters] = useState(false);
  const dispatch = useDispatch();

  const handleOpenSearchPanel = (e) => {
    e.preventDefault();
    sweetAlertForSearchAndFilterProjectsBuilder().then((res) => {
      if (res.isConfirmed) {
        if (!res.value) {
          Swal.fire({
            icon: "error",
            text: "Error, por favor ingrese un nombre válido para la búsqueda.",
          });
          return;
        }
        const newShowedProjects = projects.projectsList.map(
          (project) => project.name.toLowerCase() === res.value.toLowerCase()
        );
        setProjectListToShow(newShowedProjects);
        setHasFilters(true);
        setFilterValue(res.value);
      }
    });
  };
  // {"isConfirmed":true,"isDenied":false,"isDismissed":false,"value":"hola"}
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
          {hasFilters && (
            <button
              title={`Eliminar el filtro ${filterValue}`}
              className="project-catalog__search-button project-catalog__delete-filter-button"
              onClick={handleDeleteFilters}
            >
              <i className="fas fa-filter"></i>
            </button>
          )}

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
      <ProjectEntries projectListToShow={projectListToShow} />
    </aside>
  );
};

export default Sidebar;
