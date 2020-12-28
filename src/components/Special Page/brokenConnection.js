import React from 'react';
// import {useSelector} from 'react-redux'
import classes from "./special.module.css"
import {Container as Con} from 'react-bootstrap'
import Container from '../../container/Container'
import img from '../../images/broken-chain.jpg'

const BrokenConnection = () => {

    // const auth = useSelector(state => state.portfolio.)
    return (
      <Container>
        {/* {auth ? <PortfolioNavbar/> : <HomeNavBar/>} */}
        <Con fluid className={classes.Broken}>
            <img className={classes.Img} alt="" src={img}/>
            <p className={classes.Text}>
                <span style={{color: "blueviolet"}}>Network error, check your internet connection.</span>
            </p>
        </Con>
      </Container>
    )
};

export default BrokenConnection;