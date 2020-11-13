import React from "react";
import Dashboard from "./container/dashboard/dashboard";
import { Route, Switch } from "react-router-dom";
import FAQs from "./components/pre-auth/FAQs";
import About from "./components/pre-auth/About";
import Contact from "./components/pre-auth/Contact";
import Features from "./components/pre-auth/Features";
import Home from "./components/pre-auth/Home";
import Login from "./components/authentication/LoginForm/LoginForm";
import Signup from "./components/authentication/SignUpForm/SignUpForm";
import NotFound from "./components/NotFound";
import ProfileEdit from "./components/portfolio-edit/profile-edit";
import PasswordReset from "./components/authentication/Password/PasswordReset";
import PasswordChange from "./components/authentication/Password/PasswordChange";

function App() {
  return (
    <Switch style={{ paddingLeft: "0" }}>
      {/* This view is to be only accessible to authenticated users */}
      <Route path="/profile/:username/edit" exact component={ProfileEdit} />
      <Route
        path="/passwordreset"
        exact
        component={PasswordReset}
      />
      <Route
        path="/passwordchange"
        exact
        component={PasswordChange}
      />

      {/* url pattern https://xportfolio.com/profile/user101 for dashboard*/}
      <Route path="/profile/:username" exact component={Dashboard} />

      <Route path="/faqs" exact component={FAQs} />
      <Route path="/features" exact component={Features} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/about" exact component={About} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/" exact component={Home} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
