import React, { Component } from 'react'
import classes from './SignupForm.module.css'
import Button from 'react-bootstrap/Button';

class SignUpForm extends Component {
    render() {
        return (
            <div className={classes.main}>
                <div className={`${classes.x} container text-center pt-15 col-lg-4 col-md-4 col-sm-4 `}>
                    <div className="card-body mt-5 mb-5">
                        <h5 className="card-title">Sign Up</h5>
                        <form>    

                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="First Name"/>
                            </div>
                            
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="First Name"/>
                            </div>

                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>
                                   
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>
                            
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Re-enter Password"/>
                            </div>
                            

                            {/* <Button className="btn-primary mr-3"><i><FontAwesomeIcon icon={faGoogle}/></i>&nbsp;Sign In With Google</Button> */}
                            <Button className="btn-secondary">Sign up</Button>
                            {/* <Link className="btn btn-outline-primary text-uppercase mt-3">
                                <i><FontAwesomeIcon icon={faPaperPlane}/></i>&nbsp;Send
                            </Link> */}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUpForm