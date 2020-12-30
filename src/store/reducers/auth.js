import * as actionTypes from "../actions/actionType";
import { updateObject } from "../../shared/utility";
import cookie from "react-cookies";

const userCookie = cookie.load("userData");
const initialState = {
  token: userCookie ? userCookie.token ? userCookie.token : null : null,
  username: userCookie ? userCookie.username ? userCookie.username : null : null,
  error: [],
  loading: false,
  authRedirectPath: null,
};

const loadingStart = (state) => {
  return updateObject(state, {
    loading: true,
  });
};

const loadingStop = (state) => {
  return updateObject(state, {
    loading: false,
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.action.token,
    username: action.action.username,
    loading: false,
    error: []
  });
};
 
const loadingFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const authLogout = (state) => {
  return updateObject(state, 
    { token: null, username: null, error: [], loading: false, authRedirectPath: null }
    );
};

const setAuthRedirectPath = (state, action) => {
  return updateObject(state, { authRedirectPath: action.path });
};

const logError = (state, action) => {
  return updateObject(state, { error: action.error, });
};

const clearError = (state) => {
  return updateObject(state, { error: [] });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING_START:
      return loadingStart(state);
    case actionTypes.LOADING_STOP:
      return loadingStop(state);
    case actionTypes.LOADING_FAILED:
        return loadingFail(state, action);
    case actionTypes.SESSION_TOKEN_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_INITIATE_LOGOUT:
      return authLogout(state);
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);
    case actionTypes.LOG_ERROR:
      return logError(state, action);
    case actionTypes.CLEAR_ERROR:
      return clearError(state);
    default:
      return state;
  }
};

export default reducer;
