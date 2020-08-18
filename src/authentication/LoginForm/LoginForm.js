import React from 'react';
import classes from './LoginForm.module.css';
import Layout from '../../hoc/Layout/Layout';

const loginForm = () => {
  return (
    <Layout>
    <div className={classes.Login}>
        <div className="column">
            <div className="xlogo">logo here</div>
            <div className="signinbox">
                <p className="signin_title">Sign in</p>
                <div>
                    <input value="Email"/><br/>
                    <input value="Password"/>
                    <button>Login</button>
                    <p>Forgot password?</p>
                </div>
            </div>
        </div>
        <div className="column">Right</div>
    </div>
    </Layout>
  );
};

export default loginForm;
