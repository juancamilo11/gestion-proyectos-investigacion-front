import types from "./../types/types";
import app from "./../firebase/firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import fakeUserInfo from "../helpers/fakeData/fakeUserData";
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const login = (uid, displayName, email, photoURL) => ({
  type: types.authLogin,
  payload: { uid, displayName, email, photoURL },
});

export const logout = () => ({
  type: types.authLogout,
});

export const startGoogleLogin = () => {
  return async (dispatch) => {
    try {
      const response = await signInWithPopup(auth, provider);
      const { uid: id, displayName, email, photoURL } = response.user;
      //Hacer aquí la petición al back y traer la info restante del usuario
      //RESTRINGIR EL DOMINIO A UNA LISTA DE CORREOS HABILITADO, PUEDE SER UNA LISTA DE DOMINIOS DE UNIVERSIDADES DEL PAÍS
      dispatch(login(id, displayName, email, photoURL, ...fakeUserInfo));
    } catch (err) {}
  };
};

export const startGoogleLogout = () => {
  return async (dispatch) => {
    await auth.signOut().then(() => {
      dispatch(logout());
    });
  };
};
