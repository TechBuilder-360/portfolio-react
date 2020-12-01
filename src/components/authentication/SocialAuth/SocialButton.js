import React from 'react';
import SocialButtonTemplate from './SocialButtonTemplate';
import googleLogo from "../../../images/google.svg";
import * as actions from "../../../store/actions/auth";
import { connect, useDispatch } from 'react-redux';

const SocialButton = (props) => {

    const dispatch = useDispatch();

    const handleSocialLogin = (user) => {
        dispatch(actions.googleAuthSuccess(user._token.accessToken));
    };

    const handleSocialLoginFailure = (err) => {
        dispatch(actions.googleAuthFail(err));
    };

    return (
        <SocialButtonTemplate
          provider="google"
          appId={`${process.env.REACT_APP_CLIENT_ID}`}
          onLoginSuccess={handleSocialLogin}
          onLoginFailure={handleSocialLoginFailure}
        >
          <i>
            <img src={googleLogo} alt="logo" style={{ width: "20px" }} />
          </i>
          &nbsp;&nbsp; {props.title} with Google
        </SocialButtonTemplate>
    );
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading
    }
}

export default SocialButton;