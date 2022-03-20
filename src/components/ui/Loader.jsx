import React from "react";

const Loader = () => {
  return (
    <div className="loader__main-container">
      <img
        className="loader__animated-img"
        src={process.env.PUBLIC_URL + "/assets/img/loader/main-loader.svg"}
        alt=""
      />
      <h4 className="loader__text">Cargando...</h4>
    </div>
  );
};

export default Loader;
