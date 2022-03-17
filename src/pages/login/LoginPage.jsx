import React from "react";
import { useDispatch } from "react-redux";
import { startGoogleLogin } from "../../actions/authActions";
import pickRandomImage from "../../helpers/login/rangomImageGenerator";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLoginWithGoogle = (e) => {
    e.preventDefault();
    dispatch(startGoogleLogin());
  };

  return (
    <div className="login__main-container">
      <div className="login__sidebar">
        <div className="login__welcome-section">
          <img
            src={process.env.PUBLIC_URL + "/assets/img/login/logo-UdeA.png"}
            className="login__welcome-section-img"
            alt="logo"
          />
          <h3 className="login__welcome-section-title">
            El más completo administrador de proyectos de investigación de la
            Universidad de Antioquia
          </h3>
        </div>
        <div className="login__login-buttons-section">
          <button
            onClick={handleLoginWithGoogle}
            className="login__button-login login__button-google"
          >
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/img/login/google-img-button.png"
              }
              className="login__login-buttons-img"
              alt="google-login"
            />
            <span className="login__login-button-text">
              Ingresar con Google
            </span>
          </button>
        </div>
      </div>
      <div
        className="login__welcome-img-container"
        style={{
          backgroundImage: `url(${pickRandomImage()})`,
        }}
      >
        <section className="login__app-description">
          <h3 className="login__app-description-title">
            Administración de Proyectos de Investigación
          </h3>
          <h5 className="login__app-description-title">
            Universidad de Antioquia
          </h5>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
