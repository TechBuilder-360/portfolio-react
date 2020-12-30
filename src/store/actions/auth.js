import * as actionTypes from "../actions/actionType";
import { instanceAxios } from "../../axios-orders";
import * as query from "./graphqlQuery";
import cookie from "react-cookies";
import { clearMessages, messages } from "./portfolioActions"


const CookiesOptions = {
  path: "/",
  maxAge: 60 * 60 * 24,
  // domain: 'https://*.yourdomain.com',
  // secure: true, //only accessible over https if true
  // httpOnly: true
}

export const loadingStart = () => {
  return {
    type: actionTypes.LOADING_START,
  };
};

export const googleAuthSuccess = (token) => (dispatch) => {
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
      cookie.save("userData", userData, CookiesOptions);
    })
    .catch((err) => {
      dispatch(loadingFailed(err));
    });
};

const login = () => {
  return {
    type: actionTypes.LOGIN
  }
}

export const loginAction = (req) => {
  return (dispatch) => {
    instanceAxios({
      data: query.login(req),
    })
      .then((response) => {
        const res = response.data.data.tokenAuth;
        if(res.success){
          const userData = {
            token: res.token,
            username: res.user.username
          }
          dispatch(sessionTokenSuccess(userData));
          cookie.save("userData", userData, CookiesOptions);
          dispatch(login())
          dispatch(clearMessages())
        } else {
          dispatch(messages("Please, enter valid credentials.", "danger"));
        }
      })
      .catch((err) => {
        dispatch(messages(err.message, "danger"));
      });
  };
};

const register = () => {
  return {
    type: actionTypes.REGISTRATION
  }
}

export const registrationAction = (req) => {
  return (dispatch) => {
    instanceAxios({
      data: query.registration(req),
    })
      .then((response) => {
        const res = response.data.data.register;
        if(res.ok){
          dispatch(register())
          dispatch(messages("Registration Successful", "success"));
          dispatch(loginAction({email: req.email, password: req.password}))
        } else {
          dispatch(messages(res.error, "danger"));
        }
      })
      .catch((err) => {
        dispatch(messages(err.message, "danger"));
      });
  };
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
