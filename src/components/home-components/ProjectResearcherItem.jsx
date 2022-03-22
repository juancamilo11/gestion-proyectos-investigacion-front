import React from "react";
import { useSelector } from "react-redux";
import { createRoutesFromChildren } from "react-router-dom";
import { sweetAlertForDeleteAResearchFromAProject } from "../../helpers/sweet-alert/sweetAlertBuilder";

const ProjectResearcherItem = ({
  basicResearcherInfo,
  phoneNumber,
  dateOfEntry,
  role,
  career,
  setResearcherList,
}) => {
  const { auth } = useSelector((state) => state);

  const handleDeleteResearcher = (e) => {
    e.preventDefault();
    sweetAlertForDeleteAResearchFromAProject(
      basicResearcherInfo.displayName,
      basicResearcherInfo.photoURL
    ).then((res) => {
      if (res.isConfirmed) {
        setResearcherList((researcherList) =>
          researcherList.filter(
            (researcher) => researcher.id !== basicResearcherInfo.id
          )
        );
      }
    });
  };

  return (
    <div>
      <div className="project-form__objective-item">
        <img
          src={basicResearcherInfo.photoURL}
          className="project-form__researcher-photo"
        />
        <p>
          <b>-</b> {basicResearcherInfo.displayName}
        </p>
        <p>{basicResearcherInfo.email}</p>
        <p>
          {career?.name} - {career?.code}
        </p>
        <p className="project-form__researcher-role">
          {role === "RESEARCH_LEADER" ? "Líder Investigador" : "Investigador"}
        </p>

        <div className="project-form-specific-objective-info">
          {auth.uid !== basicResearcherInfo.id && (
            <button
              className="project-form__delete-specific-objective"
              onClick={handleDeleteResearcher}
            >
              <i className="fas fa-trash-alt "></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectResearcherItem;
