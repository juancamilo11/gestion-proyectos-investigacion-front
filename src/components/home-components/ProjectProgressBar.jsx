import React from "react";

const ProjectProgressBar = ({ specificObjectives }) => {
  const getProgressPercentage = () => {
    const completedObjectives = specificObjectives.filter(
      (specificObjective) => specificObjective.completed === true
    );
    const progressPercent =
      (completedObjectives.length * 100) / specificObjectives.length;

    return progressPercent.toFixed(2);
  };

  return (
    <div className="progress-bar__main-container">
      <div className="progress-bar__full-div">
        <span className="progress-bar__progress-value">
          Este proyecto lleva un avance del <b>{getProgressPercentage()}%</b>
        </span>
        <div
          className="progress-bar__calculated-div"
          style={{ width: `${getProgressPercentage()}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProjectProgressBar;
