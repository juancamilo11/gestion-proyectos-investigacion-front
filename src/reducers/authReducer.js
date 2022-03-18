import types from "../types/types";

const initialState = {}; //-->Logout

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        uid: action.payload.id,
        name: action.payload.displayName,
        email: action.payload.email,
        photoURL: action.payload.photoURL,
        phoneNumber: action.payload.phoneNumber,
        dateOfEntry: action.payload.dateOfEntry,
        role: action.payload.role,
        career: action.payload.career,
        researchProjectList: action.payload.researchProjectList,
      };
    case types.authLogout:
      return {};
    default:
      return state;
  }
};

export default authReducer;
