import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";

const AuthRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/auth/login" element={<LoginPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AuthRouter;
