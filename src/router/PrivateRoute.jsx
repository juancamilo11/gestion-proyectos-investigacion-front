import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";

const PrivateRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);

  return auth?.uid ? (
    children
  ) : (
    <Navigate to="/auth/login" element={<LoginPage />} />
  );
};

export default PrivateRoute;
