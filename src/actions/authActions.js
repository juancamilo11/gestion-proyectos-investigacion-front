import types from "./../types/types";
import app from "./../firebase/firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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
      const { uid, displayName, email, photoURL } = response.user;
      dispatch(login(uid, displayName, email, photoURL));
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
