import React, { useEffect, useState } from "react";
import InputSearchBar from "./components/InputSearchBar";
import ProjectInfoList from "./components/ProjectInfoList";
import ConsoleAdminNavbar from "./ConsoleAdminNavbar";
import { startFetchAllProjects } from "../../actions/projectActions";

const ProjectAdministrationConsole = () => {
  //Guardar este valor en el localStorage para la experiencia de usuario

  const [searchValue, setSearchValue] = useState("");

  const [projectList, setProjectList] = useState([]);
  const [projectListToShow, setProjectListToShow] = useState([]);

  useEffect(() => {
    setProjectListToShow(
      projectList.filter((project) =>
        project.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);

  useEffect(() => {
    startFetchAllProjects().then((allProjects) => {
      setProjectList(allProjects);
      setProjectListToShow(allProjects);
    });
  });

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
        projectListToShow={projectListToShow}
        setProjectList={setProjectList}
      />
    </div>
  );
};

export default ProjectAdministrationConsole;
