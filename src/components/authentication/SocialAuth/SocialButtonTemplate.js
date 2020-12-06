import React from 'react';
import SocialLogin from 'react-social-login';
import classes from "./SocialButton.module.css";
import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { authStart } from "../../../store/actions/auth" 
 
class SocialButtonTemplate extends React.Component {

    initiateLogin(props) {
        const { dispatch } = this.props; 
        dispatch(authStart());
        this.setState({loading : true})
        props.triggerLogin();
    }

 
    render() {
        return (            
            <button onClick={() => this.initiateLogin(this.props)} className={classes.Button} disabled={this.props.loadspinner ? true : false}>             
                {this.props.loadspinner ? 
                <span className="float-left">
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    />
                </span>
                : null}         
            { this.props.children }
            </button>            
        );
    }
}

 
export default connect()(SocialLogin(SocialButtonTemplate));