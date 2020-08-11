import React from 'react';
import './login.css';

function Login() {
  return (
    <div className="Login">
        <div className="column">
            <div className="xlogo">logo here</div>
            <div className="signinbox">
                <p className="signin_title">Sign in</p>
                <div>
                    <input value="Email"/>
                    <input value="Password"/>
                    <button>Login</button>
                    <p>Forgot password?</p> 
                </div>
                
            </div>
        </div>
        <div className="column">Right</div>
    </div>
  );
}

export default Login;
