import React from "react";

const ErrorFlag = ({ message, color, fontColor }) => {
  return (
    <div
      className="error-flag__container"
      style={{ backgroundColor: `${color}`, color: `${fontColor}` }}
    >
      <span className="error-flag__message">{message}</span>
    </div>
  );
};

export default ErrorFlag;
