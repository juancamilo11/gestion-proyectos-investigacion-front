import types from "../types/types";

const initialState = {}; //-->Logout

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        uid: action.payload.uid,
        name: action.payload.displayName,
        email: action.payload.email,
        photoURL: action.payload.photoURL,
      };
    case types.authLogout:
      return {};
    default:
      return state;
  }
};

export default authReducer;
