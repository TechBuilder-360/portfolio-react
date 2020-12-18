import React from 'react';
import { Container } from 'react-bootstrap';
import classes from './special.module.css'

const NotFound = () => {

    return (
        <Container fluid className={classes.Body}>
            <p className={classes.Status}>404</p>
            <p className={classes.Text}>
                Page Not Found<br/>
                <span>The URL may be misplaced or the page you are looking is no longer available.</span>
            </p>
        </Container>
    );
};

export default NotFound;