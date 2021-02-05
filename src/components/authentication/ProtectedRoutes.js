import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import * as actions from "../../store/actions/auth";

const ProtectedRoute = (props) => {
  const authState = useSelector((state) => state.auth, shallowEqual);
  const dispatch = useDispatch();
  let location = useLocation();
  let Component = props.component;
  let isAuthenticated = authState.token ? true : false;

  /** if isAuthenticated is false and there is a path (there always is lol), 
   * dispatch it to auth state which will be redirected to after login 
   */
  if (!isAuthenticated && location.pathname) {
    dispatch(actions.setAuthRedirectPath(location.pathname));
  }

  return isAuthenticated ? (
    <Component />
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
};

export default ProtectedRoute;
