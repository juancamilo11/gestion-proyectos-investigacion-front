import React from "react";
import { useDispatch } from "react-redux";
import { startGoogleLogin } from "../../actions/authActions";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startGoogleLogin());
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
