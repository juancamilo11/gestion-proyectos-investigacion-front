import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ProjectAdministrationConsole from "../pages/admin-views/ProjectAdministrationConsole";
import UserAdministrationConsole from "../pages/admin-views/UserAdministrationConsole";
import HomePage from "../pages/home/HomePage";
import Error404Page from "../pages/other/Error404Page";

const DashboardRoutes = () => {
  const { role } = useSelector((state) => state.auth);
  return (
    <Routes>
      {role === "ADMINISTRATOR" ? (
        <>
          <Route
            exact
            path="/user-administration"
            element={<UserAdministrationConsole />}
          />

          <Route
            exact
            path="/project-administration"
            element={<ProjectAdministrationConsole />}
          />

          <Route exact path="/*" element={<ProjectAdministrationConsole />} />
        </>
      ) : (
        <Route exact path="/" element={<HomePage />} />
      )}

      <Route path="/*" element={<Error404Page />} />
    </Routes>
  );
};

export default DashboardRoutes;
