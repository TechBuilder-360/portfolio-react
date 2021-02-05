import React from 'react';
import Container from '../../container/Container'
import classes from './form.module.css';
import moment from 'moment';
import {DatePicker} from 'antd'
import Proptypes from 'prop-types'


const MonthYear = ({changed, name, value, label }) => {
    let init = value || new Date()

    const onChangeHandler = ( _, dateString) =>{
       changed(name, dateString)
    }
    
    return (
        <Container>
            <label className={classes.block}>{label}</label>
            <DatePicker
                className={classes.datePicker}
                picker="month"
                name={name}
                allowClear={false}
                onChange={onChangeHandler} 
                value={moment(init)}
                format={"MMM. YYYY"}
              />
        </Container>
    );
};

MonthYear.prototype = {
    label: Proptypes.string.isRequired,
    value: Proptypes.string.isRequired,
    name: Proptypes.string.isRequired,
    changed: Proptypes.func.isRequired
}

export default MonthYear;
