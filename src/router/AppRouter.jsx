import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { login, startFetchUserInfo } from "../actions/authActions";
import Loader from "../components/ui/Loader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import LoginPage from "../pages/login/LoginPage";
import DashboardRoutes from "./DashboardRoutes";
import PrivateRoute from "./PrivateRoute";
import fakeUserInfo from "../helpers/fakeData/fakeUserData";

const AppRouter = () => {
  const [checkingAuthState, setCheckingAuthState] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        const { uid: id, displayName, email, photoURL } = user;
        dispatch(login(id, displayName, email, photoURL));
        startFetchUserInfo({ id, displayName, email, photoURL }).then(
          (userInfo) => {
            dispatch(
              login(
                userInfo.id,
                userInfo.displayName,
                userInfo.email,
                userInfo.photoURL,
                userInfo.phoneNumber,
                userInfo.dateOfEntry,
                userInfo.role,
                userInfo.career,
                userInfo.researchProjectList
              )
            );
          }
        );
      } else {
        setIsLoggedIn(false);
      }
      setCheckingAuthState(false);
    });
  }, []);

  if (checkingAuthState) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
