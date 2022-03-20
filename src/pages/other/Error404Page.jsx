import React from "react";
import { useNavigate } from "react-router-dom";

const Error404Page = () => {
  const navigate = useNavigate();
  const handleGoToHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="error-page__main-container">
      <h2 className="error-page__main-title">
        La página que estás buscando no se ha encontrado
      </h2>
      <img
        className="error-img__image"
        src={process.env.PUBLIC_URL + "/assets/img/404-not-found/404-error.png"}
        alt=""
      />
      <button onClick={handleGoToHome} className="error-page__home-btn">
        Volver a la página de inicio
      </button>
    </div>
  );
};

export default Error404Page;
