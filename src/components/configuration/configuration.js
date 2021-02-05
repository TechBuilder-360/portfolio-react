import React, { useEffect } from "react";
import classes from "../portfolio-edit/profile-edit.module.css";
import Container from "../../container/Container";
import { ProjectTitle } from "../../static";
import UserNavigation from "../Navigation/portfolio-navBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchPortfolio } from "../../store/actions/portfolioActions";
import SpinnerElement from "../spinner/spinner";
import Footer from "../Footer/Footer";
import BrokenConnection from '../Special Page/brokenConnection'
import DownloadSwitch from "./downloadSwitch";
import Template from "./template";
import PasswordChange from "./password";


const Configuration = () => {
  
  const dispatch = useDispatch();
  const portfolio = useSelector( state => state.portfolio);
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    document.title = `${ProjectTitle} Configurations`;
    
    if(portfolio.personalInfo){
      if (auth.username !== portfolio.personalInfo.username)
        dispatch(fetchPortfolio(auth.username));
    } else dispatch(fetchPortfolio(auth.username));
  },[]);  // eslint-disable-line react-hooks/exhaustive-deps

  let children = <SpinnerElement />;

  if (!auth.loading && portfolio.personalInfo && auth.username === portfolio.personalInfo.username) {
    children = (
      <div className={classes.Wrapper}>
        <section>
          <p className="title">Configuration</p>
          <hr />
          <DownloadSwitch/> 
          <hr/>
          <Template/>
          <hr/>
          <PasswordChange/>
        </section>
      </div>
    );
  } else if(portfolio.redirect){
    children = <BrokenConnection/>
  }

  return (
    <Container>
      <UserNavigation />
      {children}
      {(auth.loading || portfolio.redirect) ? null : <Footer />}
    </Container>
  );
};

export default Configuration;
