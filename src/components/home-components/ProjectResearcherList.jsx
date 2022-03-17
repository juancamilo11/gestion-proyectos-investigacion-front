import React from "react";
import ProjectResearcherItem from "./ProjectResearcherItem";

const ProjectResearcherList = ({ researcherList, setResearcherList }) => {
  return (
    <div>
      {researcherList.map((researcher) => (
        <ProjectResearcherItem {...researcher} />
      ))}
    </div>
  );
};

export default ProjectResearcherList;
