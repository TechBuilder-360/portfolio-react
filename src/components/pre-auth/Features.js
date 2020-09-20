import React from 'react';
import Layout from '../../container/Layout/Layout'

const Features = () => {
    return (
        <Layout>
            <p className='title'>Features</p>
            <ul>
                <li>Create a portfolio.</li>
                <li>Generate custom link to share portfolio.</li>
                <li>Use custom theme for present portfolio.</li>
                <li>Choose a prefered template for resume download.</li>
            </ul>
        </Layout>
    );
};

export default Features;