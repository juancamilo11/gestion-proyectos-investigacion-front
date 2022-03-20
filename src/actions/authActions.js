import { urlBase } from "../environments/environment";
import types from "./../types/types";
import app from "./../firebase/firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import fakeUserInfo from "../helpers/fakeData/fakeUserData";
import { validateEmail } from "../helpers/login/emailDomainValidator";
import {
  sweetAlertForInvalidUserEmail,
  sweetAlertForRequestResponseError,
} from "../helpers/sweet-alert/sweetAlertBuilder";
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const login = (
  id,
  displayName,
  email,
  photoURL,
  phoneNumber,
  dateOfEntry,
  role,
  career,
  researchProjectList
) => ({
  type: types.authLogin,
  payload: {
    id,
    displayName,
    email,
    photoURL,
    phoneNumber: phoneNumber || "",
    dateOfEntry: dateOfEntry || "",
    role: role || "RESEARCHER",
    career: career || { name: "", code: "" },
    researchProjectList: researchProjectList || [],
  },
});

export const logout = () => ({
  type: types.authLogout,
});

export const startGoogleLogin = () => {
  return async (dispatch) => {
    try {
      const response = await signInWithPopup(auth, provider);
      const { uid: id, displayName, email, photoURL } = response.user;
      dispatch(login(id, displayName, email, photoURL));
      if (!validateEmail(email)) {
        dispatch(startGoogleLogout());
        sweetAlertForInvalidUserEmail(email);
      } else {
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
      }
    } catch (error) {
      sweetAlertForRequestResponseError(
        "Se ha presentado el siguiente error: " + JSON.stringify(error)
      );
    }
  };
};

export const startFetchUserInfo = async (userInfo) => {
  return {
    id: "12345",
    displayName: "Juan Camilo",
    email: "juan@udea.edu.co",
    photoURL: "http://foto.png",
    phoneNumber: "2324325",
    dateOfEntry: "2020-03-10",
    role: "RESEARCH_LEADER",
    // role: "RESEARCHER",
    // role: "ADMINISTRATOR",
    career: { name: "Ing. de Sistemas", code: "503" },
    researchProjectList: [], //--> Agregar contenido
  };

  // try {
  //   const herokuResponse = await fetch(`${urlBase}/post/user`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(userInfo),
  //   });
  //   if (herokuResponse.ok) {
  //     return await herokuResponse.json();
  //   }
  //   throw await herokuResponse.json();
  // } catch (error) {
  //   sweetAlertForRequestResponseError(
  //     "Se ha presentado el siguiente error: " + JSON.stringify(error)
  //   );
  // }
};

export const startGoogleLogout = () => {
  return async (dispatch) => {
    await auth.signOut().then(() => {
      dispatch(logout());
    });
  };
};
