import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import HomePage from "../pages/home/HomePage";

const PublicRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);

  return auth?.uid ? <Navigate to="/" element={<HomePage />} /> : children;
};

export default PublicRoute;
