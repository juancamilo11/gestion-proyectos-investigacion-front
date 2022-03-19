import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { startGoogleLogout } from "../../../actions/authActions";
import { activeSearchPanel } from "../../../actions/projectActions";
import { sweetAlertForSearchAndFilterProjectsBuilder } from "../../../helpers/sweet-alert/sweetAlertBuilder";
import ProjectEntries from "./ProjectEntries";

const projects = {
  projectsList: [
    {
      id: "3249KM-3C875843-53485C",
      name: "Investigación de Microbacterias",
      budget: 3500000,
      objective: {
        generalObjective:
          "Proponer un modelo para el estudio de las microbacterias",
        specificObjectives: [
          {
            description: "descripcion objetivo especifico 1",
            completed: false,
          },
          {
            description: "descripcion objetivo especifico 1",
            completed: false,
          },
          {
            description: "descripcion objetivo especifico 1",
            completed: false,
          },
          {
            description: "descripcion objetivo especifico 1",
            completed: false,
          },
        ],
      },
      duration: {
        startingDate: "2022-02-05",
        endingDate: "2022-04-10",
      },
    },
    {
      id: "348MX83-3C875843-53485C",
      name: "Investigación de Microbacterias",
      budget: 3500000,
      objective: {
        generalObjective:
          "Proponer un modelo para el estudio de las microbacterias",
        specificObjectives: [
          {
            description: "descripcion objetivo especifico 1",
            completed: false,
          },
          {
            description: "descripcion objetivo especifico 1",
            completed: false,
          },
          {
            description: "descripcion objetivo especifico 1",
            completed: false,
          },
          {
            description: "descripcion objetivo especifico 1",
            completed: false,
          },
        ],
      },
      duration: {
        startingDate: "2022-02-05",
        endingDate: "2022-04-10",
      },
    },
    {
      id: "023X9378-3C875843-53485C",
      name: "Investigación de Microbacterias",
      budget: 3500000,
      objective: {
        generalObjective:
          "Proponer un modelo para el estudio de las microbacterias",
        specificObjectives: [
          {
            description: "descripcion objetivo especifico 1",
            completed: false,
          },
          {
            description: "descripcion objetivo especifico 1",
            completed: false,
          },
          {
            description: "descripcion objetivo especifico 1",
            completed: false,
          },
          {
            description: "descripcion objetivo especifico 1",
            completed: false,
          },
        ],
      },
      duration: {
        startingDate: "2022-02-05",
        endingDate: "2022-04-10",
      },
    },
    {
      id: "345G45-3C875843-53485C",
      name: "Investigación de Microbacterias",
      budget: 3500000,
      objective: {
        generalObjective:
          "Proponer un modelo para el estudio de las microbacterias",
        specificObjectives: [
          {
            description: "descripcion objetivo especifico 1",
            completed: false,
          },
          {
            description: "descripcion objetivo especifico 1",
            completed: false,
          },
          {
            description: "descripcion objetivo especifico 1",
            completed: false,
          },
          {
            description: "descripcion objetivo especifico 1",
            completed: false,
          },
        ],
      },
      duration: {
        startingDate: "2022-02-05",
        endingDate: "2022-04-10",
      },
    },
    {
      id: "345F3-3C875843-53485C",
      name: "Investigación de Microbacterias",
      budget: 3500000,
      objective: {
        generalObjective:
          "Proponer un modelo para el estudio de las microbacterias",
        specificObjectives: [
          {
            description: "descripcion objetivo especifico 1",
            completed: false,
          },
          {
            description: "descripcion objetivo especifico 1",
            completed: false,
          },
          {
            description: "descripcion objetivo especifico 1",
            completed: false,
          },
          {
            description: "descripcion objetivo especifico 1",
            completed: false,
          },
        ],
      },
      duration: {
        startingDate: "2022-02-05",
        endingDate: "2022-04-10",
      },
    },
  ],
};

const Sidebar = () => {
  const navigate = useNavigate();
  // const { projects, auth } = useSelector((state) => state);

  // const [projectListToShow, setProjectListToShow] = useState(
  //   projects.projectsList
  // );

  //-------PRUEBA------
  const { auth } = useSelector((state) => state);
  const [projectListToShow, setProjectListToShow] = useState(
    projects.projectsList
  );
  //-------PRUEBA------

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

  const handleGoTouserAdministrationConsole = (e) => {
    e.preventDefault();
    navigate("/user-administration");
  };
  const handleGoToProjectAdministrationConsole = (e) => {
    e.preventDefault();
    navigate("/project-administration");
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
      {/* {JSON.stringify(projects.projectsList[0])} */}
      <button onClick={handleGoTouserAdministrationConsole}>
        ir a admin de usuarios
      </button>
      <button onClick={handleGoToProjectAdministrationConsole}>
        ir a admin de proyectos
      </button>
      <ProjectEntries projectListToShow={projectListToShow} />
    </aside>
  );
};

export default Sidebar;
