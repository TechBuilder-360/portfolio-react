import React from "react";
import classes from "./pre-auth.module.css";
import { Link } from "react-router-dom";
import Layout from '../../container/Layout/Layout'

const Home = () => {
  return (
    <Layout>
    <div className={classes.Wrapper}>
      <p className="title">Home</p>
      <p>Coming soon</p>
      <Link to='/login' className="btn btn-success btn-secondary">
        Get Started
      </Link>
    </div>
    </Layout>
  );
};

export default Home;
