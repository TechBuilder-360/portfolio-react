import React from 'react';
import classes from './LoginForm.module.css';
// import Layout from '../../container/Layout/Layout';
// className={`${classes.input} ${classes.email}`} 
const LoginForm = () => {
  return (
    <div className={classes.Login}>
        <div className={classes.column}>
            <div className={classes.xlogo}>logo here</div>
            <div className={classes.signinbox}>
                <p className={classes.signin_title}>Sign in</p>
                <div>
                    <input className={`${classes.input}`} type="email" placeholder="Email"/><br/>
                    <input className={`${classes.input} ${classes.password}`}type="password" placeholder="Password"/>
                    <button>Login</button>
                    <p>Forgot password?</p>
                </div>
            </div>
        </div>
        <div className={classes.column}>Right</div>
    </div>
  );
};

export default LoginForm;
