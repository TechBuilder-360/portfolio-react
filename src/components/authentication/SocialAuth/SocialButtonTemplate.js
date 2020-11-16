import React from 'react'
import SocialLogin from 'react-social-login'
import classes from "./SocialButton.module.css";
 
class SocialButtonTemplate extends React.Component {
 
    render() {
        return (
            <button onClick={this.props.triggerLogin} className={classes.Button} {...this.props}>
              { this.props.children }
            </button>
        );
    }
}
 
export default SocialLogin(SocialButtonTemplate);