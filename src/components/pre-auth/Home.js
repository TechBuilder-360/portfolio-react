import React from "react";
import classes from "./pre-auth.module.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={classes.Wrapper}>
      <p className="title">Home</p>
      <p>Coming soon</p>
      <Link to='/login' className="btn btn-success btn-secondary">
        Get Started
      </Link>
    </div>
  );
};

export default Home;
