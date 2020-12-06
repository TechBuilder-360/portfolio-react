import React, {useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from "react-redux";
import * as actions from "../../../store/actions/auth";

const Logout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.logout())
    },[dispatch]);

    return (
        <Redirect to="/login" />
    );
};

export default Logout;