import types from "../types/types";

const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        uid: action.payload.uid,
        name: action.payload.displayName,
        email: action.payload.email,
        photoUrl: action.payload.photoUrl,
      };
    case types.authLogout:
      return {};
    default:
      return state;
  }
};

export default authReducer;
