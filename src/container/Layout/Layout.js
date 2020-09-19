import React, { Component } from 'react';
import Container from '../Container';
import HomeNavBar from '../../components/Navigation/main-navigation';
import classes from './Layout.module.css';
import CarouselImage from '../../components/Carousel/carousel';
import Switch from 'react-bootstrap/esm/Switch';
import Home from '../../components/pre-auth/Home';
import { Route } from 'react-router-dom';
import About from '../../components/pre-auth/About';
import Contact from '../../components/pre-auth/Contact';
import Features from '../../components/pre-auth/Features';
import FAQs from '../../components/pre-auth/FAQs';
import Footer from '../../components/Footer/Footer';
import Login from '../../components/authentication/LoginForm/LoginForm'
import Signup from '../../components/authentication/SignUpForm/SignUpForm'



class Layout extends Component {
    
    render() {
        return (
            <Container>
                <header>
                    <HomeNavBar/>
                </header>
                <main className={classes.Main}>
                    <section className={classes.Section}>
                        <Switch style={{padding: '0', margin: '0'}}>
                            <Route path="/faqs" exact component={FAQs}/>
                            <Route path="/features" exact component={Features}/>
                            <Route path="/contact" exact component={Contact}/>
                            <Route path="/about" exact component={About}/>
                            <Route path="/login" exact component={Login}/>
                            <Route path="/signup" exact component={Signup}/>
                            <Route path="/" exact component={Home}/>
                        </Switch>

                    </section>
                    <aside className={classes.Aside}>
                        <CarouselImage/>
                    </aside>
                </main>
                <Footer/>
            </Container>
        );
    }
}

export default Layout;