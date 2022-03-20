import React from "react";
import ErrorFlag from "../../../components/ui/ErrorFlag";
import ProjectInfoItem from "./ProjectInfoItem";

const ProjectInfoList = ({ projectList, setProjectList }) => {
  return (
    <div className="project-form__researcher-list-container">
      <div>
        <h3>
          {projectList.length === 0 && (
            <ErrorFlag
              message="Aún no hay proyectos de investigación registrados en la aplicación"
              color="#f54d4d"
              fontColor="white"
              width="90%"
            />
          )}
        </h3>
      </div>
      {projectList.map((project) => (
        <ProjectInfoItem {...project} setProjectList={setProjectList} />
      ))}
    </div>
  );
};

export default ProjectInfoList;