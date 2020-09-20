import React, { Component } from 'react'
import classes from './SignupForm.module.css';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import googleLogo from '../../../google.svg';
import { } from 'react-bootstrap'

class SignUpForm extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirm_password: '',
        accept_policy: false,
    }
    
    inputChangedHandler = (event, id) => {
        event.preventDefault();
        
        switch(id){

            case 'firstName': this.setState({firstName: event.target.value});
                break;
            
            case 'lastName': this.setState({lastName: event.target.value});
                break;

            case 'email': this.setState({email: event.target.value}); 
                break;

            case 'password': this.setState({password: event.target.value}); 
                break;

            case 'confirm_password': this.setState({confirm_password: event.target.value});
                break;                
        }
    }

    accept_policyChangeHandler = (event) => {
        if (event.target.checked){
            this.setState({accept_policy: true});
        }else{
            this.setState({accept_policy: false});
        }
    }
    
  
    signup = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                    <h5 className="card-title" style={{ 
                        fontFamily: 'Poppins',
                        lineHeight: '36px',
                        height: '36px',
                        marginBottom: '30px',
                        marginLeft: '40%'
                        }}>Sign up</h5>

                    <div>
                        <Button 
                            style={{
                                background:'#FFFFFF',
                                color: '#6357AE',
                                width: '100%',
                                fontFamily: 'Poppins',
                                fontSize: '15px',
                            }}
                            onClick={this.googleLogin} className="btn-primary mr-3"><i>
                                <img src={googleLogo} alt="logo" style={{ width:"25px"}}/></i>&nbsp;&nbsp;Signup with Google</Button>
                    </div>

                    <div>
                            <p className={classes.or}>---------------Or----------------</p>
                    </div>

                    <form>           
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="First Name"
                            onChange={(event) => this.inputChangedHandler(event, 'firstName')}/>
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Last Name"
                            onChange={(event) => this.inputChangedHandler(event, 'lastName')}/>
                        </div>

                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email"
                            onChange={(event) => this.inputChangedHandler(event, 'email')}/>
                        </div>
                            
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password"
                            onChange={(event) => this.inputChangedHandler(event, 'password')}/>
                        </div>

                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Confirm Password"
                            onChange={(event) => this.inputChangedHandler(event, 'confirm_password')}/>
                        </div>
                        <div >
                            <input type="checkbox" autoComplete="off"
                            onChange={this.accept_policyChangeHandler}/> I agree to the  <Link to='/'>Terms</Link> and <Link to='/'>Privacy Policy</Link>
                        </div>
                        <div className="mt-3">
                            <Button style={{background: '#2400FF', width: '185px', marginLeft: '25%', fontFamily: 'Poppins'}} 
                                onClick={this.signup} className="btn-secondary pull-left">Sign up
                            </Button>
                        </div>
                        
                    </form>
        </div>
        )
    }
}

export default SignUpForm