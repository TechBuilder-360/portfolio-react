import * as actionTypes from "../actions/actionType";
import {instanceAxios} from '../../axios-orders';
import * as query from './graphqlQuery';
import cookie from 'react-cookies';

export const loadingStart = () => {
  return {
    type: actionTypes.LOADING_START,
  };
};

export const googleAuthSuccess = (token) =>  (dispatch) => {
  var config = {
    data: query.googleSignin(token),
  };

  instanceAxios(config)
    .then((response) => {
      const userData = {
        token: response.data.data.socialAuth.token,
        username: response.data.data.socialAuth.social.user.username,
      };
      dispatch(sessionTokenSuccess(userData));
      // const expires = new Date();
      // expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14);
      cookie.save("userData", userData, {
        path: "/",
        // expires,
        // maxAge: 1000,
        // domain: 'https://*.yourdomain.com',
        // secure: true, //only accessible over https if true
        // httpOnly: true
      });
    })
    .catch((err) => {
      dispatch(loadingFailed(err));
    });
};

export const loadingFailed = (error) => {
  return {
    type: actionTypes.LOADING_FAILED,
    error: error,
  };
};

export const logError = (error) => {
  return {
    type: actionTypes.LOG_ERROR,
    error: error,
  };
};

export const loadingStop = (error) => {
  return {
    type: actionTypes.LOADING_STOP,
    error: error,
  };
};

export const sessionTokenSuccess = (userData) => {
  return {
    type: actionTypes.SESSION_TOKEN_SUCCESS,
    action: userData,
  };
};

export const logout = () => {
  cookie.remove("userData", { path: "/" });
  return {
    type: actionTypes.AUTH_INITIATE_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return {
    type: actionTypes.AUTH_CHECK_TIMEOUT,
    expirationTime: expirationTime,
  };
};

export const auth = (email, password, isSignUp) => {
  return {
    type: actionTypes.AUTH_USER,
    email: email,
    password: password,
    isSignUp: isSignUp,
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const clearError = () => {
  return {
    type: actionTypes.CLEAR_ERROR,
  };
};

