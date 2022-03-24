import React from "react";
import { useSelector } from "react-redux";

const ProjectResearcherItemReadOnly = ({
  basicResearcherInfo,
  phoneNumber,
  dateOfEntry,
  role,
  career,
}) => {
  const { auth } = useSelector((state) => state);

  return (
    <div>
      <div
        className="project-form__objective-item"
        style={{
          backgroundColor:
            auth.uid === basicResearcherInfo.id ? "#bdbdfc" : "white",
        }}
      >
        <img
          src={`${basicResearcherInfo.photoURL}`}
          className="project-form__researcher-photo project-view__researcher-photo"
        />
        <p>
          <b>-</b> {basicResearcherInfo.displayName}
        </p>
        <p>{basicResearcherInfo.email}</p>
        <p>
          {career.name} - {career.code}
        </p>
        <p className="project-form__researcher-role project-view__researcher-role">
          {role === "RESEARCH_LEADER" ? "Líder Investigador" : "Investigador"}
        </p>
      </div>
    </div>
  );
};

export default ProjectResearcherItemReadOnly;
