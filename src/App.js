import React from 'react';
import Dashboard from './container/dashboard/dashboard'
import { Route, Switch } from 'react-router-dom';
import FAQs from './components/pre-auth/FAQs'
import About from './components/pre-auth/About'
import Contact from './components/pre-auth/Contact'
import Features from './components/pre-auth/Features'
import Home from './components/pre-auth/Home'
import Login from './components/authentication/LoginForm/LoginForm'
import Signup from './components/authentication/SignUpForm/SignUpForm'


function App() {
  return (
      <Switch style={{paddingLeft: '0'}}>
        {/* This view is to be only accessible to authenticated users */}
        <Route path="/dashboard" exact component={Dashboard}/>

        <Route path="/faqs" component={FAQs}/>
        <Route path="/features" component={Features}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/" exact component={Home}/>
      </Switch>
  );
}

export default App;