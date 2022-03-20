import React, { useEffect, useState } from "react";
import InputSearchBar from "./components/InputSearchBar";
import ProjectInfoList from "./components/ProjectInfoList";
import ConsoleAdminNavbar from "./ConsoleAdminNavbar";
import { v4 as uuidv4 } from "uuid";

const fakeProjectList = [
  {
    projectId: uuidv4(),
    name: "Investigación de agujeros negros",
    budget: 3500000,
    objective: {
      generalObjective:
        "Proponer un modelo para el estudio de las microbacterias",
      specificObjectives: [
        { description: "descripcion objetivo especifico 1", completed: false },
        { description: "descripcion objetivo especifico 1", completed: false },
        { description: "descripcion objetivo especifico 1", completed: false },
        { description: "descripcion objetivo especifico 1", completed: false },
      ],
    },
    duration: { startingDate: "2022-02-05", endingDate: "2022-04-10" },
  },
  {
    projectId: uuidv4(),
    name: "Investigación de Microbacterias",
    budget: 3500000,
    objective: {
      generalObjective:
        "Proponer un modelo para el estudio de las microbacterias",
      specificObjectives: [
        { description: "descripcion objetivo especifico 1", completed: false },
        { description: "descripcion objetivo especifico 1", completed: false },
        { description: "descripcion objetivo especifico 1", completed: false },
        { description: "descripcion objetivo especifico 1", completed: false },
      ],
    },
    duration: { startingDate: "2022-02-05", endingDate: "2022-04-10" },
  },
  {
    projectId: uuidv4(),
    name: "Investigación de parásitos",
    budget: 3500000,
    objective: {
      generalObjective:
        "Proponer un modelo para el estudio de las microbacterias",
      specificObjectives: [
        { description: "descripcion objetivo especifico 1", completed: false },
        { description: "descripcion objetivo especifico 1", completed: false },
        { description: "descripcion objetivo especifico 1", completed: false },
        { description: "descripcion objetivo especifico 1", completed: false },
      ],
    },
    duration: { startingDate: "2022-02-05", endingDate: "2022-04-10" },
  },
  {
    projectId: uuidv4(),
    name: "Investigación de los sistemas de información",
    budget: 3500000,
    objective: {
      generalObjective:
        "Proponer un modelo para el estudio de las microbacterias",
      specificObjectives: [
        { description: "descripcion objetivo especifico 1", completed: false },
        { description: "descripcion objetivo especifico 1", completed: false },
        { description: "descripcion objetivo especifico 1", completed: false },
        { description: "descripcion objetivo especifico 1", completed: false },
      ],
    },
    duration: { startingDate: "2022-02-05", endingDate: "2022-04-10" },
  },
  {
    projectId: uuidv4(),
    name: "Investigación de Microplantas",
    budget: 3500000,
    objective: {
      generalObjective:
        "Proponer un modelo para el estudio de las microbacterias",
      specificObjectives: [
        { description: "descripcion objetivo especifico 1", completed: false },
        { description: "descripcion objetivo especifico 1", completed: false },
        { description: "descripcion objetivo especifico 1", completed: false },
        { description: "descripcion objetivo especifico 1", completed: false },
      ],
    },
    duration: { startingDate: "2022-02-05", endingDate: "2022-04-10" },
  },
];

const ProjectAdministrationConsole = () => {
  //Guardar este valor en el localStorage para la experiencia de usuario

  const [searchValue, setSearchValue] = useState("");

  const [projectList, setProjectList] = useState(fakeProjectList);

  useEffect(() => {
    // startFetchProjects().then((project) => {
    //   setProjectList(project);
    // });

    setProjectList(
      fakeProjectList.filter((project) =>
        project.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);

  return (
    <div>
      <ConsoleAdminNavbar />

      <h2 className="admin-console__main-title">
        Lista completa de proyectos de investigación
      </h2>

      <InputSearchBar
        setSearchValue={setSearchValue}
        inputPlaceholder="Ingresa el nombre del proyecto de investigación que deseas buscar"
      />

      <ProjectInfoList
        projectList={projectList}
        setProjectList={setProjectList}
      />
    </div>
  );
};

export default ProjectAdministrationConsole;
