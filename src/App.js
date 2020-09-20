import React from 'react';
import './App.css';
import Layout from './container/Layout/Layout';
import Dashboard from './container/dashboard/dashboard'
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router-dom';
function App() {
  return (
    <Switch>
      {/* Layout view which serves as an authentication page will be a door to the authentication view. Recommends name be change */}
      <Route path="/" exact component={Layout}/>
      {/* This view is to be only accessible to authenticated users */}
      <Route path="/dashboard" exact component={Dashboard}/>
    </Switch>
  );
}

export default App;