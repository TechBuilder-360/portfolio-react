import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import googleLogo from '../../../google.svg';
import {Link} from 'react-router-dom'
import classes from '../LoginForm/LoginForm.module.css'


class LoginForm extends Component {

  state ={
    email: '',
    password: '',
  } 

  inputChangedHandler = (event, id) => {
      event.preventDefault();
      
      switch(id){

          case 'email': this.setState({email: event.target.value});
              break;
          
          case 'password': this.setState({password: event.target.value});
              break;

          default: console.log('blah');
      }
  }

  login = (event) => {
      event.preventDefault();
      console.log(this.state, window.screen.availWidth)
      
  }
    
  googleLogin = () => {
    alert('google login')
  }

  render (){
    return (      
      <div>
         <h5 className="card-title" style={{ 
            fontFamily: 'Poppins',
            lineHeight: '36px',
            height: '36px',
            marginBottom: '30px',
            marginLeft: '40%'
            }}>Sign in</h5>
          <form>           
              <div className="form-group">
                  <input type="email" className="form-control" placeholder="Email"
                  onChange={(event) => this.inputChangedHandler(event, 'email')}/>
              </div>

              <div className="form-group">
                  <input type="password" className="form-control" placeholder="Password"
                  onChange={(event) => this.inputChangedHandler(event, 'password')}
                  />
              </div>
              <div className="row mt-3">
                  <Button style={{background: '#2400FF', width: '185px', marginLeft: '15px', fontFamily: 'Poppins'}} 
                      onClick={this.login} type="submit" className="btn-secondary pull-left">Login
                  </Button>

                  <Link to = '/' style={{ 
                      marginLeft: '65px', textDecoration: 'none', marginTop:'5px', 
                      color : '#6357AE',
                      fontFamily: 'Poppins',
                      fontSize: '15px',
                      lineHeight: '27px',
                      }}>Forgot Password?</Link>
              </div>
              <div >
                  <p className={classes.or}>-------------------Or-------------------</p>
              </div>
              <div>
              <Link className="btn btn-outline-primary mr-3" to='/'
                  style={{
                      background:'#FFFFFF',
                      color: '#6357AE',
                      width: '100%',
                      fontFamily: 'Poppins',
                      fontSize: '15px',
                  }}
                    ><i>
                      <img src={googleLogo} alt="logo" style={{ width:"30px"}}/></i>&nbsp;&nbsp;Login with Google</Link>
              </div>
              
              <div style={{ marginTop:"30px",
                          fontFamily: 'Poppins',
                          fontSize: '13px',
                          color: '#515151'   
                      }}>
                  <p>Don't have an account?&nbsp;<Link  to='/signup' style={{ textDecoration: 'none'}} >&nbsp;Click here</Link></p>
              </div>
              
          </form>
      </div>
    );
  }

};

export default LoginForm;

                       