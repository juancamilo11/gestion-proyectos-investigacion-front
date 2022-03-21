import React from "react";
import { v4 as uuidv4 } from "uuid";
import ErrorFlag from "../ui/ErrorFlag";
import ProjectResearcherItem from "./ProjectResearcherItem";

const ProjectResearcherList = ({ researcherList, setResearcherList }) => {
  return (
    <div className="project-form__researcher-list-container">
      <div>
        <h3>
          {researcherList.length === 0 ? (
            <ErrorFlag
              message="Aún no hay investigadores agregados al proyecto"
              color="#f54d4d"
              fontColor="white"
              width="85%"
            />
          ) : (
            <h3 className="project-form__specific-objectives-title">
              Lista de investigadores
            </h3>
          )}
        </h3>
      </div>
      {researcherList.map((researcher) => (
        <ProjectResearcherItem
          {...researcher}
          setResearcherList={setResearcherList}
        />
      ))}
    </div>
  );
};

export default ProjectResearcherList;
