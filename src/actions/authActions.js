import { urlBase } from "../environments/environment";
import types from "./../types/types";
import app from "./../firebase/firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import fakeUserInfo from "../helpers/fakeData/fakeUserData";
import { validateEmail } from "../helpers/login/emailDomainValidator";
import { sweetAlertForInvalidUserEmail } from "../helpers/sweet-alert/sweetAlertBuilder";
import {
  projectsLogoutCleaning,
  startFetchProjectsByResearcherId,
} from "./projectActions";
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
  career
) => ({
  type: types.authLogin,
  payload: {
    id,
    displayName,
    email,
    photoURL,
    phoneNumber,
    dateOfEntry,
    role,
    career,
  },
});

export const updateUserInfo = (userInfoUpdated) => ({
  type: types.updateUserInfo,
  payload: userInfoUpdated,
});

export const logout = () => ({
  type: types.authLogout,
});

//Completada
export const startGoogleLogin = () => {
  return async (dispatch) => {
    try {
      const response = await signInWithPopup(auth, provider);
      const { uid: id, displayName, email, photoURL } = response.user;
      dispatch(login(id, displayName, email, photoURL));
      if (!validateEmail(email)) {
        setTimeout(() => {
          dispatch(startGoogleLogout());
        }, 1000);
        sweetAlertForInvalidUserEmail(email).then((res) => {});
      } else {
        startFetchUserInfo({ id, displayName, email, photoURL }).then(
          (userInfo) => {
            dispatch(
              login(
                userInfo.basicResearcherInfo.id,
                userInfo.basicResearcherInfo.displayName,
                userInfo.basicResearcherInfo.email,
                userInfo.basicResearcherInfo.photoURL,
                userInfo.phoneNumber,
                userInfo.dateOfEntry,
                userInfo.role,
                userInfo.career
              )
            );
            dispatch(
              startFetchProjectsByResearcherId(userInfo.basicResearcherInfo.id)
            );
          }
        );
      }
    } catch (error) {}
  };
};

export const startFetchUserInfo = async (userInfo) => {
  try {
    const herokuResponse = await fetch(`${urlBase}/post/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    if (herokuResponse.ok) {
      return await herokuResponse.json();
    }
    throw await herokuResponse.json();
  } catch (error) {}
};

export const startGoogleLogout = () => {
  return async (dispatch) => {
    await auth.signOut().then(() => {
      dispatch(logout());
      // dispatch(projectsLogoutCleaning());
    });
  };
};
