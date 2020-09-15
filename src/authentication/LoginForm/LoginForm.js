import React, { Component } from 'react';
import classes from './LoginForm.module.css';
import Button from 'react-bootstrap/Button';
import Input from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/FormGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom'
// import Layout from '../../container/Layout/Layout';
// className={`${classes.input} ${classes.email}`} 


class LoginForm extends Component {

  state ={
      email: '',
      password: '',
  }

  emailChangedHandler = (event) => {
      // console.log(event.target.value)
      this.setState({email: event.target.value})   
  }
  
  passwordChangedHandler = (event) => {
      // console.log(event.target.value)
      this.setState({password: event.target.value})   
  }

  login = () => {
    console.log(this.state.email, this.state.password)
  }
  
  googleLogin = () => {
    console.log('Google Login')
  }

  render (){
    return (
      // <div className={classes.Login}>
      //     <div className={classes.column}>
      //         <div className={classes.xlogo}>logo here</div>
      //         <div className={classes.signinbox}>
      //             <p className={classes.signin_title}>Sign in</p>
      //             <div>
      //                 <input className={`${classes.input}`} type="email" placeholder="Email"/><br/>
      //                 <input className={`${classes.input} ${classes.password}`}type="password" placeholder="Password"/>
      //                 <button>Login</button>
      //                 <p>Forgot password?</p>
      //                 {/* <Form> */}
      //                 <Button>Sign In With Google</Button>
      //                 {/* </Form> */}
      //             </div>
      //         </div>
      //     </div>
      //     <div className={classes.column}>Right</div>
      // </div>
      
      <div className={classes.main}>
        <div className={`${classes.x} container text-center pt-15 col-lg-4 col-md-4 col-sm-4 `}>
          <div className="card-body mt-5 mb-5">
            <h5 className="card-title">Login</h5>
            <form>           
                  <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email"
                      onChange={this.emailChangedHandler}/>
                  </div>
  
                  <div className="form-group">
                      <input type="password" className="form-control" placeholder="Password"
                      onChange={this.passwordChangedHandler}
                      />
                  </div>
  
                  <Button onClick={this.login} type="submit" className="btn-secondary">Login</Button>
              </form>
              <br/>
              <div>
                  <Button onClick={this.googleLogin} className="btn-primary mr-3"><i><FontAwesomeIcon icon={faGoogle}/></i>&nbsp;Sign In With Google</Button>
                  {/* <Button className="btn-secondary">Sign up</Button> */}
                  <Link className="btn btn-secondary" to='/signup'>Sign up</Link>
              </div>
              
          </div> 
        </div>
      </div>
    );
  }

};

export default LoginForm;
