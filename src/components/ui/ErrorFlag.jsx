import React from "react";

const ErrorFlag = ({ message, color, fontColor, width }) => {
  return (
    <div
      className="error-flag__container"
      style={{
        backgroundColor: `${color}`,
        color: `${fontColor}`,
        width: `${width}`,
      }}
    >
      <span className="error-flag__message">{message}</span>
    </div>
  );
};

export default ErrorFlag;
