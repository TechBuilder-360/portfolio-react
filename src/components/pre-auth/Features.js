import React from 'react';
import Layout from '../../container/Layout/Layout'

const Features = () => {
    return (
        <Layout>
            <h4>Features</h4>
            <p>This App comes with a lot of Features which include the following:</p>
            <ul>
                <li>Create a portfolio.</li>
                <li>Generate custom link to share portfolio.</li>
                <li>Use custom theme for present portfolio.</li>
                <li>Choose a prefered template for resume download.</li>
                <li>Blogging system <span style={{color:'red'}}>Coming Soon!!</span></li>
            </ul>
        </Layout>
    );
};

export default Features;