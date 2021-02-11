import React from 'react';
import { loadingStart, loadingStop } from "../../../store/actions/auth" 
import { GoogleLogin } from 'react-google-login';
import * as actions from "../../../store/actions/auth";
import { useDispatch, useSelector, shallowEqual} from 'react-redux';
import classes from "./SocialButton.module.css";
import { Spinner } from "react-bootstrap";
import { message } from 'antd'


const SocialButton = (props) => {

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading, shallowEqual);

    const handleSocialLogin = (user) => {
      dispatch(loadingStart());
      dispatch(actions.googleAuthSuccess(user.accessToken));
    };

    const handleSocialLoginFailure = (err) => {
        dispatch(loadingStop());
        message.error(err.error.replaceAll('_', ' '))
        dispatch(actions.loadingFailed(err.error));

    };

    return (
      <GoogleLogin
        clientId={`${process.env.REACT_APP_CLIENT_ID}`}
        className={classes.Button}
        onSuccess={handleSocialLogin}
        onFailure={handleSocialLoginFailure}
        cookiePolicy={'single_host_origin'}
        disabled={loading}
      >
        {loading ? 
          <span className="float-left">
          <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
              />&nbsp; Loading...
          </span>
          : <div>{props.title} with Google</div> }   
      </GoogleLogin>
    );
};

export default SocialButton;