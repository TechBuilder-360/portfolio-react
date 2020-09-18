import React, { Component } from 'react';
import classes from './LoginForm.module.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom'


class LoginForm extends Component {

  constructor(props) {
    super(props)
    this.handleButtonPress = this.handleButtonPress.bind(this)
    this.handleButtonRelease = this.handleButtonRelease.bind(this)
    this.state ={
      email: '',
      password: '',
  }
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
