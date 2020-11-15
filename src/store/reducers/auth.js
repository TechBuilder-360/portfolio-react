import * as actionTypes from "../actions/actionType";
import { updateObject } from "../../shared/utility";

const initialState = {
  token: null,
  username: null,
  error: null,
  loading: false,
//   authRedirectPath: "/",
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.action.token,
    username: action.action.username,
  });
};

const googleAuthFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const authLogout = (state, action) => {
  return updateObject(state, { token: null, username: null });
};

// const setAuthRedirectPath = (state, action) => {
//   return updateObject(state, { authRedirectPath: action.path });
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SESSION_TOKEN_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.GOOGLE_AUTH_FAIL:
      return googleAuthFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    // case actionTypes.SET_AUTH_REDIRECT_PATH:
    //   return setAuthRedirectPath(state, action);
    default:
      return state;
  }
};

export default reducer;
