import React from 'react';
import './App.css';

import Layout from './container/Layout/Layout';
//React Router
import {Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Layout>
      
    </Layout>

    // <div>
    //   <Switch>
    //     <Route exact path="/" component={Layout}/>
    //     <Route exact path="/login" component={Login}/>
    //     <Route path="/signup" component={SignUp}/>
    //     {/* <Route path="/dashboard" component={Dashboard}/>
    //     <Route path="/details" component={Details}/>
        // <Route component={NotFoundPage}/> 
    //   </Switch> 
    // </div>
  );
}

export default App;