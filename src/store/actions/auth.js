import * as actionTypes from "../actions/actionType";
import { instanceAxios } from "../../axios-orders";
import * as query from "./graphqlQuery";
import cookie from "react-cookies";
import { alertDuration, headerToken } from "./portfolioActions"
import {message} from 'antd'


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
        } else {
          message.error("Please, enter valid credentials.", alertDuration)
        }
      })
      .catch(() => {
        message.error("Please, enter valid credentials.", alertDuration)
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
          message.success("Registration Successful", alertDuration)
          dispatch(loginAction({email: req.email, password: req.password}))
        } else {
          message.error(res.error, alertDuration)
        }
      })
      .catch((err) => {
        message.error(err.message, alertDuration)
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

const change_password = () => {
  return {
    type: actionTypes.CHANGE_PASSWORD,
  };
};

export const changePassword = (detail) => {
  return (dispatch) => {
    instanceAxios({
      data: query.passwordChange(detail),
      headers: {
        Authorization: headerToken(),
      }
    })
      .then((response) => {
        if (!response.data.errors) {
          let res = response.data.data.passwordChange;
          if(res.success){
            dispatch(change_password(detail));
            dispatch(logout())
            message.success("Password has been changed", alertDuration)
          } else {
            for(let x in res.errors){
              for(let y in res.errors[x]){
                message.error(`${x}: ${res.errors[x][y].message}`, alertDuration)
              }
           }
          }
        } else {
          response.data.errors.map((err) =>
            message.error(err.message, alertDuration)
          );
        }
      })
      .catch((err) => {
        message.error(err.message, alertDuration);
      });
  };
}