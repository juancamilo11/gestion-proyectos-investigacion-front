import React from "react";

const NoProjectSelected = () => {
  return (
    <div className="no-project__main-container">
      <img
        src={process.env.PUBLIC_URL + "assets/img/home/rocket.png"}
        alt=""
        className="no-project__image"
      />
      <h3 className="no-project__title">
        No has seleccionado ningún proyecto de investigación aún.
      </h3>
    </div>)
};

export default NoProjectSelected;
