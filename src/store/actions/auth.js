import * as actionTypes from "../actions/actionType";
import axios from "axios";

export const googleAuthSuccess = (token) => async (dispatch) => {
  var data = JSON.stringify({
    query: `mutation googleSignin {
      \n  socialAuth(accessToken: "${token}", provider: "google-oauth2") {
      \n    social {
      \n      uid
      \n      user {
      \n        id
      \n        firstName
      \n        username
      \n      }
      \n    }
      \n    token
      \n  }
      \n}`,
  });

  var config = {
    method: "post",
    url: "https://xportfolio.herokuapp.com/graphql/",
    headers: {
      "Content-Type": "application/json",
      Cookie:
        "csrftoken=bQNReb0ipMwkcIraxN1ibpYu9K20WM6S7BERZNI4n45TqElnuQcDH8DRQJCnoEju", // protect csrftoken
    },
    data: data,
  };
  await axios(config)
    .then((response) => {
      const userData = {
        token: response.data.data.socialAuth.token,
        username: response.data.data.socialAuth.social.user.username,
      };
      dispatch(sessionTokenSuccess(userData));
      //   localStorage.setItem("user_data", JSON.stringify(userData));
    })
    .catch((err) => {
      dispatch(sessionTokenFail(err)); // Error needs improvement, maybe a flash message feature
    });

  return {
    type: actionTypes.GOOGLE_AUTH_SUCCESS,
  };
};

export const googleAuthFail = (error) => {
  return {
    type: actionTypes.GOOGLE_AUTH_FAIL,
    error: error,
  };
};

export const sessionTokenSuccess = (userData) => {
  return {
    type: actionTypes.SESSION_TOKEN_SUCCESS,
    action: userData,
  };
};

export const sessionTokenFail = (error) => {
  return {
    type: actionTypes.SESSION_TOKEN_FAIL,
    error: error,
  };
};

export const logout = () => {
  // localStorage.removeItem('token')
  // localStorage.removeItem('expirationDate')
  // localStorage.removeItem('userId')
  return {
    type: actionTypes.AUTH_INITIATE_LOGOUT,
  };
};

export const logoutSucceed = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
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

export const authCheckState = () => {
  return {
    type: actionTypes.AUTH_CHECK_STATE,
  };
};
