import React from "react";
import Dashboard from "./container/dashboard/dashboard";
import { Route, Switch } from "react-router-dom";
import FAQs from "./components/pre-auth/FAQs";
import About from "./components/pre-auth/About";
import Contact from "./components/pre-auth/Contact";
import Features from "./components/pre-auth/Features";
import Login from "./components/authentication/LoginForm/LoginForm";
import Signup from "./components/authentication/SignUpForm/SignUpForm";
import Error404 from "./components/Special Page/Error404";
import ProfileEdit from "./components/portfolio-edit/profile-edit";
import PasswordReset from "./components/authentication/Password/PasswordReset";
import PasswordChange from "./components/authentication/Password/PasswordChange";
import Container from "./container/Container";
import Logout from "./components/authentication/Logout/Logout";
import ProtectedRoute from './components/authentication/ProtectedRoutes'
import Configuration from "./components/configuration/configuration";


const App = () => {
  const routes = (
    <Switch style={{ paddingLeft: "0" }}>
      <Route path="/password/reset" exact component={PasswordReset} />
      <Route path="/password/change" exact component={PasswordChange} />
      <Route path="/faqs" exact component={FAQs} />
      <Route path="/features" exact component={Features} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/about" exact component={About} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/" exact component={Login} />
      <ProtectedRoute
        path="/edit"
        exact
        component={ProfileEdit}
      />
      <ProtectedRoute
        path="/configuration"
        exact
        component={Configuration}
      />
      <Route path="/logout" exact component={Logout} />
      <Route path="/:username" exact component={Dashboard} />
      <Route path="*" component={Error404} />
    </Switch>
  );
  return <Container>{routes}</Container>;
};

export default App;
