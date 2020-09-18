import React, { Component } from 'react';
import Container from '../Container';
import HomeNavBar from './Navigation/main-navigation';
import classes from './Layout.module.css';
import CarouselImage from './Carousel/carousel';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import googleLogo from '../../google.svg';


class Layout extends Component {
    state ={
        email: '',
        password: '',
    }
  
    emailChangedHandler = (event) => {
        this.setState({email: event.target.value})   
    }
    
    passwordChangedHandler = (event) => {
        this.setState({password: event.target.value})   
    }

    inputChangedHandler = (event, id) => {
        event.preventDefault();
        
        switch(id){

            case 'email': this.setState({email: event.target.value});
                break;
            
            case 'password': this.setState({password: event.target.value});
                break;

            default: console.log('No input event') // fix this
        }
    }
  
    login = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    
    render() {
        return (
            <Container>
                <header>
                    <HomeNavBar/>
                </header>
                <main className={classes.Main}>
                    <section className={classes.Section}>
                        <h5 className="card-title" style={{ 
                            fontFamily: 'Poppins',
                            lineHeight: '36px',
                            height: '36px',
                            marginBottom: '30px'
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
                                    marginLeft: '115px', textDecoration: 'none', marginTop:'5px', 
                                    color : '#6357AE',
                                    fontFamily: 'Poppins',
                                    fontSize: '15px',
                                    lineHeight: '27px',
                                    }}>Forgot Password?</Link>
                            </div>
                            <div style={{ marginTop: '30px', fontFamily: 'Courier'}}>
                                <p>---------------------Or---------------------</p>
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
                                <p>Don't have an account?&nbsp;<Link  to='/signup' style={{ textDecoration: 'none'}} >Click here</Link></p>
                            </div>
                            
                        </form>
                    </section>
                    <aside className={classes.Aside}>
                        <CarouselImage/>
                    </aside>
                </main>
            </Container>
        );
    }
}

export default Layout;