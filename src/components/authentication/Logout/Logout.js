import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Logout = (props) => {

    useEffect(()=>{
        // initial the logout redux action
    },[])

    return (
        <Redirect to="/" />
    );
};


const mapDispatchToProps = dispatch => {
    return {
        onLogout: dispatch()
    }
}

export default connect(null, mapDispatchToProps)(Logout);