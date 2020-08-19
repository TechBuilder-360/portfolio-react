import React,{useState,useCallback} from 'react';
import classes from './LoginForm.module.css';
import Layout from '../../container/Layout/Layout';



const LoginForm = () => {
  return (
    <Layout>
    <div className={classes.Login}>
    <div className="column">
            <div className="xlogo">logo here</div>
            <div className="signinbox">
                <p className="signin_title">Sign in</p>
                <div className="form">
                
                <form onSubmit={onSubmit}>
                    <input id="text_box" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Email"/>
                    <br/>
                    <input id="text_box" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Password"/>
                    <br/>
                    <div id="sec">
                    <button id="button">Login</button>
                    <p id="forget"> <a href="#">Forgot password?</a></p> 
                    </div>
                    </form>
                    <h3 id="break_line">--------------Or----------------</h3>
                    
                    <button id="google"><img src="images/google.png" width={25} 
                    height={25} />  Login with Google</button>
                    <br/>
                    <p id="forget2">Don't have an account? <i><a href="#">click here</a></i></p>
                    

                </div>
                
            </div>
        </div>
        <div className="column">Right</div>
    </div>
    </Layout>
  );
};



export default LoginForm;
