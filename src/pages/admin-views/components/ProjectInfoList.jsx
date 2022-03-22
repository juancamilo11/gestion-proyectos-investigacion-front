import React from "react";
import ErrorFlag from "../../../components/ui/ErrorFlag";
import ProjectInfoItem from "./ProjectInfoItem";

const ProjectInfoList = ({ projectListToShow, setProjectList }) => {
  return (
    <div className="project-form__researcher-list-container">
      <div>
        <h3>
          {projectListToShow.length === 0 && (
            <ErrorFlag
              message="Aún no hay proyectos de investigación para mostrar"
              color="#f54d4d"
              fontColor="white"
              width="90%"
            />
          )}
        </h3>
      </div>
      {projectListToShow.map((project) => (
        <ProjectInfoItem {...project} setProjectList={setProjectList} />
      ))}
    </div>
  );
};

export default ProjectInfoList;
