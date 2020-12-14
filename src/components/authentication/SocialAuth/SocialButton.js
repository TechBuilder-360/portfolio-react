import React from 'react';
import SocialButtonTemplate from './SocialButtonTemplate';
import googleLogo from "../../../images/google.svg";
import * as actions from "../../../store/actions/auth";
import { useDispatch, useSelector, shallowEqual} from 'react-redux';

const SocialButton = (props) => {

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading, shallowEqual);

    const handleSocialLogin = (user) => {
        dispatch(actions.googleAuthSuccess(user._token.accessToken));
    };

    const handleSocialLoginFailure = (err) => {
        dispatch(actions.googleAuthFail(err));
    };

    return (
        <SocialButtonTemplate
          provider="google"
          appId={`${process.env.CLIENT_ID}`}
          onLoginSuccess={handleSocialLogin}
          onLoginFailure={handleSocialLoginFailure}
          loadspinner={loading}
        >&nbsp;&nbsp;
          <i>
            <img src={googleLogo} alt="logo" style={{ width: "20px" }} />
          </i>
          &nbsp;&nbsp; {props.title} with Google
        </SocialButtonTemplate>
    );
};

export default SocialButton;