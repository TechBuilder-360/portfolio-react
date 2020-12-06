import * as actionTypes from "../actions/actionType";
import { updateObject } from "../../shared/utility";
import cookie from "react-cookies";

const userCookie = cookie.load("userData");
const initialState = {
  token: userCookie ? userCookie.token ? userCookie.token : null : null,
  username: userCookie ? userCookie.username ? userCookie.username : null : null,
  error: null,
  loading: false,
  authRedirectPath: null,
};

const authStart = (state) => {
  return updateObject(state, {
    loading: true,
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.action.token,
    username: action.action.username,
    loading: false,
    error: null
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error
  });
};
 
const googleAuthFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const authLogout = (state) => {
  return updateObject(state, { token: null, username: null, authRedirectPath: null});
};

const setAuthRedirectPath = (state, action) => {
  return updateObject(state, { authRedirectPath: action.path });
};

const resetError = (state) => {
  return updateObject(state, { error: null });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GOOGLE_AUTH_START:
      return authStart(state);
    case actionTypes.GOOGLE_AUTH_FAIL:
        return googleAuthFail(state, action);
    case actionTypes.SESSION_TOKEN_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.SESSION_TOKEN_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_INITIATE_LOGOUT:
      return authLogout(state);
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);
    case actionTypes.RESET_ERROR:
      return resetError(state);
    default:
      return state;
  }
};

export default reducer;
