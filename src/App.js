import React, { useState } from 'react';
import './App.css';
import Login from './authentication/LoginForm/LoginForm';
import SignUp from './authentication/SignUpForm/SignUpForm';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import Alert from 'react-bootstrap/Alert'
//React Router
import {Switch, Route} from 'react-router-dom'


const ExampleToast = ({ children }) => {

  // [
  //   'primary',
  //   'secondary',
  //   'success',
  //   'danger',
  //   'warning',
  //   'info',
  //   'light',
  //   'dark',
  // ].map((variant, idx) => (
  //   <Alert key={idx} variant={variant}>
  //     This is a {variant} alert with{' '}
  //     <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
  //     like.
  //   </Alert>
  // ));

  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        {/* <Route path="/dashboard" component={Dashboard}/>
        <Route path="/details" component={Details}/>
        <Route component={NotFoundPage}/> */}
      </Switch> 
    </div>
  );
}

export default App;

{/* <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Welcome To React-Bootstrap</h1>
      <ExampleToast>
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
    </Jumbotron>
  </Container> */}