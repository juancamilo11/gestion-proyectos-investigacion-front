import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />

      {/* Agregar las otras rutas que se necesiten aquí */}
      {/* <Route path="/project/:projectId" element={<ResearchProjectView />} /> */}

      {/* Ruta por defecto --> HomePage */}
      <Route path="/*" element={<HomePage />} />
    </Routes>
  );
};

export default DashboardRoutes;
