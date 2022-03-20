import React from "react";
import { useSelector } from "react-redux";

const ProjectResearcherItemReadOnly = ({
  id,
  displayName,
  email,
  photoURL,
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
        style={{ backgroundColor: auth.uid === id ? "red" : "white" }}
      >
        <img src={photoURL} className="project-form__researcher-photo" />
        <p>
          <b>-</b> {displayName}
        </p>
        <p>{email}</p>
        <p>
          {career.name} - {career.code}
        </p>
        <p className="project-form_researcher-role project-view_researcher-role">
          {role === "RESEARCH_LEADER"
            ? "Líder Investigadorrr"
            : "Investigadorr"}
        </p>
      </div>
    </div>
  );
};

export default ProjectResearcherItemReadOnly;