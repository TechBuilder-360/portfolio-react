import React from 'react';
import Layout from '../../container/Layout/Layout'

const Features = () => {
    return (
        <Layout>
            <p className="title">Features</p>
            <p>This app comes with a lot of Features which include the following:</p>
            <ul>
                <li>Create a portfolio.</li>
                <li>Generate custom link to share portfolio.</li>
                <li>Choose a preferred template for resume download or upload yours</li>
                <li>Blogging system <span style={{color:'red'}}>Coming Soon!!</span></li>
            </ul>
        </Layout>
    );
};

export default Features;