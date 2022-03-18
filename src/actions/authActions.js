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

export const logout = () => ({
  type: types.authLogout,
});

export const startGoogleLogin = () => {
  return async (dispatch) => {
    try {
      const response = await signInWithPopup(auth, provider);
      const { uid: id, displayName, email, photoURL } = response.user;
      if (!validateEmail(email)) {
        sweetAlertForInvalidUserEmail(email);
        startGoogleLogout();
      } else {
        startFetchUserInfo({ id, displayName, email, photoURL }).then(
          (userInfo) => {
            dispatch(login({ ...userInfo }));
          }
        );
      }
    } catch (err) {
      sweetAlertForRequestResponseError();
    }
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
  } catch (error) {
    sweetAlertForRequestResponseError();
  }
};

export const startGoogleLogout = () => {
  return async (dispatch) => {
    await auth.signOut().then(() => {
      dispatch(logout());
    });
  };
};
