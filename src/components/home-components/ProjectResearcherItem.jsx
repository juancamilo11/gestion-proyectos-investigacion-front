import React from "react";
import { createRoutesFromChildren } from "react-router-dom";

const ProjectResearcherItem = ({
  id,
  displayName,
  email,
  photoURL,
  phoneNumber,
  dateOfEntry,
  role,
  career,
}) => {
  const handleDeleteResearcher = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="project-form__objective-item">
        <img src={photoURL} className="project-form__researcher-photo" />
        <p>
          <b>-</b> {displayName}
        </p>
        <p>{email}</p>
        <p>
          {career.name} - {career.code}
        </p>
        <p className="project-form__researcher-role">
          {role === "RESEARCH_LEADER" ? "Líder Investigador" : "Investigador"}
        </p>

        <div className="project-form-specific-objective-info">
          <button
            className="project-form__delete-specific-objective"
            onClick={handleDeleteResearcher}
          >
            <i className="fas fa-trash-alt "></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectResearcherItem;
